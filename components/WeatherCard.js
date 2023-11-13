import React from "react";
import sunny from "../assets/Sunny.svg"
import cloudy from "../assets/Cloudy.svg"
import partly_cloudy from "../assets/PartlyCloudy.svg"
import rainy from "../assets/Rainy.svg"

export default function WeatherCard({ name, temperature, conditions, children }) {
  let icon;

  switch (conditions.toLowerCase()) {
    case "sunny":
      icon = sunny; break;
    case "cloudy":
      icon = cloudy; break;
    case "partly cloudy":
      icon = partly_cloudy; break;
    case "rainy":
      icon = rainy; break;
  }

  return (
    <div className = "card">
        { children }
        <div className = "img-container">
            <img className="card-img-top" src = {icon} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{ name }</h3>
            <h5 className="card-text">{ temperature }</h5>
            <h5 className="card-text">{ conditions }</h5>
        </div>
    </div>
  );
};
