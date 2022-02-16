import React from 'react';

const APOD = props => {

    return (
        <div className='data'>
            <h1>{props.data.title}</h1>
            <p>{props.data.date}</p>
            <iframe src={props.data.url}></iframe>
            <p>{props.data.explanation}</p>
            <p>&copy;{props.data.copyright}</p>
        </div>  
  )
}

export default APOD;