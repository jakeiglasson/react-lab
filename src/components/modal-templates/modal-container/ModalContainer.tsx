import styles from './styles.module.scss';
import { TestModalProps } from './types';

const ModalContainer = ({ setShowModal, children }: TestModalProps) => {
  return (
    <div id="modal-container" className={styles.container}>
      {children}
    </div>
  );
};

export default ModalContainer;
