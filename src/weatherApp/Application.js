import React, { useState } from 'react';
import { fetchWeather } from '../weatherApp/api/fetchWeathet';

const Application = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({}); 

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery();
            console.log(data)
        }
    }

    return (
        <div className="application">
            <div className="search">
                <input type="text"
                    type="text"
                    className="search"
                    placeholder="Search-weather..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={search}
                />
            </div>
            {weather.main && (
                <div className="city">
                    <div className="info">
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
                    </div>
                    <div className="details">
                        <h2 className="cityName">
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>
                        </h2>
                        <div className="city_temp">
                            {Math.round(weather.main.temp)}
                            <sup>&deg;C</sup>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Application
