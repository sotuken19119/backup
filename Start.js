import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function Start() {
  return (
    <div className="End">
      <h1 className="Clr">スタート</h1>
      <Link to="/">
          <button className="Epp">始める</button>
     </Link>
      
    </div>
  );
}

export default Start;