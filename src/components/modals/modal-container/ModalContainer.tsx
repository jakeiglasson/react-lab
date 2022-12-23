import ModalOverlayContainer from '../modal-overlay-container/ModalOverlayContainer';
import styles from './styles.module.scss';
import { ModalContainerProps } from './types';

const ModalContainer = ({ setShowModal, children }: ModalContainerProps) => {
  return (
    <ModalOverlayContainer setShowModal={v => setShowModal(v)}>
      <div id="modal-container" className={styles.container}>
        <div className={styles['button-container']}>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <div className={styles['content-container']}>{children}</div>
      </div>
    </ModalOverlayContainer>
  );
};

export default ModalContainer;
