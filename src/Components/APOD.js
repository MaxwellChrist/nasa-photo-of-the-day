import React from 'react';
// import App from '../../src/App';

const APOD = props => {

    return (
        <div className='data'>
            <h1>{props.data.title}</h1>
            <p>{props.data.date}</p>
            <p>{props.data.copyright}</p>
        </div>  
  )
}

export default APOD;