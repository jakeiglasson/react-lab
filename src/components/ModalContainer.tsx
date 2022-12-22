import { createPortal } from 'react-dom';

type TestModalProps = {
  setShowModal: (v: boolean) => void;
};

const ModalContainer = ({ setShowModal }: TestModalProps) => {
  const foo = 'foo';

  const testArray = ['one', 'two'];

  const modalRoot = document.getElementById('modal-root');
  return (
    modalRoot &&
    createPortal(
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        This is a modal
        <button onClick={() => setShowModal(false)}>Close Modal</button>
      </div>,
      modalRoot,
    )
  );
};
export default ModalContainer;
