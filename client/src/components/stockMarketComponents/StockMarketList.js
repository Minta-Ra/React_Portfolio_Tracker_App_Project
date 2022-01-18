import StockMarketItem from './StockMarketItem';


const StockMarketList = ({stocks}) => {

    console.log("StockMarketList", stocks);

    let stockItems

    if (stocks) {
        stockItems = stocks.map((stock, index) => {
            return <StockMarketItem stock={stock} index={index} key={index}/>
        });
    };


    return (
        <>
            <h3>StockMarketList</h3>
            {stockItems}
        </>
    );
};

export default StockMarketList;