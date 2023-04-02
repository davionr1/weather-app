import './App.css';
import React from 'react';
import SearchWeather from './components/SearchWeather';
import WeatherGallery from './components/WeatherGallery'

function App() {
  let [search, setSearch] = useState("");
  let [data, setData] = useState([]);


  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "url('https://rare-gallery.com/uploads/posts/124416-miui-8-rainy-weather-background-minimal-hd.png')",
      }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />

      <h1 className='title'>What's the Weather?</h1>
      <SearchWeather />
    </div>

  );
}

export default App;
