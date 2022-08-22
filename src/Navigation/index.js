
import React from "react";
import { Link } from "react-router-dom";
import './style.css'
const Navigation = () => {
    return (
        <div class="nav">
            <div class="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/Favorites' >Favourites</Link>
            </div>
        </div>
    )
}


export default Navigation
