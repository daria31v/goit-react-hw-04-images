import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallary.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({images }) => {
    return( <ImageGalleryList>
        {images.map(image => {
            return <ImageGalleryItem key={image.id} image={image} />
      })}
  </ImageGalleryList>)
};


ImageGallery.poropTypes = {
    images: PropTypes.array.isRequired
}.isRequired