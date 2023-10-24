import { Modal } from "react-bootstrap";
type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function ModalView({ isOpen, setIsOpen }: Props) {
  //display an comming soon modal
  return (
    <Modal
      show={isOpen}
      onHide={() => setIsOpen(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="bgTherd text-white text-center">
        <Modal.Title>Em breve!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bgSecundary text-white stext-lg-start p-5">
        <p>A loja está em desenvolvimento e será liberada em breve.</p>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#9a9586" }}>
        <button
          className="btn"
          style={{ backgroundColor: "#555038", color: "white" }}
          onClick={() => setIsOpen(false)}
        >
          Fechar
        </button>
      </Modal.Footer>
    </Modal>
  );
}
