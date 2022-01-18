import React, {useState, useEffect} from 'react';
import StockMarketList from '../components/stockMarketComponents/StockMarketList';
import StockMarketSearch from '../components/stockMarketComponents/StockMarketSearch';


const StockMarketContainer = ({stocks}) => {


    return (
        <>
            <h1>StockMarketContainer</h1>
            <StockMarketSearch stocks={stocks}/>
            <StockMarketList stocks={stocks}/>
        </>
    )
}

export default StockMarketContainer;
