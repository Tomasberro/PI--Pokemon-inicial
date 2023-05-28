import React from "react";
import { getPokemons } from '../actions';
import { useDispatch } from 'react-redux';
import styles from './Button.css'
export default function Button({width}){
    const dispatch = useDispatch();
    function handleSubmit(e) {
      e.preventDefault()
      dispatch(getPokemons())
      window.location.replace('')
  }
 console.log(width, "width")
    return(
        <button onClick={e => { handleSubmit(e) }}  className={width>768? `btn btn-primary`:
         `btn btn-primary btn-sm`}
          styles={styles}  >Cargar Pokemons</button>
    )
}