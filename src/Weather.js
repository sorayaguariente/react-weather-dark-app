import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Mon, 12:06",
      description: response.data.weather[0].description,
      icon: "https://trusting-brown-57e448.netlify.app/images/04d.png",
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
    });
  }
  if (weatherData.ready) {
    return (<div className="Weather">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <form>
              <input
                type="search"
                placeholder="Enter a city"
                className="citySearch"
                autoFocus="on"
              />
              <input
                type="submit"
                value="Search"
                className="search btn-primary"
              />
            </form>
          </div>
          <div className="col-5">
            <span className="locationLink">
              {" "}
              Or use <a href="/">your current location </a>{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="cityName">
        {weatherData.city}, {weatherData.country}
      </div>
      <div className="cityWeatherData container">
        <div className="row">
          <div className="col-4">
            <div className="currentTime">{weatherData.date}</div>
            <br />
            <div className="currentDescription">{weatherData.description}</div>
            <div className="currentHumidity">
              Humidity: {Math.round(weatherData.humidity)}%
            </div>
            <div className="currentWind">Wind: {Math.round(weatherData.wind)}km/h</div>
          </div>
          <div className="col-2">
            <img src={weatherData.icon} alt={weatherData.description} />
          </div>
          <div className="col-5">
            <span className="currentTemperature">
              {Math.round(weatherData.temperature)}{" "}
            </span>{" "}
            <span classname="celsiusUnit">°C</span>
          </div>
        </div>
      </div>
    </div>);
  }
  else {

  const apiKey = "f1eea97ae866b4f1ba1d0c6161e558e3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    "Loading..."
    
  );
  }
}
