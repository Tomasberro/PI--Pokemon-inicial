import React, { useLayoutEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import readme from "../assets/readme.png";
import styles from "./NavBar.css";
import { useDispatch } from "react-redux";
import { getPokemons } from "../actions";
import Button from "./Button";

export function NavBar() {
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getPokemons());
    // window.location.replace('')
  }
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  const [width, height] = useWindowSize();
  
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <img
          src={readme}
          alt="Loading"
          width="50px"
          height="50px"
          className={styles.readme}
        />

        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a
              class="badge badge-primary  "
              font-size="1rem"
              href="/pokemonscreated"
            >
              {" "}
              Crear tu propio personaje
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <NavLink class="badge badge-primary " to="/favorites">
              Favoritos
            </NavLink>
            {/* <a class="badge badge-primary " href="/favorites"> Favoritos</a> */}
          </li>
        </ul>
      </div>
      { width < 992 ?
      <li class={`nav-item dropdown d-flex `} >
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Opciones
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink class="dropdown-item" to="/pokemonscreated">
            Crear tu propio personaje
          </NavLink>

          <NavLink class="dropdown-item" to="/favorites">
            Favoritos
          </NavLink>
          </div>  
      </li>
      : null
        }
      {/* <button onClick={e => { handleSubmit(e) }}  align-self="flex-end" color="info"
    background-color="skyblue" font-size="larger" border=" brown 1px solid"
            >Cargar Pokemons</button> */}
      <Button  width={width}/>
      <SearchBar width={width}/>
      {/* <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </nav>
  );
}
export default NavBar;
