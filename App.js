import React from 'react';
import cities from "./data";
import WeatherCard from "./components/WeatherCard";

function App() {
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
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
