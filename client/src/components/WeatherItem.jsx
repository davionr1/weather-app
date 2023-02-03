import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { useState } from "react";
import './weather.css'
import React from "react";
const WeatherItem = (props) => {

  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "url('https://rare-gallery.com/uploads/posts/124416-miui-8-rainy-weather-background-minimal-hd.png')",
      }}
    >
      <div className="section section_temperature">
        <div className="icon">
          <h3>{props.data[0]['resolvedAddress']}</h3>

          {/* <img
            src="https://cdn-icons-png.flaticon.com/128/414/414927.png"
            alt="Weather icon"
          /> */}
          <h1>{props.data[0].currentConditions.icon}</h1>

          <h3>{props.data[0]['description']}</h3>
        </div>
        <div className="temperature">
          <h2>Temp</h2>
          <h3>{props.data[0].currentConditions.temp}</h3>
        </div>
      </div>
      <div className="section section_descriptions">
        <div className="card">
          <div className="description_card-icon">
            <FaArrowDown />
            <small>min temp</small>
          </div>

          {/* <h2>{props.data[0]?.days[0].tempmin}</h2> */}
        </div>
        <div className="card">
          <div className="description_card-icon">
            <FaArrowUp />
            <small>max temp</small>
          </div>

          {/* <h2>{props.data[0]?.days[0].tempmax}</h2> */}
        </div>
        <div className="card">
          <div className="description_card-icon">
            <FaWind />
            <small>wind speed</small>
          </div>

          <h2> {props.data[0]?.currentConditions.windspeed}</h2>
        </div>
        <div className="card">
          <div className="description_card-icon">
            <WiHumidity />
            <small>humidity</small>
          </div>

          <h2>{props.data[0]?.currentConditions.humidity}</h2>
        </div>
      </div>
    </div>
  )
}
export default WeatherItem;

