import PortfolioSharesItem from "./PortfolioSharesItem";

const PortfolioSharesList = ({heldShares, removeHeldSharesInCompany}) => {

    const portfolioSharesItems = heldShares.map((heldShare, index) => {
        return <PortfolioSharesItem heldShare={heldShare} key={index} removeHeldSharesInCompany={removeHeldSharesInCompany} />
    })



    return ( 

        <>
            <table className="table table-striped table-hover table-responsive">
            <thead className="table-dark" >
            <tr>
                <th>Company</th>
                <th>Name</th>
                <th># Shares
                </th>
                <th>Avg. Price</th>
                <th>Current Price</th>
                <th>Total Paid Price</th>
                <th>Total Value</th>
                <th>P/L</th>
                <th>Edit</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {portfolioSharesItems}
                </tbody>
            </table>
        </>

     );
}
 
export default PortfolioSharesList;


