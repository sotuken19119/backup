import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function End() {
  return (
    <div className="End">
      <h1 className="Clr">クリア！！！</h1>
      <Link to ="/Start"> 
        <button className="Epp">戻る</button>
      </Link>    
    </div>
  );
}

export default End;
