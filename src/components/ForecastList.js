
import React from 'react';
import { Link } from 'react-router-dom';

function ForecastList({ forecastData }) {
  const dailyData = forecastData.filter((item, index) => index % 8 === 0);
  return (
    <div className="forecast-list">
      {dailyData.map((day, index) => (
        <div key={index} className="forecast-item">
          <h3>{new Date(day.dt * 1000).toLocaleDateString('en-EN', { weekday: 'long' })}</h3>
          <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="weather icon" />
          <p>Max: {day.main.temp_max}°C</p>
          <p>Min: {day.main.temp_min}°C</p>
          <Link to={`/day/${index}`}>More Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ForecastList;
