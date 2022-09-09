//1. Components are simple js function
//2. Function name should always start with uppercase letter
//3. Function should always return a single JSX element
//4. Function should always have a single arhument
// 5. Function should be exported 

import React from 'react';
import './Home.css';
import logo from '../logo.svg'
import '../App.css';

const Home = () => {
  return (
    <div>
        <h1 className='head1' style={ { color : 'red', backgroundColor : 'yellow'} }  >My Home Component</h1>
        <button className='btn btn-primary'> Bootstrap wala Button</button>
        <img  src={logo}  alt="" className='App-logo' />
    </div>
  )
}

export default Home