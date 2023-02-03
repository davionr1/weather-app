import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
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
    
      

      
      {/* Input Weather items in app js for now for styling */}
      <div className="section section_temperature">
              <div className="icon">
                <h3>Los Angeles, CA</h3>
                {/* <h1>{props.resolvedAddress}</h1> */}
                <img
                  src="https://cdn-icons-png.flaticon.com/128/414/414927.png"
                  alt="Weather icon"
                />
                {/* <h1>{props.currentConditions.icon}</h1> */}
                <h3>Cloudy</h3>
                <h3>{props.descriptions}</h3>
              </div>
              <div className="temperature">
                <h1>77 °F</h1>
                {/* <h2>{props.currentConditions.temp}</h2> */}
              </div>
            </div>
      <div className="section section_descriptions">
        <div className="card">
          <div className="description_card-icon">
            <FaArrowDown />
            <small>min temp</small>
          </div>
          <h2>65 °F</h2>
          {/* {props.days[0].tempmin} */}
        </div>
        <div className="card">
          <div className="description_card-icon">
            <FaArrowUp />
            <small>max temp</small>
          </div>
          <h2>78 °F</h2>
          {/* {props.days[0].tempmax} */}
        </div>
        <div className="card">
          <div className="description_card-icon">
            <FaWind />
            <small>wind speed</small>
          </div>
          <h2>2mph</h2>
          {/* {props.currentConditions.windspeed} */}
        </div>
        <div className="card">
          <div className="description_card-icon">
            <WiHumidity />
            <small>humidity</small>
          </div>
          <h2>41%</h2>
          {/* {props.currentConditions.humidity} */}
        </div>
      </div>
    </div>
    )
}
            {/* code to output data but not working for now  */}
            {/* after data is able to be outputted, plug props data into the styling  */}
            {/*  <p className='city'>{props.item.city}</p>
                <p className='temperature'>{props.item.temperature}°</p>
                <p className='weather-description'>{props.item.weatherDescription}</p>
                <p className='max-temp'>{props.item.maxTemp}°</p>
                <p className='min-temp'>{props.item.minTemp}°</p>
            </div>
            <div className='weather-details'>
                <p className='hourly-card'>{props.item.description}</p>
                <p className='daily-card'>{props.item.days}</p>
                <p className='air-quality'></p>
                <p className='precipitation'></p>*/}
export default WeatherItem;

