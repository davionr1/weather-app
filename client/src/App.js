import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import SearchWeather from "./components/SearchWeather";
import ListWeather from "./components/WeatherGallery";
import WeatherItem from "./components/WeatherItem";
// import SearchWeather from './components/SearchWeather';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  let [search, setSearch] = useState("");
  let [data, setData] = useState([])
  
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  // const api_key ='HSYWPZH9LXRTYUNAC5HYXZLX6'
  const WEATHER_HEAD =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const WEATHER_MIDDLE = "?unitGroup=us&key=";

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        const response = await fetch(
          WEATHER_HEAD + search + WEATHER_MIDDLE + API_KEY
        );
        const resData = await response.json();
        if (resData) {
          console.log(resData);
        } else {
          console.log("ERROR");
        }
      };
      fetchData();
    }
  }, [search]);

  return (
    <div className="App">
      <SearchWeather />

      <ListWeather />

      <WeatherItem />
    </div>
  );
}

export default App;
