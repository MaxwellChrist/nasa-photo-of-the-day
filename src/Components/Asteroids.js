import React from 'react';
import styled, { keyframes } from 'styled-components'; 

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
// console.log(today);

const StyledAsteroid = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};

  ul {
    list-style: none;  
  }
  ul li:nth-child(7n+0) {
    color: ${props => props.theme.red};
  }
  ul li:nth-child(7n+1) {
    color: ${props => props.theme.orange};
  }
  ul li:nth-child(7n+2) {
    color: ${props => props.theme.yellow};
  }
  ul li:nth-child(7n+3) {
    color: ${props => props.theme.green};
  }
  ul li:nth-child(7n+4) {
    color: ${props => props.theme.aqua};
  }
  ul li:nth-child(7n+5) {
    color: ${props => props.theme.blue};
  }
  ul li:nth-child(7n+6) {
    color: ${props => props.theme.violet};
  }

`

const Asteroids = props => {

    return (
        <StyledAsteroid className='asteroid'>
            <h1>Are you ready for some random asteroid's information? No? Too bad!</h1>
            <h2>The asteroid of the day is {props.asteroidData.designation}</h2>
            <p>So NASA Scientists, is this thing hazardous (their words not mine):
            <br />  
            {props.asteroidData.is_potentially_hazardous_asteroid ? 
            "Yes! Everybody Panic!"
            : "Nope, looks like I can sleep tonight!"}
            </p>
            <h3>Here is a very unnecessary list of the asteroids inevitable doom when it strikes the planet:</h3>
            <ul>
             { props.asteroidData.close_approach_data.map((x, index) => {
                if (x.close_approach_date <= today) {
                return (
                    <li key={index}>
                        on {x.close_approach_date}, 
                        the asteroid was orbiting {x.orbiting_body}
                        at a speed of {x.relative_velocity.miles_per_hour} mph!
                    </li> 
                    );              
                }
            })}
            </ul>
        </StyledAsteroid>  
  )
}

export default Asteroids;

// ** code that currently works without limiting the dates to today** //
// { props.asteroidData.close_approach_data.map((x, index) => 
//     <li key={index}>
//         on {x.close_approach_date}, 
//         the asteroid was orbiting {x.orbiting_body}
//         at a speed of {x.relative_velocity.miles_per_hour} mph!
//     </li> 
// )}