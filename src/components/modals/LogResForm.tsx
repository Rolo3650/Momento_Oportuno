import Modal from 'react-bootstrap/Modal';
import { CardLogRes } from '../module/cards/CardLogReg';

interface Props {
  show: boolean;
  onHide: () => void;
}
function LogResForm({ show, onHide }: Props) {
  return (
    <Modal
      show={show}
      onHide={onHide}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName='logResForm-modal'
    >
      <Modal.Header  closeButton></Modal.Header>
      <Modal.Body style={{
        backgroundColor: 'transparent',
      }}>
        <CardLogRes handleClose={onHide}/>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export { LogResForm };
