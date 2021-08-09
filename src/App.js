import React, { useState, useEffect } from "react";
// import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar'
import ImageGallery from "./components/ImageGallery";
import Button from './components/Button'
import Loader from './components/Loader'
import searchApi from './searchApi'
import Modal from './components/Modal'

export default function App() {
  const [hits, setHits] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tags, setTags] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = { searchQuery, currentPage };
    
    if (searchQuery==='') {
      return;
    };
    
    setIsLoading(true);

    searchApi(options)
      .then(hits => {
        setHits((prevState) => [...prevState, ...hits])
        // setCurrentPage(currentPage=>currentPage + 1)
      }
      )
      .catch(() => setError('Sorry! Picture not found. Please try again later!!!' ))
      .finally(() => setIsLoading(false));
  },
    [searchQuery, currentPage]);
  
  const toogleModal = () => {
    setShowModal(!showModal);
  };

  const onOpenModal = (largeImageURL = '') => {
    setLargeImageURL( largeImageURL );
    setTags(tags);
    toogleModal();
  };
  
  const handleSearchSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setCurrentPage(1);
    setHits([]);
    setError(null);
  }

  const loadMore = () => {
    setCurrentPage(currentPage=>currentPage + 1);
  }
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });

        return ( 
          <>
            <Searchbar onSubmit={handleSearchSubmit} />
            {error && <h2>{error}</h2>}
            <ImageGallery hits={hits} onOpenModal={onOpenModal}/>
                
            {isLoading && <Loader />}

            {hits.length > 11 && !isLoading && (
            <Button onClick={loadMore} />
            )}
          
            {showModal && (
            <Modal onClose = {toogleModal}>
                <img src={largeImageURL} alt={tags} />
            </Modal> 
              )
             }
          </>
        )
}