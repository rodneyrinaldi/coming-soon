import React from 'react';
import logo from './coding.gif';
import rrlogo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Logo" alt="logo" />
        <img src={rrlogo} className="Logorr" alt="rrlogo" />
        <p>
          Novidade em breve
        </p>
      </header>
    </div>
  );
}

export default App;
