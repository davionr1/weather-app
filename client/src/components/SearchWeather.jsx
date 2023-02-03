import { useState } from "react";
// import WeatherItem from "./WeatherItem";
import axios from "axios";

function SearchWeather() {

    // let [locationsData, setLocationsData] = useState([])

    async function getLocationData() {
        const response = await axios.get('http://localhost:4000/locations');
        const data = await response.body;
        console.log(data);
    }

    getLocationData();

    return (
        <div>
            <input type="text" placeholder="Search Locations" />
            {/* <WeatherItem /> */}
        </div>
    )
};

export default SearchWeather;