
import React from 'react';
import './CSS/App.css';
import Board from './Components/Board';
import firebase from 'firebase';
import Timer from './Components/Timer';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyHC-XDANIqX4QjXfHdJeVQErEI9Irf4Y",
  authDomain: "graduate-aef93.firebaseapp.com",
  databaseURL: "https://graduate-aef93.firebaseio.com",
  projectId: "graduate-aef93",
  storageBucket: "graduate-aef93.appspot.com",
  messagingSenderId: "130109890146",
  appId: "1:130109890146:web:ca0eab905f6b1a76943b3b",
  measurementId: "G-59DG24R6P1"
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
      <div className="App">
        <Board />
      </div>
  );
}

export default App;
