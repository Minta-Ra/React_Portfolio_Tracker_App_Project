import {apikey} from './apikey';


export const getCurrentStocks = () => {

    return fetch(`https://financialmodelingprep.com/api/v3/stock-screener?marketCapLowerThan=10000000000000&betaMoreThan=1&volumeMoreThan=100&exchange=NYSE,NASDAQ&apikey=${apikey}`)
    .then(res => res.json());
};
