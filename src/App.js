import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY  } from './Constants/index';
// console.log(API_KEY);
import APOD from './Components/APOD';

function App() {
  // const [copyW, setCopyW] = useState(null);
  // const [date, setDate] = useState(null);
  // const [exp, setExp] = useState(null);
  // const [title, setTitle] = useState(null);
  // const [url, setUrl] = useState(null);
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
      // .finally(fin => {
      //   console.log("completed");
      // })
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
     { all && <APOD data={all}/>  }
    </div>
  );
}

export default App;
