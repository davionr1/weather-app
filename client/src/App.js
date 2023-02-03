import './App.css';
import React from 'react';
import SearchWeather from './components/SearchWeather';
import WeatherGallery from './components/WeatherGallery'
// import axios from 'axios'
// import { Fragment, useEffect, useState, useRef } from 'react'

function App() {

  // let [search, setSearch] = useState('')
  // let [data, setData] = useState([])
  // let [locations, setLocations]= useState([])

  // const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

  // const WEATHER_HEAD = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  // const WEATHER_MIDDLE = "?unitGroup=us&key=";

  // useEffect(() => {
  //   if (search) {
  //     const fetchData = async () => {
  //       const response = await fetch(
  //         WEATHER_HEAD + search + WEATHER_MIDDLE + API_KEY
  //       );
  //       const resData = await response.json();
  //       if (resData) {
  //         console.log(resData);
  //         setData([resData]);
  //         console.log('data', data)
  //       } else {
  //         console.log("ERROR");
  //       }
  //     };
  //     fetchData();
  //   }
  // }, [search])



  // const handleLocations = (term) => {
  //   console.log(term)
  //   setSearch(term)
  // }

  // const handleData = (data) => {
  //   setData(data)
  // }
  return (
    <div className="App">
      <h1> Weather App </h1>
      <SearchWeather />
      {/* // handleSearch={handleLocations} /> */}

      {/* <WeatherGallery/> */}
      {/* data={data} /> */}

      
    </div>
  );
}

export default App;