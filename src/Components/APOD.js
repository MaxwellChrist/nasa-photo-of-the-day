import React from 'react';
import styled, { keyframes } from 'styled-components'; 
import { Button } from 'reactstrap';

const kf = keyframes`
  25% {
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 100%);
  }
  50% {
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 100%);
  }
  75% {
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 75%, rgba(255,255,255,1) 100%);
  }
  100% {
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 100%, rgba(255,255,255,1) 100%);
  }
`

const StyledApod = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-bottom: 10px solid black;
  background: ${props => props.theme.white};
  &:hover {
    animation: ${kf} 0.5s infinite linear;
  }
`

const Image = styled.img`
  width: 50%;
`;

const APOD = props => {   

    return (
        <StyledApod className='apod'>
            <h1>{props.data.title}</h1>
            <p>{props.data.date}</p>
            <Image src={props.data.url} title={props.data.title} />
            <p>{props.data.explanation}</p>
            <p>&copy;{props.data.copyright}</p>
        </StyledApod>  
  )
}

export default APOD;