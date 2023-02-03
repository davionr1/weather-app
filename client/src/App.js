import "./App.css";
import React from "react";
import { Header } from "./header";
import SearchWeather from "./components/SearchWeather";
import WeatherGallery from "./components/WeatherGallery";
import { Fragment, useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import WeatherItem from "./components/WeatherItem";

function App() {
  let [search, setSearch] = useState("");
  let [data, setData] = useState([]);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

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
          setData([resData]);
          console.log("data", data);
        } else {
          console.log("ERROR");
        }
      };
      fetchData();
    }
  }, [search]);

  const handleSearch = (term) => {
    setSearch(term);
  };

  const handleData = (data) => {
    setData(data);
  };
  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "url('https://rare-gallery.com/uploads/posts/124416-miui-8-rainy-weather-background-minimal-hd.png')",
      }}
    >
      <Header />
      <SearchWeather search={search} handleSearch={handleSearch} handleData={handleData} />
      <WeatherItem data={data} />
      {/* <Router>
          <Routes>
            <Route path='/' element={<WeatherItem data={data}/>} />
            <Route path='create' element={<AddList/>}/>
            <Route path='edit' element={<editList/>}/>
            <Route path='delete' element={<deleteList/>}/>
          </Routes>
        </Router> */}
    </div>

  );
  // return (
  //   <body>
  //       <section>
  //         <Header/>

  //         <form onSubmit ={(e)=> handleSearch(e,search)}>
  //           <input type="text" placeholder='Search Locations'onChange={e=>setSearch(e.target.value)}/>
  //           <input type="submit"/>
  //         </form>

  //           <WeatherGallery data={data}/>
  //           <WeatherItem/>

  //           {/* planning to use this later */}
  //             {/* <Router>
  //               <Routes>
  //                 <Route path='/' element={
  //                   <Fragment>

  //                   </Fragment>
  //                 }/>
  //               </Routes>
  //             </Router> */}
  //     </section>
  //   </body>
  // );
}

export default App;
