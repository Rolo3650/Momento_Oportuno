/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
import { ChatList, MessageBox } from 'react-chat-elements';
import SendIcon from '@mui/icons-material/Send';
// import { useNavigate } from 'react-router-dom';
import { useGetMyChats } from '../../hooks/querys/chats';
import {
  BaseChatMessage,
  Chat,
  ChatsServices,
  GetChatMessagesResponse,
} from '../../api/Chats';
import { useAppContext } from '../../context';
import Swal from 'sweetalert2';
import { FormControl, TextField } from '@mui/material';
import Pusher from 'pusher-js';
import { config } from '../../utils';

interface Props {}

interface ChatL {
  id: number;
  avatar: string;
  alt: string;
  title: string;
  subtitle: string;
  date: Date;
  unread?: number;
}
const Messages: React.FC<Props> = () => {
  const { state } = useAppContext();
  // const navigateTo = useNavigate();
  const [messageText, setMessageText] = React.useState(''); // Estado para el texto del mensaje
  const [chatList, setChatList] = useState<ChatL[] | undefined>([]);
  const [messages, setMessages] = useState<GetChatMessagesResponse>([]);
  const [newMessage, setNewMessage] = useState<BaseChatMessage>({
    id: 0,
    chat_id: 0,
    created_at: new Date(),
    message: '',
    read: false,
    updated_at: new Date(),
    user_id: 0,
  });
  const [newMessageChat, setNewMessageChat] = useState<Partial<Chat>>({});

  const [counter, setCounter] = useState<number>(0);

  const { data: chats, isLoading, isSuccess } = useGetMyChats();

  const [currentChat, setCurrentChat] = useState<Chat | null | undefined>(null);

  useEffect(() => {
    ChatsServices.getMessages(currentChat ? currentChat.id : 0).then((data) => {
      setMessages(data.reverse());
    });
  }, [currentChat, counter]);

  useEffect(() => {
    if (currentChat?.id) {
      const pusher = new Pusher(config.PUSHER.key, {
        cluster: config.PUSHER.cluster,
      });

      const channel = pusher.subscribe(`chat.${currentChat.id}`);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      channel.bind('new-message', (data: { message: any }) => {
        setNewMessage(data.message);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentChat]);

  useEffect(() => {
    if (state.userState?.user.id) {
      const pusher = new Pusher(config.PUSHER.key, {
        cluster: config.PUSHER.cluster,
      });

      const channel = pusher.subscribe(
        `chats.user.${state.userState?.user.id}`
      );

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      channel.bind('new-message', (data: any) => {
        console.log(data);
        if (data?.chat?.id == '') {
          setNewMessageChat(data?.chat);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.userState?.user]);

  useEffect(() => {
    if (newMessageChat.id && Array.isArray(chatList)) {
      const chatListaArray = chatList;

      chatList.forEach((chat) => {
        if (chat.id == newMessageChat.id) {
          chat.unread = (chat.unread ?? 0) + 1;
        }
      });
      setChatList(chatListaArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newMessageChat]);

  useEffect(() => {
    if (newMessage.id && Array.isArray(messages)) {
      if (newMessage.id != messages[messages.length - 1].id) {
        const new_messages = [...messages];
        new_messages.push(newMessage);
        setMessages(new_messages);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newMessage]);

  useEffect(() => {
    if (chats?.data.length) {
      // console.log(chats);
      setChatList(
        chats?.data.map((chat) => {
          return {
            id: chat.id,
            avatar: chat.listing.thumbnail
              ? chat.listing.thumbnail
              : '/svg/icons/usr_frm.svg',
            alt:
              chat.buyer_id == state.userState?.user.id
                ? chat.seller.name
                : chat.buyer.name,
            title:
              chat.buyer_id == state.userState?.user.id
                ? chat.seller.name
                : chat.buyer.name,
            subtitle: chat.last_message.message,
            date: chat.last_message.created_at,
          };
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chats]);

  const sendMessage = async () => {
    if (messageText.trim() === '') {
      return;
    }

    ChatsServices.postMessage(
      { message: messageText },
      currentChat ? currentChat?.id : 0
    ).catch(() => {
      setMessageText('');
      Swal.fire('Error', 'Error al enviar el mensaje');
    });

    setMessageText('');

    setTimeout(() => {
      setMessageText('');
      setCounter(counter + 1);
    }, 100);
  };

  return (
    <LayoutThree>
      <h1 className="messages-title title text text-font-georgia fw-bold fs-2 text-color-5">
        Mensajes
      </h1>
      {/* <EmptyBoxOne text="No tienes mensajes por el momento." imgSrc="/svg/icons/message_empty.svg"/> */}
      <div className="chat-container d-flex">
        <div className="chat-list-container">
          <div className="chat-list-title">Conversaciones</div>
          {!isLoading && isSuccess ? (
            <ChatList
              className="chat-list"
              id={0}
              lazyLoadingImage=""
              dataSource={
                chatList
                  ? chatList
                  : [{ id: 0, avatar: '/svg/icons/usr_frm.svg' }]
              }
              onClick={(chat) => {
                setCurrentChat(
                  chats && chats.data
                    ? chats.data.find((c) => Number(chat.id === c.id))
                    : null
                );
              }}
            />
          ) : (
            <div>No hay conversaciones</div>
          )}
        </div>
        <div className="chat-conversation-container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="chat-list-title">
              {currentChat?.buyer_id == state.userState?.user.id
                ? currentChat?.seller.name
                : currentChat?.buyer.name}
            </div>
            {/* <GeneralButton
              onClick={() => navigateTo('/user')}
              title="Ver Perfil"
              colorPrimary="secondary"
              hoverColor="secondary"
              endIcon={<ArrowForward />}
              height="40px"
            /> */}
          </div>
          <div className="chat-conversation">
            {messages
              ? messages.map((msg) => {
                  return (
                    <MessageBox
                      id={msg.id}
                      position={
                        msg.user_id == state.userState?.user.id
                          ? 'right'
                          : 'left'
                      }
                      type={'text'}
                      title={
                        msg.user_id == state.userState?.user.id
                          ? state.userState.user.name
                          : `${
                              currentChat &&
                              currentChat.seller.id == msg.user_id
                                ? currentChat.seller.name
                                : currentChat?.buyer.name
                            }`
                      }
                      text={msg.message}
                      date={msg.created_at}
                      focus={false}
                      titleColor={'#000'}
                      forwarded={false}
                      replyButton={false}
                      removeButton={false}
                      status="received"
                      notch={false}
                      retracted={false}
                    />
                  );
                })
              : null}
          </div>
          <div className="chat-write-message">
            <FormControl fullWidth>
              <TextField
                className="mb-2"
                placeholder="Escribe tu mensaje aquí..."
                multiline={true}
                maxRows={2}
                value={messageText}
                onReset={() => setMessageText('')}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e: any) => setMessageText(e.target.value)}
              />
            </FormControl>
            <GeneralButton
              title="Enviar"
              colorPrimary="primary"
              hoverColor="primary"
              endIcon={<SendIcon />}
              height="40px"
              width="130px"
              onClick={sendMessage}
            />
          </div>
        </div>
      </div>
    </LayoutThree>
  );
};

export { Messages };
