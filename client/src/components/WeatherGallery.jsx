import React, { useState } from "react";
import WeatherItem from "./WeatherItem";
import './weatherGallery.css'

function WeatherGallery(props) {
    function createWeatherItem() {
        const weatherItem = props.handleSetLocation;
        console.log("Weather Item", weatherItem)
        if (Array.isArray(weatherItem)) {
            return (
                <div id="grid-line">
                    <div class="cell spancol">
                        {weatherItem[0].resolvedAddress}
                        <div className="flex-container">
                            <div className="box">
                                <div class="title">
                                    {weatherItem[0].currentConditions.datetime}
                                </div>
                                <div className="sub-text">
                                    {weatherItem[0].currentConditions.conditions}
                                </div>
                            </div>

                            <div className="box">
                                <div className="title">
                                    {weatherItem[0].currentConditions.temp}°
                                </div>
                                <div className="sub-text">
                                    <div class="cell">Cell</div>
                                    <div class="cell">Cell</div>
                                    <div class="cell">Cell</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell">Cell</div>
                    <div class="cell">Cell</div>
                    <div class="cell">Cell</div>
                    <div class="cell spancol">

                    </div>
                </div>
            )
        }

    }
    // createWeatherItem();
    return (
        //only a test for styling
        <div className='head'>
            {createWeatherItem()}

        </div>

    )
};

export default WeatherGallery;

