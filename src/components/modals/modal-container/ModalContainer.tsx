import ModalOverlayContainer from '../modal-overlay-container/ModalOverlayContainer';
import styles from './styles.module.scss';
import { ModalContainerProps } from './types';
import DefaultBackgroundImage from '../../../assets/micro_carbon.png';

const ModalContainer = ({
  setShowModal,
  children,
  background,
  overlayColor,
}: ModalContainerProps) => {
  const _backgroundImage =
    background?.image === 'default' ? DefaultBackgroundImage : background?.image?.filePath ?? '';

  const darkOverlay = overlayColor === 'dark' ? 'rgba(0, 0, 0, 0.8)' : '';
  const lightOverlay = overlayColor === 'light' ? 'rgba(255, 255, 255, 0.9)' : '';
  const _overlayColor = darkOverlay || lightOverlay || overlayColor || '';

  return (
    <ModalOverlayContainer setShowModal={v => setShowModal(v)}>
      <div
        id="modal-container"
        className={styles.container}
        style={{
          backgroundImage: _backgroundImage ? `url(${_backgroundImage})` : '',
        }}
      >
        <div className={styles['image-overlay']} style={{ backgroundColor: _overlayColor }} />
        <div className={styles['button-container']}>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <div className={styles['content-container']}>{children}</div>
      </div>
    </ModalOverlayContainer>
  );
};

export default ModalContainer;
