import './App.css';
import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import SearchWeather from './components/SearchWeather';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  let [search, setSearch]=useState('')
  let [message, setMessage] = useState('Search for Location')
  let [data, setData] = useState([])

  const API_KEY=process.env.REACT_APP_WEATHER_API_KEY
  // const api_key ='HSYWPZH9LXRTYUNAC5HYXZLX6'
  const WEATHER_URL = (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?unitGroup=us&key=${API_KEY}&contentType=json`)
  
  useEffect(()=>{
    if(search){
      const fetchData = async () => {
        document.title = `Weather App`
        const resposne = await fetch(WEATHER_URL)
        const resData = await response.json()
        if (resData.results.length > 0){
          return setData(resData.results)
        }else{
          return setMessage('Not Found')
        }
      }
      fetchData()
    }
  },[search])

  const handleSearch = (e, term) => {
		e.preventDefault()
		setSearch(term)
	}
  
    // fetch(WEATHER_URL)
    // .then(response => response.json())
    // .then(resData => console.log(resData))
   
   
  return (
    <div className="App">
      {message}
      <Router>
        <Routes>
          <Route path="/" element={
            <Fragment>
              <SearchWeather handleSearch = {handleSearch}/>
            </Fragment>
          }/>
        </Routes>
      </Router>

       <Descriptions/>
    </div>
  );
}

export default App;

