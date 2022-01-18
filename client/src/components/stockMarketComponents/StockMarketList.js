import StockMarketItem from './StockMarketItem';


const StockMarketList = ({stocks}) => {

    console.log("StockMarketList", stocks);

    let stockItems

    if (stocks) {
        stockItems = stocks.map((stock, index) => {
            if (index > 100){
                return
            };
            return <StockMarketItem stock={stock} index={index} key={index}/>
        });
    };


    return (
        <div>
            <table className="table table-striped table-hover table-responsive-md">
            <thead className="table-dark" >
            <tr>
                <th>Symbol</th>
                <th>Company name</th>
                <th>Average share price</th>
                <th>Sector</th>
                <th>Industry</th>
                <th>Country</th>
            </tr>
            </thead>
                <tbody>
                    {stockItems}
                </tbody>
            </table>
        </div>
    );
};

export default StockMarketList;