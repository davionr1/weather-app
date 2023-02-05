import { FaArrowDown, FaArrowUp, FaWind, FaSun, FaCloudRain } from "react-icons/fa";

import { WiHumidity } from "react-icons/wi";
import { useState } from "react";
import './weather.css'
import React from "react";
const WeatherGallery = (props) => {
    function createWeatherItem() {
        const weatherItem = props.handleSetLocation;
        console.log("Weather Item", weatherItem)
        if (Array.isArray(weatherItem)) {
            return (
                <div>
                    <div className="section section_temperature">
                        <div className="icon">
                            <h3>{weatherItem[0].resolvedAddress}</h3>

                            <img
                                src="https://cdn-icons-png.flaticon.com/128/414/414927.png"
                                alt="Weather icon"
                            />
                            <h1>{weatherItem[0].currentConditions.icon}</h1>

                            <h3>{weatherItem[0].description}</h3>
                        </div>
                        <div className="temperature">
                            <div>
                                <small>Current Temp</small>
                                <h1>{weatherItem[0].currentConditions.temp}°</h1>
                            </div>
                            <div>
                                <small>Feels Like:</small>
                                <h3>{weatherItem[0].currentConditions.feelslike}°</h3>
                            </div>
                        </div>
                    </div>
                    <div className="section section_descriptions">
                        <div className="card">
                            <div className="description_card_icon">
                                <FaCloudRain />
                                <small>Precipitation Chance</small>
                            </div>
                            <h2>{weatherItem[0].currentConditions.precipprob}%</h2>
                        </div>
                        <div className="card">
                            <div className="description_card-icon">
                                <FaWind />
                                <small>wind speed</small>
                            </div>

                            <h2> {weatherItem[0].currentConditions.windspeed}mph</h2>
                        </div>
                        <div className="card">
                            <div className="description_card-icon">
                                <WiHumidity />
                                <small>humidity</small>
                            </div>

                            <h2>{weatherItem[0].currentConditions.humidity}%</h2>
                        </div>

                        <div className="card-suntime">
                            <div className="description_card-icon">
                                <FaArrowUp />

                                <small>max temp</small>
                            </div>

                            <h2>{weatherItem[0]?.days[0].tempmax}°</h2>
                            <br></br>
                            <div className="description_card-icon">
                                <FaArrowDown />
                                <small>min temp</small>
                            </div>

                            <h2>{weatherItem[0]?.days[0].tempmin}°</h2>
                        </div>
                        <div className="card-suntime">
                            <div className="description_card-icon">
                                <FaSun />
                                <small>sunrise</small>
                            </div>
                            <h2>{weatherItem[0].currentConditions.sunrise}</h2>
                            <div className="description_card-icon">
                                <FaSun />
                                <small>sunset</small>
                            </div>
                            <h2>{weatherItem[0].currentConditions.sunset}</h2>
                        </div>
                        <div className="card">

                        </div>
                    </div>
                </div>
            )
        }


    }


    return (
        <div
            className="weatherItem"
        >
            {createWeatherItem()}
        </div>
    )

}
export default WeatherGallery;