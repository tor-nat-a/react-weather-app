import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Nataliia Torhonska
          and is{" "}
          <a
            href="https://github.com/tor-nat-a/react-weather-app"
            target="_blank" rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://benevolent-buttercream-0f4bf2.netlify.app/"
            target="_blank" rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}