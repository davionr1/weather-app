import React from "react";
import { useState } from "react";

function SearchWeather(props) {
    let [search, setSearch] = useState('')

    return (
        <div>
            <label>Search Locations!</label>
            <form onSubmit={(e) => props.handleSearch(e, search)}>

                <input type="text" placeholder="Search Locations" onChange={
                    (e) => setSearch(e.target.value)
                } />

                <input type="submit" />

            </form>
        </div>
    )
};

export default SearchWeather;