import ModalOverlayContainer from '../../modal-templates/modal-overlay-container/ModalOverlayContainer';
import styles from './styles.module.scss';
import { TestModalProps } from './types';

const TestModal = ({ setShowModal }: TestModalProps) => {
  return (
    <ModalOverlayContainer setShowModal={v => setShowModal(v)}>
      <div id={'test-modal-container'} className={styles.contentContainer}>
        <p>This is a modal</p>
        <button onClick={() => setShowModal(false)}>Close Modal</button>
      </div>
    </ModalOverlayContainer>
  );
};

export default TestModal;
