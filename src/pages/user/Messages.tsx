/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
// import { EmptyBoxOne } from '../../components/module/box/EmptyBoxOne';
import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
// import { ChatList, MessageBox, Input } from 'react-chat-elements';
import { ChatList, Input } from 'react-chat-elements';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import ArrowForward from '@mui/icons-material/ArrowForward';

interface Props {}
interface Message {
  position: string;
  text: string;
  date: Date;
}

const Messages: React.FC<Props> = () => {
  const navigateTo = useNavigate();
  const [messages, setMessages] = React.useState<Message[]>([]); // Estado para rastrear los mensajes
  const [messageText, setMessageText] = React.useState(''); // Estado para el texto del mensaje

  const sendMessage = () => {
    if (messageText.trim() === '') {
      return;
    }

    const newMessage = {
      position: 'right',
      text: messageText,
      date: new Date(),
    };

    setMessages([...messages, newMessage]);

    setMessageText('');
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
            lazyLoadingImage=''
            dataSource={[
              {
                id: 0,
                avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                alt: 'Fabian',
                title: 'Fabian',
                subtitle: 'Hola!',
                date: new Date(),
                unread: 1,
              },
              {
                id: 2,
                avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                alt: 'Fabian',
                title: 'Fabian',
                subtitle: 'Hola!',
                date: new Date(),
                unread: 1,
              },
            ]}
          />
        </div>
        <div className="chat-conversation-container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="chat-list-title">Fabian</div>
            <GeneralButton
              onClick={() => navigateTo('/user')}
              title="Ver Perfil"
              colorPrimary="secondary"
              hoverColor="secondary"
              endIcon={<ArrowForward />}
              height="40px"
            />
          </div>
          <div className="chat-conversation">
            {messages.map((_message) => {
              return (
                <></>
                // <MessageBox
                //   position={_message.position}
                //   type={'text'}
                //   text={_message.text}
                //   date={_message.date}
                // />
              );
            })}
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
