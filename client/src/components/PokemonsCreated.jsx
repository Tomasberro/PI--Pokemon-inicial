import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getTypes, postPokemons } from '../actions';
import styles from './PokemonsCreated.module.css';

var cache=[]

export default function PokemonsCreated() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const types = useSelector((state) => state.types)

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
    else if (!input.attack) {
      errors.attack = 'Fuerza es requerida';
    }
    else if (!input.defense) {
      errors.defense = 'Defensa es requerida';
    }
    else if (!input.hp) {
      errors.hp = 'Vida es requerida';
    }
    else if (!input.height) {
      errors.height = 'Altura es requerida';
    }
    else if (!input.weight) {
      errors.weight = 'Peso es requerido';
    }
    return errors;
  };
  useEffect(() => {
    dispatch(getTypes())
  }, []);
  function onInputChange(e) {
    var objErrors = validate({
      ...input,
      [e.target.name]: e.target.value
    })
    // console.log(objErrors)
    setErrors(objErrors);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      disabled: errors.name ? true : false
    })

  }


  function handleCheck(e) {
  
 if (e.target.checked && cache.length<2) {
  cache.push(e.target.checked)
  console.log(cache)  
      setInput({
        ...input,
        types: [...input.types, e.target.value]
      })
}else{e.target.checked = false
e.target.value = null}

  }
  

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).length > 0) {
      alert("Faltan datos a completar")
    } else {
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
        disabled: true
      })
      history.push('/home')
      window.location.replace('')
    }
  }

  return (
    <div className={styles.contenedor}>

      <h1>Crear Pokemon</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label >Image: </label>
          <input
            className={styles.inputs}
            name="image"
            type="text"//ver image type
            onChange={onInputChange}
            value={input.image} />
          {errors.image && (
            <p className="danger">{errors.image}</p>
          )}
        </div>
        <div>

          <label >Nombre: </label>
          <input
            className={styles.inputs}
            name="name"
            type="text"
            onChange={onInputChange}
            value={input.name} />

          {errors.name && (
            <p className="danger">{errors.name}</p>
          )}
        </div>
        {/* {/*name deberia ser to lower case!! Toni me ordena mal por numero ascii*/}

        <div>
          <label >Vida: </label>
          <input
            className={styles.inputs1}
            name="hp"
            type="number"
            min="0"
            max="150"
            onChange={onInputChange}
            value={input.hp} />
        </div>
        <div>
          <label >Fuerza: </label>
          <input
            className={styles.inputs1}
            name="attack"
            type="number"
            min="0"
            max="150"
            onChange={onInputChange}
            value={input.attack} />
        </div>
        <div>
          <label >Defensa: </label>
          <input
            className={styles.inputs1}
            name="defense"
            type="number"
            min="0"
            max="150"
            onChange={onInputChange}
            value={input.defense} />
        </div>
        <div>
          <label >Velocidad: </label>
          <input
            className={styles.inputs1}
            name="speed"
            type="number"
            min="0"
            max="150"
            onChange={onInputChange}
            value={input.speed} />
        </div>
        <div>
          <label >Altura: </label>
          <input
            className={styles.inputs1}
            name="height"
            type="number"
            min="0"
            max="35"
            onChange={onInputChange}
            value={input.height} />
        </div>
        <div>
          <label >Peso: </label>
          <input
            className={styles.inputs1}
            name="weight"
            type="number"
            min="0"
            max="999"
            onChange={onInputChange}
            value={input.weight} />
        </div>
        <div > <label >Tipos: </label>
          {types ? types.map(el => {
            return (<label id='aca'><input type="checkbox" name={el.name} value={el.name} onChange={handleCheck} />
              {el.name}</label>)
          }) : "Error en types"}
        </div>
        <button type='submit' disabled={input.disabled} className={styles.botoncrear} >
          Crear Pokemon</button>
      </form >
      <Link to="/home" ><button className={styles.buttonvolver}>Volver</button></Link>
    </div >

  )

}