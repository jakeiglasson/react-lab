import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlayContainerProps } from './types';
import styles from './styles.module.scss';

const ModalOverlayContainer = ({ setShowModal, children }: ModalOverlayContainerProps) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    // Add an event listener to the 'modal-root' div that listens for clicks
    // When clicked close the modal
    const handleClickOffModal = (event: MouseEvent) => {
      if (event.target && (event.target as HTMLElement).id === 'modal-overlay-container') {
        setShowModal(false);
      }
    };
    modalRoot && modalRoot.addEventListener('click', handleClickOffModal);
    return () => {
      modalRoot && modalRoot.removeEventListener('click', handleClickOffModal);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!modalRoot) {
    console.warn('No div with id "modal-root" to attach modal to'); // eslint-disable-line no-console
    return null;
  }

  return createPortal(
    <div id="modal-overlay-container" className={styles.container}>
      {children}
    </div>,
    modalRoot
  );
};
export default ModalOverlayContainer;
