import React, {useState} from 'react';

const StockMarketSearch = ({stocks}) => {

    const [stockOptions, setStockOptions] = useState([]);


    const displayOptions = stockOptions.map((stockOption, index) => {
        return <option value={stockOption.symbol} key={index}>{stockOption.companyName}</option>
    });

    const handleSearchResult = (searchedValue) => {
        const result = stocks.filter(stock => {
            if (stock.symbol.toLowerCase().startsWith(searchedValue.toLowerCase())){
                return true;
            } else if (stock.companyName.toLowerCase().startsWith(searchedValue.toLowerCase())){
                return true;
            };
        });
        setStockOptions(result.slice(0, 10));
    };

    const handleSearchChange = (event) => {
        event.preventDefault();

        if (event.target.value.length >= 2) {
            handleSearchResult(event.target.value)
        } else {
            setStockOptions([]);
        };
    };

    // TODO - On submit
    // const handleSearchSubmit = (event) => {
    //     event.preventDefault();
    //     handleSearchResult(searchStocks);       // Write in StockMarketContainer
    // };

    return (
        <div>
            <label>
            <input onChange={handleSearchChange} list="browsers" name="browser"/>
            </label>
                <datalist id="browsers">
                    {displayOptions}
                </datalist>
        </div>
    );
};

export default StockMarketSearch;