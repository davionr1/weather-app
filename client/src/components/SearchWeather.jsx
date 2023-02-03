
import React from "react";
import { useState } from "react";

function SearchWeather(props) {

const handleSubmit=(event)=>{
    event.preventDefault();
    
}
    return (
        <div className='overlay'>
            <div className='container'>
                <div className="section section_inputs">
                    <form onSubmit={handleSubmit} >

                        <input type="text" placeholder="Search Locations" onChange={
                            (e) => props.handleSearch(e.target.value)
                        } />

                        {/* <input type="submit"  /> */}

                    </form>

                </div>
            </div>
        </div>

    )
};

export default SearchWeather;