import React ,{ Component } from 'react';
import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import './Main.css';

const SecondPage= (props) => {
	 const navigate = useNavigate();
	 const [inputs, setInputs] = useState({});
	 
	 var premium = 0;
	 var curr = " ";
	 var countryVal = " ";
	 var safepackInfo = " ";
	 var superpackInfo = " ";
	
	 const data = [
    {
      country: "Hong Kong",
      currency: 'HKD',
      rate: 1,
    },
    {
      country: "USA",
      currency: 'USD',
      rate: 2,
    },
    {
      country: "Australia",
      currency: 'AUD',
      rate: 3,
    },
  ];
  
    
   const handleChange = (event) => {
	 event.preventDefault();
     const name = event.target.name;
     const value = event.target.value;
     setInputs(values => ({...values, [name]: value}))
	}
   
   const handlePremium = (event) => {
	  event.preventDefault();
	  countryVal = event.target.value;
	  premium = inputs.age * 10;
	  
	  if(countryVal == 'Hong Kong'){
		  premium = (inputs.age * 10 * data[0].rate) + data[0].currency;
		  safepackInfo = 100 * data[0].rate + 50 + data[0].currency;
		  superpackInfo = 100 * data[0].rate + 75 + data[0].currency;
	  }
	  else if(countryVal == 'USA'){
		  premium = inputs.age * 10 * data[1].rate + data[1].currency;
		  safepackInfo = 100 * data[1].rate + 50 + data[1].currency;
		  superpackInfo = 100 * data[1].rate + 75 + data[1].currency;
	  }
	  else if(countryVal == 'Australia'){
		  premium = inputs.age * 10 * data[2].rate + data[2].currency;
		  safepackInfo = 100 * data[2].rate + 50 + data[2].currency;
		  superpackInfo = 100 * data[2].rate + 75 + data[2].currency;
	  }
	  
	
	  setInputs(values => ({...values,  premium}))
	  setInputs(values => ({...values,  countryVal}))
	  setInputs(values => ({...values,  safepackInfo}))
	  setInputs(values => ({...values,  superpackInfo}))
   }
	 
    const handleSubmit = (event) => {
     event.preventDefault();
	 const age = inputs.age;
	 
       if (Number(age) > 100) {
        navigate("/ErrorPage");
        return;
     } 
	 navigate("/SummaryPage",{state:{name:inputs.username,age:inputs.age,country:inputs.countryVal,pack:inputs.package1,premium:inputs.premium}});
    // console.log(inputs);
  }
  
  const handleBack = (event) => {
	  navigate(-1);
  }
  
return(
        <div className="alignMainPage">
	    <h1>Tell us about yourself</h1>
	   
	    <form onSubmit={handleSubmit}>
	
		<label style={{float: "left"}}>Name</label>
		<br />
        <input type="text" name="username" value={inputs.username || ""} onChange={handleChange}/>
        <br />
        <label style={{float: "left"}}>Age  </label>
        <input type="number" name="age" value={inputs.age || ""} onChange={handleChange}/>
        <br />
	    <label style={{float: "left"}}>Where do you Live?</label>
	    <select onChange={handlePremium}>
	    <option value="Select">Select Country</option>
	   {data.map(obj=>
          <option key={obj.currency}>{obj.country}</option>)}
	    </select>
	    <br />
	    <label>
        <input type="radio" name="package1" class="form-control" value="Standard" checked={inputs.value} onChange={handleChange} defaultChecked/>
        <span>Standard</span></label>
		<br/>
		<label>
		<input type="radio" name="package1" class="form-control" value="Safe" checked={inputs.value} onChange={handleChange}/>
        <span>Safe</span>
        (+{inputs.safepackInfo},50%)</label>
		<br/>
		<label>
		<input type="radio" name="package1" class="form-control" value="Safesuper" checked={inputs.value} onChange={handleChange}/>
        <span>Super Safe</span>
        (+{inputs.superpackInfo},75%)</label>
	    <br />
		<br />
		<h2>Your premium is : {inputs.premium}</h2>
		
		<br/>
		<button className="backButton" onClick ={handleBack}>Back</button>
        <button className="button" onClick ={handleSubmit}>Submit</button>
		
		</form>
	  </div>
	 
   )
  }
  
export default SecondPage;
