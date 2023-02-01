import { Container } from './App.styled';
import PropTypes from 'prop-types';
import { SearchBar } from './Searchbar/Searchbar';
import { fetchImages } from 'Service/fetchApi';
import { ImageGallery } from './ImageGallery/ImageGallary';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { useState, useEffect } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImage, setTotalImage] = useState(0);

  const limit = 500;

  useEffect(() => {
    const handleFetchImages = async (query, page) => {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);
        const resultImages = data.hits;
       
        if (!resultImages.length) {
          alert('According to the result of the request, there are no photos!');
          return;
        }
        setImages(prevImages =>
          page === 1 ? [...resultImages] : [...prevImages, ...resultImages]
        );
        setTotalImage(data.totalHits);
      } catch (error) {
        alert('💥SOMETHING WENT WRONG! TRY LATER.');
      } finally {
        setIsLoading(false);
      }
    };
    if (!query) {
      return;
    }
    handleFetchImages(query, page);
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {/* {images === [] && (<Notification/>)} */}
      <ImageGallery images={images} />
      {isLoading ? (
        <Loader />
      ) : (
        images.length !== 0 &&
        images !== limit &&
        images.length < totalImage && <Button onClick={handleLoadMore} />
      )}
    </Container>
  );
};

App.protoType = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
}.isRequired;
