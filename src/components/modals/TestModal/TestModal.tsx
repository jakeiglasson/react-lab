import ModalContainer from '../modal-container/ModalContainer';
import styles from './styles.module.scss';
import { TestModalProps } from './types';

const TestModal = ({ setShowModal }: TestModalProps) => {
  return (
    <ModalContainer setShowModal={v => setShowModal(v)}>
      <div id={'test-modal-container'} className={styles.container}>
        <p>This is a modal</p>
        <button onClick={() => setShowModal(false)}>Close Modal</button>
      </div>
    </ModalContainer>
  );
};

export default TestModal;
