
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function HourlyForecast({ forecastData }) {
  const { day } = useParams();
  const dailyForecast = forecastData.slice(day * 8, day * 8 + 8);

  return (
    <div className='hourly'>
      <h2>Hourly Forecast</h2>
      <Link to="/">Back To Daily Forecast</Link>
      <div className="hourly-forecast">
        {dailyForecast.map((hour, index) => (
          <div key={index} className="hourly-item">
            <p>{new Date(hour.dt * 1000).toLocaleTimeString('en-EN')}</p>
            <img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} alt="weather icon" />
            <p>Temperature: {hour.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
