import React from "react";
import { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import "./App.css";
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      // console.log(data);
      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search...."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />

      {weather.main && (
        <div className="city">
          <h2>
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="temp">
            <h3>
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </h3>
          </div>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="img"
            />
          </div>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
