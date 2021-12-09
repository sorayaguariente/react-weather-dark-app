import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function date() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{date()}</div>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.weather[0].icon} size={18} />
        </div>
        <div className="col-6">
          <div className="WeatherForecast-max">{maxTemperature()}</div>
          <div className="WeatherForecast-min">{minTemperature()}</div>
        </div>
      </div>
    </div>
  );
}
