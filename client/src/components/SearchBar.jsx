import React from 'react';
import {useState } from 'react';
import {  useDispatch } from 'react-redux';
import { getPokemonsName} from '../actions';
// import styles from './SearchBar.module.css';

export default function SearchBar() {
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
        <form class="form-inline my-2 my-lg-0">
        <input   
       class="form-control my-2 my-sm-0" type="search" placeholder="Buscar" aria-label="Search"
        onChange= {handleInputChange} 
        />
    <button type='submit' onClick={(e) => handleSubmit(e)}
    class="btn btn-primary" >Buscar</button>
    {/* <button type='submit' onClick={(e) => cleanState(e)}
    class="btn btn-primary" >Limpiar</button> */}
     </form> 
    </div>
     
)



}