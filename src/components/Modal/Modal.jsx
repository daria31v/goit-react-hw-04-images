import PropTypes from 'prop-types';
import { Overlay, ModalForm } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({modalImage, onClose}) => {

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
    

  const hanleBackdropClick = e => {
    if (e.currentTarget === e.target) {
    onClose();
    }
  };

  
    return createPortal(
      <Overlay onClick={hanleBackdropClick} onClose={onClose}>
        <ModalForm>
          <img src={modalImage} alt="" />
        </ModalForm>
      </Overlay>,
      modalRoot
    );
  
}

Modal.propTypes = {
  modalImage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}.isRequired;