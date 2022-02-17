import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY  } from './Constants/index';
import APOD from './Components/APOD';
import Asteroids from './Components/Asteroids';

function App() {

  const [all, setAll] = useState();
  const [neows, setNeows] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        // console.log(res.data);
        setAll(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data);
        setNeows(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      {all && <APOD data={all}/> }
      {neows && <Asteroids asteroidData={neows}/> }
    </div>
  );
}

export default App;