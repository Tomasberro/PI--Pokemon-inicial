import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getTypes, postPokemons } from '../actions';


export default function PokemonsCreated() {
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector((state) => state.types)
    // console.log(types)
    const [input, setInput] = useState({
        image: "",
        name: "",
        types: [],
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: ""
    })
    useEffect(() => {
        dispatch(getTypes())
    }, []);
function onInputChange(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
}
function handleCheck(e){
  if(e.target.checked){
    setInput({
      ...input,
      types: [...input.types , e.target.value]
    })
  }
}
function handleSubmit(e){
    e.preventDefault();
    dispatch(postPokemons(input))
    alert("Pokemon creado correctamente");
    setInput({
        image: "",
        name: "",
        types: [],
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: ""
    })
    history.push('/home')
}

    return (
    <div>
    
        <h1>Crear Pokemon</h1>
        <form onSubmit={e => handleSubmit(e)}>
      <div>
        <label >Image: </label>
  <input 
  name="image" 
  type="text"//ver image type
onChange={onInputChange}
  value={input.image}/>
        </div>
        <div>
      
            <label >Nombre: </label>
      <input 
      name="name" 
      type="text"
    onChange={onInputChange}
      value={input.name}/>
            </div>
        {/* {/*name deberia ser to lower case!! Toni me ordena mal por numero asinc*/}
  
  <div>
            <label >Vida: </label>
      <input 
      name="hp" 
      type="number"
      min="0"
      max="100"
    onChange={onInputChange}
      value={input.hp}/>
            </div>
            <div>
            <label >Fuerza: </label>
      <input 
      name="attack" 
      type="number"
    onChange={onInputChange}
      value={input.attack}/>
            </div>
            <div>
            <label >Defensa: </label>
      <input 
      name="defense" 
      type="number"
    onChange={onInputChange}
      value={input.defense}/>
            </div>
            <div>
            <label >Velocidad: </label>
      <input 
      name="speed" 
      type="number"
    onChange={onInputChange}
      value={input.speed}/>
            </div>
            <div>
            <label >Altura: </label>
      <input 
      name="height" 
      type="number"
    onChange={onInputChange}
      value={input.height}/>
            </div>
            <div>
            <label >Peso: </label>
      <input 
      name="weight" 
      type="number"
    onChange={onInputChange}
      value={input.weight}/>
  </div>
  <div> <label >Tipos: </label>
{ types.map(el => {
  return ( <label><input type="checkbox" name={el.name} value={el.name} onChange={handleCheck}/>
  {el.name}</label>)
})}
  </div>
        <button type='submit'>Crear Pokemon</button>
    </form >
    <Link to = "/home" ><button>Volver</button></Link>
</div >
  
)

}