import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './Menu.css';

function End() {
  return (
    <div className="Menu">
      <h1 className="MenuText">クリア！！！</h1>
      <Link to ="/Start"> 
        <button className="MenuButton">戻る</button>
      </Link>    
    </div>
  );
}

export default End;