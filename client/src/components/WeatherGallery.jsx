import React from "react";
import WeatherItem from "./WeatherItem";

function weatherGallery(props) {
    const display = props.data.map((item, index) => {
        return <WeatherItem item={item} key={index} />
    })

    console.log('city', props.data)
};

export default weatherGallery;

