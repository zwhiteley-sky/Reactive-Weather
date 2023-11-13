import React from "react";
import sunny from "../assets/Sunny.svg"

export default function WeatherCard({ name, temperature, conditions }) {
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {sunny} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{ name }</h3>
            <h5 className="card-text">{ temperature }</h5>
            <h5 className="card-text">{ conditions }</h5>
        </div>
    </div>
  );
};
