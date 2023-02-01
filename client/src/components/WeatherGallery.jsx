import React from "react";
import WeatherItem from "./WeatherItem";

function weatherGallery(props) {
    const display = props.data.map((item,index)=>{
        return<WeatherItem item={item} key{index}/>
    return(
        //only a test for styling
        <div className='head'>
        <p className='city'>los angeles</p>
        <p className='temperature'>77°</p>
        <p className='weather-description'>cloudy</p>
        <p className='max-temp'>88°</p>
        <p className='min-temp'>78°</p>
        
    </div>
        <div className="section section_temperature">
              <div className="icon">
                <h3>Long Beach, CA</h3>
                <img
                  src="data:image/png;base64,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"
                  alt="Weather icon"
                />
                <h3>Cloudy</h3>
              </div>
              <div className="temperature">
                <h1>65 °F</h1>
              </div>
            </div>
    )
};

export default weatherGallery;
