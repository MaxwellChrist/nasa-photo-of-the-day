import React, { useState, useEffect } from 'react'

const APOD = props => {

    // const { copyW, date, exp, title, url } = props;

    
    return (
        <div className='APODData'>
            {props.info.name}
            <button onClick={() => props.openDetails(props.info.id)}>
                See details
            </button>
        </div>
        
  )
}

export default APOD;