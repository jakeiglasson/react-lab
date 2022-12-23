import ModalOverlayContainer from '../modal-overlay-container/ModalOverlayContainer';
import styles from './styles.module.scss';
import { ModalContainerProps } from './types';

const ModalContainer = ({ setShowModal, children }: ModalContainerProps) => {
  return (
    <ModalOverlayContainer setShowModal={v => setShowModal(v)}>
      <div id="modal-container" className={styles.container}>
        {children}
      </div>
    </ModalOverlayContainer>
  );
};

export default ModalContainer;
