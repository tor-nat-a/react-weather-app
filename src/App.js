import "./App.css";
import React from 'react';
import Weather from "./Weather";
const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather</h1>
        <Weather defaultCity="Kyiv" />
        <footer>
          This project was coded by Nataliia Torhonska and is
          <a
            href="https://github.com/tor-nat-a/react-weather-app"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
};

export default App;
