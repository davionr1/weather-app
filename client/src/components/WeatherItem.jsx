import { useState } from 'react' 
import { Link } from 'react-router-dom'
import { FaArrowDown } from "react-icons/fa";
import './weather.css'
const WeatherItem = () => {
  return (
    <div className='section section_descriptions'>
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
            <h2>25 °F</h2>
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
      
    </div>
  )
}


export default WeatherItem;