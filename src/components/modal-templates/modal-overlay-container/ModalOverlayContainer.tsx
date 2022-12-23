import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TestModalProps } from './types';
import styles from './styles.module.scss';
import ModalContainer from '../modal-container/ModalContainer';

const ModalOverlayContainer = ({ setShowModal, children }: TestModalProps) => {
  const modalRoot = document.getElementById('modal-root');

  const handleClickOffModal = (event: MouseEvent) => {
    if (event.target && (event.target as HTMLElement).id === 'modal-overlay-container') {
      // If it is not, close the modal
      setShowModal(false);
    }
  };

  useEffect(() => {
    // Add an event listener to the 'modal-root' div that listens for clicks
    // When clicked close the modal
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
    <div id="modal-overlay-container" className={styles.container}>
      <ModalContainer setShowModal={setShowModal}>{children}</ModalContainer>
    </div>,
    modalRoot
  );
};
export default ModalOverlayContainer;
