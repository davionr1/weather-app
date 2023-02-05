import { useState } from "react";
import WeatherItem from "./WeatherItem";
import { useEffect } from "react";
import AsyncSelect from "react-select/async"

function SearchWeather() {

    const [locationsData, setLocationsData] = useState([]);
    const [selectedValue, setSelectedValue] = useState('undefined');

    useEffect(() => {
        getLocations();
    }, [])

    function getLocations() {
        fetch('http://localhost:4000/locations')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setLocationsData(data)
            });
    }

    const loadLocations = (searchValue, callback) => {
        setTimeout(() => {
            // console.log("Location Data: ",locationsData)
            const filteredLocations = locationsData.filter((option) => {
                // console.log("option: ",(option['city_ascii']));
                return option.city_ascii.toLowerCase().includes(searchValue.toLowerCase())
            }
            );
            console.log('loadLocations', searchValue, filteredLocations);
            callback(filteredLocations)
        }, 500)
    }

    const handleChange = (selectedOption) => {
        if (selectedOption === "undefined") {
            return null
        } else {
            setSelectedValue(selectedOption);
            console.log("handleChange", selectedOption);
        }
    };

    return (
        <div className='overlay'>
            <div className='container'>
                <div className="section section_inputs">
                    <AsyncSelect
                        // cacheOptions
                        // defaultOptions
                        value={selectedValue}
                        getOptionLabel={e => e.city_ascii + ', ' + e.admin_name + ', ' + e.iso3}
                        // getOptionValue={e =>e.id}
                        loadOptions={loadLocations}
                        // onInputChange={handleInputChange}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <WeatherItem handleLocation={selectedValue} />
        </div>

    )
};

export default SearchWeather;