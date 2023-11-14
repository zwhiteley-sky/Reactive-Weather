import React, { useState, useEffect } from 'react';
import initial_cities from "./data";
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";

const names = ["London", "Paris", "Berlin"];
const url = "https://goweather.herokuapp.com/weather"

function App() {
    const [cities, set_cities] = useState(initial_cities);
    const [location_input, set_location_input] = useState("");
    const [location, set_location] = useState("London");

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const cities = [];

        names.forEach(async (name, idx) => {
            try {
                const response = await fetch(`${url}/${name}`, { signal });
                const data = await response.json();

                if (!data.message)
                    cities.push({
                        city: name,
                        temperature: data.temperature,
                        forecast: data.description
                    });

                if (idx === names.length - 1) set_cities(cities);
            } catch (e) {
                if (!signal.aborted) throw e;
            }
        });

        return () => controller.abort();
    }, []);

    function location_handler(event) {
        set_location_input(event.currentTarget.value);
    }

    function submit_handler(event) {
        event.preventDefault();
        set_location(location_input);
    }

    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <form onSubmit={submit_handler} style={{ textAlign: "center" }}>
                <input type="text" onChange={location_handler} value={location_input} />
                <input type="submit" value="Set Location" />
            </form>
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
