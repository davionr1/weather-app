import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup';
const weatherList = (props) => {
    return (
        <ListGroup>  
            <li class="list-group list-group-flush"></li>
            <li class="list-group-item">city1</li>
            <li class="list-group-item">city2</li>
            <li class="list-group-item">city3</li>
            <li class="list-group-item">city4</li>
        </ListGroup>
   )
}
export default weatherList
