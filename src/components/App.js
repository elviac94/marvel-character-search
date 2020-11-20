import React, { useState } from 'react';
import CharacterList from './CharacterList';
import fetchResult from '../services/Fetch';
import Searcher from './Searcher';
import Modal from './Modal';
import Header from './Header';
import '../stylesheets/App.scss';
import Loader from './Loader';

const App = () => {
  const [data, setData] = useState([]);
  const [infoHero, setInfoHero] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const appContainer = document.querySelector('.App');

  const connectApi = (inputValue) => {
    fetchResult(inputValue).then(respuesta => {
      setData(respuesta.data.results)
      setIsLoading(false)
    })
  }

  const handlerModal = (hero) => {
    setInfoHero(hero);
  }

  const onCloseModal = () => {
    setInfoHero(false)
    appContainer.classList.remove('hide-overflow')
  }

  const printModal = () => {
    appContainer.classList.add('hide-overflow');
    return <Modal onCloseModal={onCloseModal} heroData={infoHero} />
  };

  const handlerLoader = () => {
    setIsLoading(true)
  }

  const printLoader = () => <Loader />
  console.log(isLoading)
  return (
    <div className="App">
      <Header />
      <Searcher connectApi={connectApi} handlerLoader={handlerLoader} />
      { infoHero !== false ? printModal() : ''}
      <CharacterList
        openModal={handlerModal}
        data={data}
      />
      { isLoading === true ? printLoader() : ''}
    </div>
  );
}

export default App;
