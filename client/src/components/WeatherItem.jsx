import './weather.css'
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import WeatherGallery from './WeatherGallery';


function WeatherItem(props) {

    let [locationWeather, setLocationWeather] = useState(false)

    console.log(props.handleLocation);

    function locationName() {
        if (props.handleLocation.city_ascii !== []) {
            const city =
                (props.handleLocation.city_ascii + ' ' + props.handleLocation.admin_name + ' ' + props.handleLocation.iso3);
            console.log("Location Name:", city);
            return city;
        }
    }
    let location = locationName()

    // const locationFunc = async () =>{
    //     const result = await axios(name)
    //     return result
    // }

    // let location = locationFunc()

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
    const WEATHER_HEAD = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    const WEATHER_MIDDLE = "?unitGroup=us&key=";

    useEffect(() => {
        if (location !== 'undefined') {
            const fetchData = async () => {
                const response = await fetch(
                    WEATHER_HEAD + location + WEATHER_MIDDLE + API_KEY
                );
                const resData = await response.json();
                if (resData) {
                    // console.log(resData)
                    setLocationWeather([resData]);
                    console.log('data', locationWeather)
                } else {
                    console.log("ERROR");
                }
            };
            fetchData();
        }else{
            console.log("No Location Name Selected")
        }
    }, [location])

    console.log('Location Weather: ',locationWeather)
    // console.log('Location weather length:', location.length)


    return (
        
         <WeatherGallery handleSetLocation={locationWeather}/>
         
    )
}


export default WeatherItem;

