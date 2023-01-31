import React from "react";
import { useState } from "react";

function SearchWeather(props) {
    let [search, setSearch] = useState('')

    return (
        <div className='overlay'>
            <div className='container'>
                <div className="section section_inputs">
                    <form onSubmit={(e) => props.handleSearch(e, search)}>

                <input type="text" placeholder="Search Locations" onChange={
                    (e) => setSearch(e.target.value)
                } />

                <input type="submit" />

            </form>

                </div>
                

            </div>
            
            
        </div>
    )
};

export default SearchWeather;