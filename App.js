import React, { useState } from 'react';
import cities from "./data";
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";

function App() {
    const [location, set_location] = useState("London");

    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                <Location location={location} data={cities} />
                {
                    cities.map(city => (
                        <WeatherCard key={city.city} name={city.city} temperature={city.temperature} conditions={city.forecast} />
                    ))
                }
            </div>
            
        </>
    )
}

export default App;
