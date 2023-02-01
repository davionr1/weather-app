import React from "react";
import WeatherItem from "./WeatherItem";

function weatherGallery(props) {
    const display = props.data.map((item, index)=> {
        return <WeatherItem item={item} key={index}/>
    })
    return(
        
        //only a test for styling
        <div className='head'>
        <p className='city'>los angeles</p>
        <p className='temperature'>77°</p>
        <p className='weather-description'>cloudy</p>
        <p className='max-temp'>88°</p>
        <p className='min-temp'>78°</p>
        
    </div>
    
    )
};

<<<<<<< HEAD
export default weatherGallery;
=======
export default weatherGallery;
>>>>>>> f5dbd90 (set gallery and item components to output in app.js)
