import React from 'react';
import {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../actions';
import { Link } from 'react-router-dom';
import CardPoke from './CardPoke';
import Paginado from './Paginado';
export default function Home() {

    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemons);
    const [currPage , setCurrPage] = useState(1);
    const [pokemonsPage, setpokemonsPage] = useState(12);
    const lastPokemon = currPage * pokemonsPage; //12
    const firstPokemon = lastPokemon - pokemonsPage;//al principio 3 y despues 12
    const currPokemon = allPokemons.slice(firstPokemon,lastPokemon );

    const paginado = (pagNumber) => {
        setCurrPage(pagNumber)
    }

    // console.log(allPokemons)
    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getPokemons())
    }

    return (
        <div>
            <Link to='/pokemonscreated'>Crear tu propio personaje</Link>
            <h1> Home de Pokemones</h1>
            <button onClick={e => { handleSubmit(e) }}>Cargar tus personajes</button>
            <div>
                <select name='select'>
                    <option value='ascendente'>Ascendente</option>
                    <option value='descendente'>Descendente</option>
                </select>
                <select name='select'>
                    <option value='mas'>Fuerza +</option>
                    <option value='menos'>Fuerza -</option>
                </select>
                <select name='select'>
                    <option value='api'>Existente API</option>
                    <option value='database'>Usuario</option>
                </select>
                {/* me faltaria los tipos con map */}
                <Paginado pokemonsPage= {pokemonsPage} allPokemons={allPokemons.length}
                paginado= {paginado} />
                {
                    currPokemon?.map(e => {
                        return (
                            <div >
                                <Link to={`/home/${e.id}`}>
                                    <CardPoke key={e.id} image={e.image} name={e.name}
                                        //    bug={console.log(e.types)} 
                                        types={e.types.map(el => {
                                            return (el.name ?
                                                 <div>{el.name}</div>
                                                :<div>{el}</div>
                                            )
                                        })} />
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}