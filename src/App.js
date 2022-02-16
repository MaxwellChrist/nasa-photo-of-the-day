import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY  } from './Constants/index';
import APOD from './Components/APOD';

function App() {

  const [all, setAll] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data);
        setAll(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
     { all && <APOD data={all}/>  }
    </div>
  );
}

export default App;