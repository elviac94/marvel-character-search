import React, { useState } from 'react';
import CharacterList from './CharacterList';
import fetchResult from '../services/Fetch';
import Searcher from './Searcher'
import '../stylesheets/App.scss';

const App = () => {
  const [ data, setData ] = useState([]);

  const connectApi = (inputValue)=>{
    fetchResult().then(respuesta => {
      setData(respuesta.data.results)
  })
  console.log(inputValue)
  }
 
  return (
    <div className="App">
      <Searcher connectApi={connectApi}/>
      <CharacterList 
      data={data}
      />
    </div>
  );
}

export default App;
