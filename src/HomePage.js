import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Main.css';

const HomePage = () => {
    const navigate = useNavigate();
    const start = () => {
    navigate("/SecondPage");
    }
  
    return (
        <div className="alignItems">
            <h1>Hello There!</h1>
            <p>Let's buy some insurance. It is going to take only a few steps</p>
        <button className="button" onClick={start}>Start</button>
      </div>
    );
  }

  export default HomePage;