
import React from "react";
import { useState } from "react";

function SearchWeather(props) {


    return (
        <div className='overlay'>
            <div className='container'>
                <div className="section section_inputs">
                    <form onSubmit={(e) => props.handleData(e)}>

                        <input type="text" placeholder="Search Locations" onChange={
                            (e) => props.handleSearch(e.target.value)
                        } />

                        <input type="submit" />

                    </form>

                </div>
            </div>
        </div>

    )
};

export default SearchWeather;