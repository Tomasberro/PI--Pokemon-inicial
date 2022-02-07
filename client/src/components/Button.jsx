import React from "react";
import { getPokemons } from '../actions';
import { useDispatch } from 'react-redux';
import styles from './Button.css'
export default function Button(){
    const dispatch = useDispatch();
    function handleSubmit(e) {
      e.preventDefault()
      dispatch(getPokemons())
      window.location.replace('')
  }

    return(
        <button onClick={e => { handleSubmit(e) }}  className="btn btn-primary"
          styles={styles}  >Cargar Pokemons</button>
    )
}