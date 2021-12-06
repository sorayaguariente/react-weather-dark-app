import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
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

      <div className="cityName">London</div>
      <div className="cityWeatherData container">
        <div className="row">
          <div className="col-4">
            <div className="currentTime">Mon, 12:06</div>
            <br />
            <div className="currentDescription">Broken clouds</div>
            <div className="currentHumidity">Humidity: 92%</div>
            <div className="currentWind">Wind: 0km/h</div>
          </div>
          <div className="col-2">
            <img
              src="https://trusting-brown-57e448.netlify.app/images/04d.png"
              alt="Broken clouds"
            />
          </div>
          <div className="col-5">
            <span className="currentTemperature">7 </span>{" "}
            <span classname="celsiusUnit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
