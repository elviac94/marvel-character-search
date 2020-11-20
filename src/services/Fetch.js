import axios from 'axios';

const ENDPOINT = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=12&apikey=6d055bd0ed423bc8b88ae657a59a7a6d&hash=348fe3b8ab4464fbba8f113826c15a30';
const fetchResult = (inputValue) => axios.get(
    inputValue ? ENDPOINT + '&nameStartsWith=' + inputValue : ENDPOINT
).then(response => response.data);

export default fetchResult;
