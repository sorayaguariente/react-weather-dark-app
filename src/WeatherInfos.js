import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfos(props) {
  return (
    <div className="WeatherInfos">
      <div className="cityName">
        {props.data.city}, {props.data.country}
      </div>
      <div className="cityprops.data container">
        <div className="row">
          <div className="col-md-4">
            <div className="currentTime">
              <FormattedDate date={props.data.date} />
            </div>
            <br />
            <div className="currentDescription">{props.data.description}</div>
            <div className="currentHumidity">
              Humidity: {Math.round(props.data.humidity)}%
            </div>
            <div className="currentWind">
              Wind: {Math.round(props.data.wind)}km/h
            </div>
          </div>
          <div className="col-md-3 col-5 float-left">
            <WeatherIcon code={props.data.icon} size={150} />
          </div>
          <div className="col-md-5 col-7">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
      <WeatherForecast coordinates={props.data.coordinates} />
    </div>
  );
}
