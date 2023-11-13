import WeatherCard from "./WeatherCard";

export default function Location({ location, data }) {
    const location_data = data.find(city => city.city === location);

    return (
        <>
            <WeatherCard name={location_data.city} temperature={location_data.temperature} conditions={location_data.forecast}>
                <h4 style={{ textAlign: "center" }}>Your location's weather</h4>
            </WeatherCard>
        </>
    );
}
