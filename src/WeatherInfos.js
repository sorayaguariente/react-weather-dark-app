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
          <div className="col-4">
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
          <div className="col-2 float-left">
            <WeatherIcon code={props.data.icon} size={164} />
          </div>
          <div className="col-5">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
      <WeatherForecast coordinates={props.data.coordinates} />
    </div>
  );
}
