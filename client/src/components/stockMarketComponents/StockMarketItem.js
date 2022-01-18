import React from "react";

const StockMarketItem = ({stock}) => {
    return (
        <div>
            <li><b>Symbol: </b>{stock.symbol}</li>
            <li><b>Company name: </b>{stock.companyName}</li>
            <li><b>Current share price: $</b>{stock.price}</li>
            <li><b>Sector: </b>{stock.sector}</li>
            <li><b>Industry: </b>{stock.industry}</li>
            <li><b>Country: </b>{stock.country}</li>
            <br></br>
        </div>
    )
};

export default StockMarketItem;
