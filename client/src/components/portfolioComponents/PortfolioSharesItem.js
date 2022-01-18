import { deleteShares } from "../../services/PortfolioServices";

const PortfolioSharesItem = ({heldShare, removeHeldSharesInCompany}) => {
    


    const handleDelete = () => {
        deleteShares(heldShare._id) //Delete from DB
        .then(() => {
            removeHeldSharesInCompany(heldShare.id) //Update State
        })
    }
    
    const calculateTotalPurchasePrice = (number, avgPrice) => number * avgPrice
    
    
   let totalPurchasePrice = calculateTotalPurchasePrice(heldShare.numberOfShares, heldShare.avgPurchasePrice).toFixed(2)
   
    return (  

        <>
            <tr>
                <td>
                    {heldShare.symbol}
                </td>
                <td>
                    {heldShare.name}
                </td>
                <td>
                    {heldShare.numberOfShares}
                </td>
                <td>
                    {heldShare.avgPurchasePrice}
                </td>
                <td>
                    CurrentSharePrice
                </td>
                <td>
                    {totalPurchasePrice}
                </td>
                <td>
                    Current Value of All Shares
                </td>
                <td>
                    P/L £ / %
                </td>
                <td>Edit....</td>
                <td>
                    <button onClick={handleDelete} className="btn btn-danger"><i className="bi bi-trash-fill"> Delete</i></button>  
                </td>
            </tr>
        </>


    );
}
 
export default PortfolioSharesItem;