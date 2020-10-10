import React, { useState } from 'react';

const Searcher = (props) =>{
    const[ inputValue,setInputValue ] = useState('')

    const handlerInputValue=(event)=>{
        setInputValue(event.target.value);
        console.log(event.target.value)
    }
    
    const getCharacters = () =>{
        props.connectApi(inputValue)
    }

    return(
        // <form onSubmit={getCharacters}>
        //     <input
        //     placeholder="Ej: Thor"
        //     type="text"
        //     value={inputValue}
        //     />
        //     <input
        //     type="submit"
        //     />
        // </form>
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