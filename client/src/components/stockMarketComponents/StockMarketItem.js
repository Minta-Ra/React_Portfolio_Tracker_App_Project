import React from "react";

const StockMarketItem = ({stock}) => {
    return (

        <tr>
            <td>{stock.symbol}</td>
            <td style={{width:'20%'}}>{stock.companyName}</td>
            <td>$ {stock.price}</td>
            <td>{stock.sector}</td>
            <td style={{width:'20%'}}>{stock.industry}</td>
            <td>{stock.country}</td>
        </tr>

    )
};

export default StockMarketItem;
