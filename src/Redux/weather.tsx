import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { fetchWeather } from "./weatherActions";
import type { RootState, AppDispatch } from "./store";
import "./weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const weather = useSelector((state: RootState) => state);

  const handleSearch = () => {
    if (city.trim()) {
      dispatch(fetchWeather(city));
    }
  };

  return (
    <div className="app-container">
      <div className="weather-card">
        <h1 className="app-title">🌦 Weather App</h1>

        <div className="search-box">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {weather.loading && <p className="info-text">Fetching weather...</p>}
        {weather.error && <p className="error-text">⚠️ {weather.error}</p>}

        {weather.data && (
          <div className="weather-info">
            <h2>{weather.data.name}</h2>
            <p className="description">
              {weather.data.weather[0].description}
            </p>
            <p className="temperature">
              {Math.round(weather.data.main.temp)}°C
            </p>

            <div className="extra-info">
              <div>
                💧 <span>{weather.data.main.humidity}%</span>
                <p>Humidity</p>
              </div>
              <div>
                🌬️ <span>{weather.data.wind.speed} m/s</span>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer>Built with ❤️ using OpenWeatherMap API</footer>
    </div>
  );
}
