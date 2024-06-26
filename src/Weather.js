import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Form() {
  let [city, setCity] = useState("");
  let [message, showMessage] = useState("");

  function capitalize(value) {
    return value
      .split(" ")
      .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
      .join(" ");
  }

  function showTemperature(response) {
    const temp = Math.round(response.data.main.temp);
    const humidity = response.data.main.humidity;
    const wind = response.data.wind.speed;
    const weatherArray = response.data.weather;

    let description = "No description available";
    let icon = "No icon available";
    if (Array.isArray(weatherArray) && weatherArray.length > 0) {
      description = weatherArray[0].description;
      icon = weatherArray[0].icon;
    }
    let displayIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    showMessage(
      <div className="information-section">
        <h3>{capitalize(city)}</h3>
        <ul>
          <li>Temperature: {temp}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img
              src={displayIcon}
              alt="Icon of the weather forecast of the city entered in the form"
            />
          </li>
        </ul>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    let inputCity = event.target.value;
    setCity(inputCity);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          onChange={updateCity}
          className="search-input"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
      <div>{message}</div>
    </div>
  );
}
