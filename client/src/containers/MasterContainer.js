import React, {useState, useEffect} from 'react';
import {getCurrentStocks} from '../services/ApiServices';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./master.css"
import Header from "../components/sharedComponents/Header";
import NavBar from "../components/sharedComponents/NavBar";
import StockMarketContainer from './StockMarketContainer';
import PortfolioContainer from "./PortfolioContainer";
import {fetchedData} from '../components/stockMarketComponents/fetchedData';
import TopBar from '../components/sharedComponents/TopBar';

import SideBar from '../components/sharedComponents/SideBar';
import Footer from '../components/sharedComponents/Footer';

const MasterContainer = () => {
    const [apiData, setApiData] = useState(fetchedData);
    // const [apiData, setApiData] = useState(null);
    const [historicalPrices, setHistoricalPrices] = useState(null);


    useEffect(() => {
      // getCurrentStocks()
      // .then(data => setApiData(data))
    },[]);

    const handleHistPrices = (histPricesObject) => {
      setHistoricalPrices(histPricesObject)
    };
  
    return (


    <>


      <Router>
        <TopBar/>
          <div className="sidebar-content-container">
            <SideBar/>
            <Routes>
              <Route exact path='/' element={<PortfolioContainer apiData={apiData}/>} />
              <Route path='/stockmarket' element={<StockMarketContainer stocks={apiData} handleHistPrices={handleHistPrices}/>} />
            </Routes>
     {/* <div className="main">
     <Header />
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<PortfolioContainer apiData={apiData}/>} />
          <Route path='/stockmarket' element={<StockMarketContainer stocks={apiData} handleHistPrices={handleHistPrices}/>} />
        </Routes>
      </Router>
     </div> */}
    
     </div>
     <Footer />
     </Router>
       
      
    

       
       
       
    
        
    </>
    );
}
 
export default MasterContainer;