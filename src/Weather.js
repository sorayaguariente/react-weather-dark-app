import React, { useState } from "react";
import axios from "axios";
import WeatherInfos from "./WeatherInfos";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
    });
  }
  function searchCity() {
    const apiKey = "f1eea97ae866b4f1ba1d0c6161e558e3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleCityChange}
            placeholder="Enter a city"
            className="citySearch"
            autoFocus="on"
          />
          <input type="submit" value="Search" className="search btn-primary" />
        </form>
        <WeatherInfos data={weatherData} />
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
