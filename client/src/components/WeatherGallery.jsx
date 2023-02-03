import React from "react";
import WeatherItem from "./WeatherItem";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import './weather.css'

function weatherGallery(props) {
    const display = props.data.map((item, index) => {
        return <WeatherItem item={item} key={index} />
    })

    console.log('city', props.data)
};

export default weatherGallery;

