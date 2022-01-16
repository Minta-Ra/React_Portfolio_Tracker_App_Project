import React, {useState, useEffect} from 'react';
import {getCurrentStocks} from '../services/ApiServices';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/sharedComponents/Header";
import NavBar from "../components/sharedComponents/NavBar";
import StockMarketContainer from './StockMarketContainer';
import PortfolioContainer from "./PortfolioContainer";


import {fetchedData} from '../components/stockMarketComponents/fetchedData';

const MasterContainer = () => {
    const [apiData, setApiData] = useState(fetchedData);
    // const [apiData, setApiData] = useState(null);

    useEffect(() => {
      // getCurrentStocks()
      // .then(data => setApiData(data))
    },[])
  
    return (
    <>
      <Header />
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<PortfolioContainer apiData={apiData}/>} />
          <Route path='/stockmarket' element={<StockMarketContainer stocks={apiData}/>} />
        </Routes>
      </Router>
        
    </>
    );
}
 
export default MasterContainer;