import ArrowForward from '@mui/icons-material/ArrowForward';
import { GeneralButton } from '../buttons/GeneralButton';

const SendMessageOne = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container-sendMessage">
        <div className="container-sendMessage-title">Enviar un mensaje</div>
        <div className="container-sendMessage-input">
          <textarea
            className="input-message"
            placeholder="Escriba su mensaje aquí"
          />
        </div>
        <div className="container-send-message-button">
          <div>
            <GeneralButton
              title="Enviar un mensaje"
              endIcon={<ArrowForward />}
              colorPrimary="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { SendMessageOne };
