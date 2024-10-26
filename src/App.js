
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForecastList from './components/ForecastList';
import HourlyForecast from './components/HourlyForecast';
import "./App.css";

const API_KEY = 'fd48bdf8a8b87b3c140f17625f4e2d57';
const CITY = 'Yerevan';

function App() {
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&units=metric&appid=${API_KEY}`);
        console.log(response.data);
        setForecastData(response.data.list);
      } catch (err) {
        setError('Error');
      }
    };
    fetchWeather();
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Weather In Yerevan For 5 Days</h1>
        {error && <p>{error}</p>}
        <Routes>
          <Route path="/" element={<ForecastList forecastData={forecastData} />} />
          <Route path="/day/:day" element={<HourlyForecast forecastData={forecastData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
