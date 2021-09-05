import React from 'react';
import {useState } from 'react';
import {  useDispatch } from 'react-redux';
import { getPokemonsName } from '../actions';

export default function SearchBar() {
const [name, setName] = useState('');
const dispatch = useDispatch();

function handleInputChange(e){
    e.preventDefault()
  
    setName(e.target.value)
   console.log(name)
}
function handleSubmit(e) {
    e.preventDefault()
    dispatch(getPokemonsName(name))
    setName('')
  }
return (
    <div>
        <input   
        type= 'text'
        placeholder= 'Buscar...'
        onChange= {handleInputChange}
        />
    <button type='submit' onClick={handleSubmit}>Buscar</button>
        
    </div>
)



}