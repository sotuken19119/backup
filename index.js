import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import End from './end';
import Start from './Start';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
          <Route path="/" exact component={End} />
          <Route path="/Start"  component={Start} />
      </div>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
