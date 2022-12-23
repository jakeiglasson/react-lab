import ModalContainer from '../modal-container/ModalContainer';
import styles from './styles.module.scss';
import { TestModalProps } from './types';
// import BackgroundImage from '../../../assets/micro_carbon.png';

const TestModal = ({ setShowModal }: TestModalProps) => {
  return (
    <ModalContainer
      setShowModal={v => setShowModal(v)}
      background={{ image: 'default' }}
      overlayColor={'rgba(255,0,0,0.5)'}
    >
      <div id={'test-modal-container'} className={styles.container}>
        <p>This is a test modal</p>
      </div>
    </ModalContainer>
  );
};

export default TestModal;
