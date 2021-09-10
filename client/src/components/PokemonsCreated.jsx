import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getTypes, postPokemons } from '../actions';




export default function PokemonsCreated() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors]= useState({});
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
        weight: "",
        // errors: {
        //   name: '',
        //   image: '',

        // // },
       disabled: true
    })
    function validate(input) {
      let errors = {};
      if (!input.name) {
        errors.name = 'Nombre es requerido';
      } else if (/[A-Z]/.test(input.name) || /[^A-Za-z0-9_]/.test(input.name) || /[0-9]/.test(input.name)) {
        errors.name = 'Nombre invalido, solo minusculas';
      }
     else if (!input.image) {
        errors.image = 'Imagen es requerida';
      }
      return errors;
    };
    useEffect(() => {
        dispatch(getTypes())
    }, []);
function onInputChange(e){
  var objErrors = validate({
    ...input,
    [e.target.name]: e.target.value
  })
  // console.log(objErrors)
  setErrors(objErrors);
  setInput({
    ...input,
    [e.target.name]: e.target.value,
    disabled: errors.name? true: false
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
        weight: "",
        disabled:true
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
        {errors.image && (
      <p className="danger">{errors.image}</p>
    )}
        </div>
        <div>
      
            <label >Nombre: </label>
      <input 
      name="name" 
      type="text"
    onChange={onInputChange}
      value={input.name}/>
        {errors.name && (
      <p className="danger">{errors.name}</p>
    )}
            </div>
        {/* {/*name deberia ser to lower case!! Toni me ordena mal por numero asinc*/}
  
  <div>
            <label >Vida: </label>
      <input 
      name="hp" 
      type="number"
      min="0"
      max="150"
    onChange={onInputChange}
      value={input.hp}/>
            </div>
            <div>
            <label >Fuerza: </label>
      <input 
      name="attack" 
      type="number"
      min="0"
      max="150"
    onChange={onInputChange}
      value={input.attack}/>
            </div>
            <div>
            <label >Defensa: </label>
      <input 
      name="defense" 
      type="number"
      min="0"
      max="150"
    onChange={onInputChange}
      value={input.defense}/>
            </div>
            <div>
            <label >Velocidad: </label>
      <input 
      name="speed" 
      type="number"
      min="0"
      max="150"
    onChange={onInputChange}
      value={input.speed}/>
            </div>
            <div>
            <label >Altura: </label>
      <input 
      name="height" 
      type="number"
      min="0"
      max="35"
    onChange={onInputChange}
      value={input.height}/>
            </div>
            <div>
            <label >Peso: </label>
      <input 
      name="weight" 
      type="number"
      min="0"
      max="999"
    onChange={onInputChange}
      value={input.weight}/>
  </div>
  <div> <label >Tipos: </label>
{ types.map(el => {
  return ( <label><input type="checkbox" name={el.name} value={el.name} onChange={handleCheck}/>
  {el.name}</label>)
})}
  </div>
        <button  type='submit' disabled={input.disabled} >Crear Pokemon</button>
    </form >
    <Link to = "/home" ><button>Volver</button></Link>
</div >
  
)

}