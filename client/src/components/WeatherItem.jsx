

import { useState } from 'react' 
import { Link } from 'react-router-dom'
import { FaArrowDown } from "react-icons/fa";
import './weather.css'
const WeatherItem = (props) => {
  return (
    <div className='section section_descriptions'>
         <div className='head'>
                <p className='city'>{props.item.city}</p>
                <p className='temperature'>{props.item.temperature}°</p>
                <p className='weather-description'>{props.item.weatherDescription}</p>
                <p className='max-temp'>{props.item.maxTemp}°</p>
                <p className='min-temp'>{props.item.minTemp}°</p>
            </div>
            <div className='weather-details'>
                <p className='hourly-card'>{props.item.description}</p>
                <p className='daily-card'>{props.item.days}</p>
                <p className='air-quality'></p>
                <p className='precipitation'></p>
            </div>
        <div className='card'>
            <div className='description_card-icon'>
               <FaArrowDown />
                <small>air quality</small>
            </div>
            <h2>25 °F</h2>
        </div>
      <div className='card'>
            <div className='description_card-icon'>
               <FaArrowDown />
                <small>min</small>
            </div>
            <h2>{props.item.minTemp}</h2>
        </div>
      <div className='card'>
            <div className='description_card-icon'>
               <FaArrowDown />
                <small>max</small>
            </div>
            <h2>25 °F</h2>
        </div>
      <div className='card'>
            <div className='description_card-icon'>
               <FaArrowDown />
                <small>humidity</small>
            </div>
            <h2>25 °F</h2>
        </div>
      {/* code to output data but not working for now  */}
      {/* after data is able to be outputted, plug props data into the styling  */}
           
    



    </div>
  )
}


export default WeatherItem;

