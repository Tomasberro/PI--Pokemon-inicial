import React from 'react';
import {useState } from 'react';
import {  useDispatch } from 'react-redux';
import { getPokemonsName} from '../actions';
import styles from './SearchBar.module.css';

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
      setName('')
    console.log(name)
    // dispatch(cleanAction())
  }

return (
    <div>
        <input   
        type= 'text'
        placeholder= 'Buscar...'
        onChange= {handleInputChange}
        className= {styles.buscador}
        />
    <button type='submit' onClick={(e) => handleSubmit(e)}
    className={styles.botonbuscar} >Buscar</button>
   
    </div>
     
)



}