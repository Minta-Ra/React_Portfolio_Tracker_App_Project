import React, {useState, useEffect} from 'react';
import {getCurrentStocks} from '../services/ApiServices';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import StockMarketContainer from './StockMarketContainer';
import PortfolioContainer from "./PortfolioContainer";


import fetchedData from '../components/stockMarketComponents/fetchedData';

const MasterContainer = () => {
    const [apiData, setApiData] = useState(fetchedData);

    useEffect(() => {
      // getCurrentStocks()
      // .then(data => console.log(JSON.stringify(data)))
      // .then(data => setApiData(data))
    },[])
  
    return (
    <>
      <Header title="Our Stock Portfolio App"/>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<StockMarketContainer stocks={apiData}/>} />
          <Route path='/portfolio' element={<PortfolioContainer />} />
        </Routes>
      </Router>
        
    </>
    );
}
 
export default MasterContainer;