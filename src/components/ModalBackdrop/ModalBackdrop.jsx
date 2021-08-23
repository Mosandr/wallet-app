import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './ModalBackdrop.module.css'

const modalRoot = document.querySelector('#modal-root');

function ModalBackdrop({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      {children}
    </div>,
    modalRoot,
  );
}

export default ModalBackdrop
