import React from 'react';
import {useState } from 'react';
import {  useDispatch } from 'react-redux';
import { getPokemonsName} from '../actions';
// import styles from './SearchBar.module.css';

export default function SearchBar({width}) {
const [name, setName] = useState('');
const dispatch = useDispatch();

function handleInputChange(e){
    e.preventDefault()
   setName(e.target.value)
 
 }

function  handleSubmit(e) {
    e.preventDefault()
    dispatch(getPokemonsName(name))    
    // dispatch(cleanAction())
  }
function cleanState(e){
  e.preventDefault()
  window.location.replace('')
}
return (
    <div>
        <form class={width > 768? "form-inline my-2 my-lg-0" : "form-inline my-1 my-sm-0"}>
        <input   
       class={width> 768 ? "form-control my-2 my-sm-0": "form-control my-1 my-sm-0 p-1"} type="search" placeholder="Buscar" aria-label="Search"
        onChange= {handleInputChange} 
        />
    <button type='submit' onClick={(e) => handleSubmit(e)}
    class={width>768?"btn btn-primary": "btn btn-primary btn-sm"} >Buscar</button>
    {/* <button type='submit' onClick={(e) => cleanState(e)}
    class="btn btn-primary" >Limpiar</button> */}
     </form> 
    </div>
     
)



}