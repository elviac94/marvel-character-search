import React, { useState } from 'react';
import CharacterList from './CharacterList';
import fetchResult from '../services/Fetch';
import Searcher from './Searcher';
import Modal from './Modal';
import '../stylesheets/App.scss';

const App = () => {
  const [data, setData] = useState([]);
  const [infoHero, setInfoHero] = useState(false)

  const connectApi = (inputValue) => {
    fetchResult(inputValue).then(respuesta => {
      setData(respuesta.data.results)
    })
  }
  
  const handlerModal = (hero) => {
    setInfoHero(hero);
  }

  const onCloseModal = () =>{
    setInfoHero(false)
  }

  const printModal = () => <Modal onCloseModal={onCloseModal} heroData={infoHero} /> ;
  const printList = () => <CharacterList
    openModal={handlerModal}
    data={data}
  />;

  return (
    <div className="App">
      <Searcher connectApi={connectApi} />
      { infoHero !== false ? printModal() : printList()}
    </div>
  );
}

export default App;
