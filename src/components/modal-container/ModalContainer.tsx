import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TestModalProps } from './types';

const ModalContainer = ({ setShowModal }: TestModalProps) => {
  const modalRoot = document.getElementById('modal-root');

  const handleClickOffModal = (event: MouseEvent) => {
    if (event.target && (event.target as HTMLElement).id !== 'modalContentContainer') {
      // If it is not, close the modal
      setShowModal(false);
    }
  };

  useEffect(() => {
    // Add an event listener to the 'modal-root' div that listens for clicks
    modalRoot && modalRoot.addEventListener('click', handleClickOffModal);
    return () => {
      modalRoot && modalRoot.removeEventListener('click', handleClickOffModal);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!modalRoot) {
    alert('No modal root to attach modal to');
    return null;
  }

  return createPortal(
    <div style={Styles.containerStyle}>
      <div id={'modalContentContainer'} style={Styles.contentContainer}>
        This is a modal
        <button onClick={() => setShowModal(false)}>Close Modal</button>
      </div>
    </div>,
    modalRoot
  );
};
export default ModalContainer;

const Styles = {
  containerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    maxWidth: '87.5%',
    maxHeight: '87.5%',
    width: '100%',
    height: '100%',
    backgroundColor: ' rgba(255, 0, 0, 0.25)',
  },
} satisfies Record<string, React.CSSProperties>;
