// const ENDPOINT ='https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=12&apikey=995f3e29bf3faa7a88eaae6f7b89c237&hash=62d390e86399176a4e91a25b1185b0be';

const enn='https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=tho&limit=12&apikey=6d055bd0ed423bc8b88ae657a59a7a6d&hash=348fe3b8ab4464fbba8f113826c15a30';
const ENDPOINT='https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=12&apikey=6d055bd0ed423bc8b88ae657a59a7a6d&hash=348fe3b8ab4464fbba8f113826c15a30';
const fetchResult = (inputValue) => fetch(
    inputValue ? ENDPOINT + '&nameStartsWith=' + inputValue : ENDPOINT 
).then(response => response.json());

export default fetchResult;

//nameStartsWith=tho&