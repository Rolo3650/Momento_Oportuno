/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
import { ChatList, Input, MessageBox } from 'react-chat-elements';
import SendIcon from '@mui/icons-material/Send';
// import { useNavigate } from 'react-router-dom';
import { useGetMyChats } from '../../hooks/querys/chats';
import { Chat, ChatsServices, GetChatMessagesResponse } from '../../api/Chats';
import { useAppContext } from '../../context';
import Swal from 'sweetalert2';

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
  const [intervals, setIntervals] = useState<NodeJS.Timeout[]>([])

  const [counter, setCounter] = useState<number>(0);

  const { data: chats, isLoading, isSuccess, refetch } = useGetMyChats();

  const [currentChat, setCurrentChat] = useState<Chat | null | undefined>(null);

  // const { data: messages } = useGetChatMessages(
  //   currentChat ? currentChat.id : chats?.data[0].id
  // );

  useEffect(() => {
    const fetchMessages = async () => {
      const messagesData = await ChatsServices.getMessages(
        currentChat && currentChat.id && chats ? chats.data[0].id : 0
      );
      const reversedMessages = messagesData.reverse();
      setMessages(reversedMessages);
    };

    const messagesIntervalId = setInterval(fetchMessages, 10000);
    const chatsIntervalId = setInterval(() => {
      refetch();
    }, 10000);

    return () => {
      clearInterval(messagesIntervalId);
      clearInterval(chatsIntervalId);
    };
  }, [currentChat, refetch, chats]);

  useEffect(() => {
    intervals.map(interval => clearInterval(interval));
    const interval = setInterval(() => {
      console.log(messages);
      // eslint-disable-next-line react-hooks/exhaustive-deps

      ChatsServices.getMessages(currentChat ? currentChat.id : 0).then(
        (data) => {
          setMessages(data.reverse());
        }
      );
    }, 1000);
    setIntervals([...intervals, interval]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentChat, counter]);

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
            alt: chat.seller.name,
            title: chat.seller.name,
            subtitle: chat.last_message.message,
            date: chat.last_message.created_at,
          };
        })
      );
    }
  }, [chats]);

  const sendMessage = async () => {
    console.log(currentChat);
    if (messageText.trim() === '') {
      return;
    }

    ChatsServices.postMessage(
      { message: messageText },
      currentChat ? currentChat?.id : 0
    ).catch(() => {
      Swal.fire('Error', 'Error al enviar el mensaje');
    });

    setMessageText('');

    setTimeout(() => {
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
            <div className="chat-list-title">{currentChat?.seller?.name}</div>
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
                          : currentChat
                          ? currentChat.seller.name
                          : 'Vendedor'
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
            <Input
              maxHeight={50}
              className="chat-message-input"
              placeholder="Escribe tu mensaje aquí..."
              multiline={true}
              value={messageText}
              onReset={() => setMessageText('')}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(e: any) => setMessageText(e.target.value)}
            />
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
