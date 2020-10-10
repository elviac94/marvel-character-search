import React, { useState } from 'react';
import CharacterList from './CharacterList';
import fetchResult from '../services/Fetch';
import Searcher from './Searcher';
import Modal from './Modal';
import '../stylesheets/App.scss';

const App = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  const connectApi = (inputValue) => {
    fetchResult(inputValue).then(respuesta => {
      setData(respuesta.data.results)
    })
    console.log(inputValue)
  }

  const handlerModal = (hero) => {
    console.log(hero)
    setIsOpen(true);
  }

  const onCloseModal = () =>{
    setIsOpen(false)
  }

  const printModal = () => <Modal onCloseModal={onCloseModal} />;
  const printList = () => <CharacterList
    openModal={handlerModal}
    data={data}
  />;

  console.log(`isOpen: ${isOpen}`);

  return (
    <div className="App">
      <Searcher connectApi={connectApi} />
      { isOpen === true ? printModal() : printList()}
    </div>
  );
}

export default App;
