import React, { useState } from 'react';
import CharacterList from './CharacterList';
import fetchResult from '../services/Fetch';
import Searcher from './Searcher';
import Modal from './Modal';
import Header from './Header';
import '../stylesheets/App.scss';

const App = () => {
  const [data, setData] = useState([]);
  const [infoHero, setInfoHero] = useState(false);
  const appContainer = document.querySelector('.App');

  const connectApi = (inputValue) => {
    fetchResult(inputValue).then(respuesta => {
      setData(respuesta.data.results)
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
 
  return (
    <div className="App">
      <Header/>
      <Searcher connectApi={connectApi} />
      { infoHero !== false ? printModal() : ''}
      <CharacterList
        openModal={handlerModal}
        data={data}
      />
    </div>
  );
}

export default App;
