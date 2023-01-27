import './App.css';
import React from 'react';


const api_key=process.env.REACT_APP_WEATHER_API_KEY;
// const api_key ='HSYWPZH9LXRTYUNAC5HYXZLX6'
const weather_url = (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/losangeles?unitGroup=us&key=${api_key}&contentType=json`);

function App() {
  
  

  
//fetch data and output in console
  
    
    fetch(weather_url)
    .then(response => response.json())
    .then(resData => console.log(resData))
   
   
  return (
    <div className="App">
       
    </div>
  );
}

export default App;

