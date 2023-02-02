import React from "react";
import WeatherItem from "./WeatherItem";

function weatherGallery(props) {
    const display = props.data.map((item, index) => {
        return <WeatherItem item={item} key={index} />
    })

    console.log('city', props.data)
    return (
         <div className="section section_temperature">
              <div className="icon">
                <h3>Los Angeles, CA</h3>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/414/414927.png"
                  alt="Weather icon"
                />
                <h3>Cloudy</h3>
              </div>
              <div className="temperature">
                <h1>77 °F</h1>
              </div>
            </div>
         

         //only a test for styling
        /* <p className='city'>los angeles</p>
         <p className='temperature'>77°</p>
         <p className='weather-description'>cloudy</p>
         <p className='max-temp'>88°</p>
         <p className='min-temp'></p> */

    )
};

export default weatherGallery;

