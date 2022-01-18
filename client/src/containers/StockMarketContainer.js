import React, {useState, useEffect} from 'react';
import StockMarketList from '../components/stockMarketComponents/StockMarketList';
import StockMarketSearch from '../components/stockMarketComponents/StockMarketSearch';
import StockItemDetails from '../components/stockMarketComponents/StockItemDetails';
import {Row, Col} from "react-bootstrap";
import './StockMarketContainer.css'
const StockMarketContainer = ({stocks, handleHistPrices}) => {

    const [searchedStockSymbol, setSearchedStockSymbol] = useState(null);

    const handleSearchedStock = (stockName) => {
        // Change the state with event.target.value after enter
        setSearchedStockSymbol(stockName)
    };

    return (
        <>
            <div className='stockmarket-container'>
                <Row>
                    <Col>
                    <StockMarketSearch stocks={stocks} handleSearchedStock={handleSearchedStock}/>
                    </Col>
                </Row>
                <Row>
                    {searchedStockSymbol ? <Col><StockItemDetails symbol={searchedStockSymbol} handleHistPrices={handleHistPrices}/></Col> : null}
                </Row>
                <Row>
                    <Col>
                        <StockMarketList stocks={stocks}/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default StockMarketContainer;
