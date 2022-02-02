import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import readme from '../assets/readme.png';
import styles from './NavBar.css';

export function NavBar(){
return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    
      <img src={readme} alt="Loading" width="50px" height="50px"
      className={styles.readme} />
  
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="badge badge-primary"  href="/pokemonscreated"> Crear tu propio personaje
           <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="badge badge-primary" href="/favorites"> Favoritos</a>
        </li>
      </ul>
      <SearchBar/>
      {/* <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div>
  </nav>
)

}
export default NavBar;