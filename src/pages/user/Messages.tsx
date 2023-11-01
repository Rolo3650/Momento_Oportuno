import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { EmptyBoxOne } from '../../components/module/box/EmptyBoxOne';
import { GeneralButton } from '../../components/inputs/buttons/GeneralButton';
import { ChatList, MessageBox, Input } from 'react-chat-elements';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import ArrowForward from '@mui/icons-material/ArrowForward';

interface Props { }

const Messages: React.FC<Props> = () => {
  const navigateTo = useNavigate();
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
            dataSource={[
              {
                avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                alt: 'Fabian',
                title: 'Fabian',
                subtitle: 'Hola!',
                date: new Date(),
                unread: 1,
              },
              {
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
            <MessageBox
              position={'left'}
              type={'text'}
              text="Hola!"
              date={new Date()}
            />
            <MessageBox
              position={'right'}
              type={'text'}
              text="Hola Fabian!"
              date={new Date()}
            />
            <MessageBox
              position={'left'}
              type={'text'}
              text="quien eres!"
              date={new Date()}
            />
            <MessageBox
              position={'right'}
              type={'text'}
              text="soy yo!"
              date={new Date()}
            />
            <MessageBox
              position={'left'}
              type={'text'}
              text="quien"
              date={new Date()}
            />
            <MessageBox
              position={'right'}
              type={'text'}
              text="yo"
              date={new Date()}
            />
            <MessageBox
              position={'left'}
              type={'text'}
              text="quien yo"
              date={new Date()}
            />
            <MessageBox
              position={'right'}
              type={'text'}
              text="Hola!"
              date={new Date()}
            />
            <MessageBox
              position={'left'}
              type={'text'}
              text="Hola Yo!"
              date={new Date()}
            />
          </div>
          <div className="chat-write-message">
            <Input
            className="chat-message-input"
              placeholder="Escribe tu mensaje aquí..."
              multiline={true}
            />
            <GeneralButton
              title="enviar"
              colorPrimary="primary"
              hoverColor="primary"
              endIcon={<SendIcon />}
              height="40px"
              width="130px"
            />
          </div>
        </div>
      </div>
    </LayoutThree>
  );
};

export { Messages };
