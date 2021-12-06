import React from "react";
import FormattedDate from "./FormattedDate";


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
          <div className="col-2">
            <img src={props.data.icon} alt={props.data.description} />
          </div>
          <div className="col-5">
            <span className="currentTemperature">
              {Math.round(props.data.temperature)}{" "}
            </span>{" "}
            <span classname="celsiusUnit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
