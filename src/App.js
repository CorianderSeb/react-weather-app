import React from 'react';
import './App.css';
import axios from "axios";

function App() {
  return (
    <div className="App">
      Weather app
      <footer>
        This project was coded by <a href="https://sebastiancseithel.com/" target="_blank" rel="noreferrer"> Sebastian Seithel</a> and {" "} 
         <a
          href="https://github.com/CorianderSeb/react-weather-app"
          target="_blank" rel="noreferrer"
         >open sourced on GitHub.</a>
      </footer>
    </div>
  );
}

export default App;
