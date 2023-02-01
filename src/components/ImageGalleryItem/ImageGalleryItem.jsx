import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  ImageGalleryItems,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';


export const ImageGalleryItem = ({image: {webformatURL, largeImageURL}}) => {
  
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

    return (
      <>
        <ImageGalleryItems onClick={toggleModal}>
          <ImageGalleryItemImage src={webformatURL} alt="pictures" />
        </ImageGalleryItems>
        {showModal && (
          <Modal modalImage={largeImageURL} onClose={toggleModal} />
        )}
      </>
    );
  }


ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,})
}.isRequired;
