import React, { useState } from "react";
import axios from "axios";
import { Dna } from "react-loader-spinner";

export default function Weather() {
  let [city, setCity] = useState("props.city");
  let [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    getWeatherData();
  }

  function getWeatherData() {
    let apiKey = "9fba0552270644ffade53d9ab23b2ddc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function getWeather() {
    if (weather) {
      return (
        <ul>
          <li>
            The temperature is {Math.round(weather.temperature)} degrees F.{" "}
          </li>
          <li> The weather is {weather.description}. </li>
          <li> The humidity is {weather.humidity}%. </li>
          <li>
            <img
              src={`http:
//openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt="weather icon"
            />
          </li>
        </ul>
      );
    } else {
      getWeatherData();
      return (
        <div>
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      );
    }
  }

  return (
    <div className="Weather">
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a City"
            onChange={updateCity}
          />
          <input type="submit" value="search" />
        </form>
      </div>
      {getWeather()}
    </div>
  );
}
