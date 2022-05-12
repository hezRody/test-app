import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import HomePage from './HomePage';
import SecondPage from './SecondPage';
import ErrorPage from './ErrorPage';
import SummaryPage from './SummaryPage';

function App() {
 
  return (
    <div className="App">
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/SecondPage" element={<SecondPage/>}/>
		<Route exact path="/ErrorPage" element={<ErrorPage/>}/>
	    <Route exact path="/SummaryPage" element={<SummaryPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
