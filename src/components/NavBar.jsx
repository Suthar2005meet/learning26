import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        <Link class="nav-link" to="/netflixhome">
        Home 
        </Link>
        </li>
        <li class="nav-item active">
        <Link class="nav-link" to="/netflixmovies">
        Movies
        </Link>
        </li>
        <li class="nav-item active">
        <Link class="nav-link" to="/netflixsports">
        Sports
        </Link>
        </li>
        <li class="nav-item active">
        <Link class="nav-link" to="/netflixshows">
        Shows
        </Link>
        </li>
        <li class="nav-item active">
        <Link class="nav-link" to="/netflixspark">
        Spark
        </Link>
        </li>
        <li class="nav-item active">
        <Link class="nav-link" to="/netflixtv">
        TV
        </Link>
        </li>
        </ul>
    
    </div>
    </nav>
    </div>
)}
