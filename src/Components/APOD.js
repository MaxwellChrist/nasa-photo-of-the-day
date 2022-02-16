import React from 'react';

const APOD = props => {   

    return (
        <div className='apod'>
            <h1>{props.data.title}</h1>
            <p>{props.data.date}</p>
            <iframe src={props.data.url} title={props.data.title}></iframe>
            <p>{props.data.explanation}</p>
            <p>&copy;{props.data.copyright}</p>
        </div>  
  )
}

export default APOD;