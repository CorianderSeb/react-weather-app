import React from 'react';
import Weather from "./Weather"
import './App.css';


function App() {
  return (
    <div className="App">
      Weather app
      <h4>
        <Weather city="San Diego" />
      </h4>
      <footer>
        This project was coded by <a href="https://sebastiancseithel.com/" target="_blank" rel="noopener noreferrer"> Sebastian Seithel</a> and {" "} 
         <a
          href="https://github.com/CorianderSeb/react-weather-app"
          target="_blank" rel="noopener noreferrer"
         >open sourced on GitHub.</a>
      </footer>
    </div>
  );
}

export default App;
