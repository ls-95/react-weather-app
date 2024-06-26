import React from "react";
import axios from "axios";
import { Hourglass } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    let temperature = Math.round(response.data.main.temp);
    alert(`The weather in ${response.data.name} is ${temperature}°C`);
  }

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={["#306cce", "#72a1ed"]}
    />
  );
}
