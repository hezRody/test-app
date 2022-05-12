import React ,{ Component } from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Main.css';

const ErrorPage = () => {
	 const navigate = useNavigate();
	 const [inputs, setInputs] = useState({});
	
     const handleBack = (event) => {
	  navigate(-2);
   }
  
return(
      <div className="alignMainPage">
	  <h1>OOps</h1>
	  <p className="alignParagraph">Your age is over our accepted limit.
        We are sorry but we cannot ensure you now.
      </p>
       <button className="button" onClick ={handleBack}>Ok(.</button>	  
      </div>
	 
   )
  }
  
export default ErrorPage;
