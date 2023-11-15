/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
// import { EmptyBoxOne } from '../../components/module/box/EmptyBoxOne';
import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
// import { ChatList, MessageBox, Input } from 'react-chat-elements';
import { ChatList, Input, MessageBox } from 'react-chat-elements';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useGetMyChats, useGetChatMessages } from '../../hooks/querys/chats';
import { ChatType, ChatsServices } from '../../api/Chats';
import { useAppContext } from '../../context';

interface Props {}
interface Message {
  position: string;
  text: string;
  date: Date;
}

interface Chat {
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
  const navigateTo = useNavigate();
  const [messageText, setMessageText] = React.useState(''); // Estado para el texto del mensaje
  const [chatList, setChatList] = useState<Chat[] | undefined>([]);
  const [messages, setMessages] = useState([]);

  const {
    data: chats,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useGetMyChats();
  const [currentChat, setCurrentChat] = useState<ChatType | null>(
    chats?.data && chats?.data.length ? chats.data[0] : null
  );
  // const { data: messages } = useGetChatMessages(
  //   currentChat ? currentChat.id : chats?.data[0].id
  // );

  useEffect(() => {
    console.log(messages);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  ChatsServices.getMessages(
    currentChat ? currentChat.id : chats?.data[0].id
  ).then((data) => {
    setMessages(data.reverse());
  });
  }, [currentChat]);
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

    const newMessage = {
      position: 'right',
      text: messageText,
      date: new Date(),
    };

    setMessageText('');
  };

  const onChatClick = async () => {
    const data = ChatsServices.getMessages(currentChat.id);
    setMessages(data.reverse());
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
          <ChatList
            className="chat-list"
            id={0}
            lazyLoadingImage=""
            dataSource={chatList}
            onClick={(chat) => {
              setCurrentChat(
                chats?.data.find((c) => Number(chat.id) === c.id)
              );
              onChatClick;
            }}
          />
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
                      position={
                        msg.user_id == state.userState?.user.id
                          ? 'right'
                          : 'left'
                      }
                      type={'text'}
                      title={
                        msg.user_id == state.userState?.user.id
                          ? state.userState.user.name
                          : currentChat.seller.name
                      }
                      text={msg.message}
                      date={msg.created_at}
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
