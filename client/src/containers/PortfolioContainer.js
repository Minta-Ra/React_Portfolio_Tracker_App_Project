
import React, { useEffect, useState } from "react";
import { deleteShares, getHeldShares, postNewShareAdd } from "../services/PortfolioServices";
import PortfolioSharesList from "../components/portfolioComponents/PortfolioSharesList";
import Chart from '../components/sharedComponents/Chart';

const PortfolioContainer = () => {

    const [heldShares, setHeldShares] = useState([]);

    useEffect(() => {
        getHeldShares()
        .then(shares => setHeldShares(shares))
    }, [])


    //REMOVE ALL SHARES IN A PARTICULAR COMPANY
    const removeHeldSharesInCompany = (id) => {
        const temp = heldShares.map(shares => shares);
        const indexToDelete = temp.map(shares => shares._id).indexOf(id);
        temp.splice(indexToDelete, 1);
        setHeldShares(temp);
    }

    //ADD A SHARE IN A STOCK WE DO NOT HAVE IN OUR PORTFOLIO
    const addNewShares = (newShares) => {
        postNewShareAdd(newShares)
        .then(savedNewShares => setHeldShares([...heldShares, savedNewShares]))
    }

    return (  

        <>
            <p>Portfolio Container</p>
            <PortfolioSharesList heldShares={heldShares} removeHeldSharesInCompany={removeHeldSharesInCompany} />
            <Chart sharesData={heldShares} />
        </>

    );
}
 
export default PortfolioContainer;
