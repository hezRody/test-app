import React ,{ Component } from 'react';
import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './Main.css';

function SummaryPage({handleSubmit}){
	 const location = useLocation(); 
	 const navigate = useNavigate();
	 
	 const submitSuccess = () =>{
		 navigate(-2);
	 }
	  const handleBack = () =>{
		 navigate(-1);
	 }
return(

        <div className="alignMainPage">
	    <h1>Summary</h1>
	
		<p>Name: {location.state.name}</p>
		<p>Age : {location.state.age}</p>
		<p>Where do you live ? {location.state.country}</p>
		<p>Package : {location.state.pack}</p>
		<p>Premium : {location.state.premium}</p>
		<br />
		<button className="backButton" onClick ={handleBack}>Back</button>
        <button className="button" onClick ={submitSuccess}>Submit</button>
		
      </div>
	
   )
  }
  
export default SummaryPage;
