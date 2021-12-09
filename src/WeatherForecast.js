import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "f1eea97ae866b4f1ba1d0c6161e558e3";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="row">
            <div className="col-6">
              <WeatherIcon code="01d" size={18} />
            </div>
            <div className="col-6">
              <div className="WeatherForecast-max">18</div>
              <div className="WeatherForecast-min">11</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
