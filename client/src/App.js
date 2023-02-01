import './App.css';
import React from 'react';
import { Header } from './header';
import SearchWeather from './components/SearchWeather';
import WeatherGallery from './components/WeatherGallery'
import WeatherItem from './components/WeatherItem';
import { Fragment, useEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  let [search, setSearch] = useState('')
  let [data, setData] = useState([])

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
  
  const WEATHER_HEAD ="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
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
          console.log('data', data)
        } else {
          console.log("ERROR");
        }
      };
      fetchData();
    }
  }, [search])
   
  const handleSearch= (term)=>{
    
    setSearch(term)
  }

const handleData=(data)=>{
  setData(data)
}
  return (
    <div className="App">
      <SearchWeather search={search} handleSearch={handleSearch} handleData={handleData}/>

      <WeatherGallery data={data}  />

      {/* <WeatherItem /> */}
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