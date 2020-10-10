import React, { useState } from 'react';

const Searcher = (props) =>{
    const[ inputValue,setInputValue ] = useState('')

    const handlerInputValue=(event)=>{
        setInputValue(event.target.value);
    }
    
    const getCharacters = () =>{
        props.connectApi(inputValue)
    }

    return(
        <div>
            <input
            placeholder="Ej: Thor"
            type="text"
            value={inputValue}
            onChange={handlerInputValue}
            />
            <button onClick={getCharacters}>Enviar</button>
        </div>
    )
}
export default Searcher;