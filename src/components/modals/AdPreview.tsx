import Modal from 'react-bootstrap/Modal';
import { ProductTwo } from '../product/ProductTwo';
import { Ad } from '../../api';

interface Props {
  show: boolean;
  onHide: () => void;
  product: Ad;
}
function AdPreview({ show, onHide, product }: Props) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProductTwo product={product} />
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export { AdPreview };
