import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPokemonsId } from '../actions';
import { NavLink } from 'react-router-dom';


export default function Detail(props) {
    // console.log(props)
    const {id} = props.match.params
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemonsId(id))
    }, []);
    const pokemonDetail = useSelector((state) => state.detail);
    // console.log(pokemonDetail)
    return (
        <div>
            <h1>Pokemon Detail</h1>
            {pokemonDetail.length ? <div>
                <img src={pokemonDetail[0].image} alt="not found" />
                <h1>Nombre: {pokemonDetail[0].name} </h1>
               
                <h2>Tipos: {pokemonDetail[0].types.map(el => {
                    return (el.name ?
                        <div>{el.name}</div>
                        : <div>{el}</div>
                    )
                })}</h2>
                <h3>Numero de Pokemon: {`"${pokemonDetail[0].id}"`}</h3>
                <p>Vida: {pokemonDetail[0].hp}</p>
                <p>Fuerza: {pokemonDetail[0].attack}</p>
                <p>Defensa: {pokemonDetail[0].defense}</p>
                <p>Velocidad: {pokemonDetail[0].speed}</p>
                <h4>Altura: {pokemonDetail[0].height}</h4>
                <h5>Peso: {pokemonDetail[0].weight}</h5>
            </div> : <p>Loading...</p>}
            <NavLink to="/home">
                <button>Volver</button>
            </NavLink>
        </div>
    )
}