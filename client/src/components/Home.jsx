import React from 'react';
import {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons, orderByName, orderByPower, pokemonsCreated } from '../actions';
import { Link } from 'react-router-dom';
import CardPoke from './CardPoke';
import Paginado from './Paginado';
import SearchBar from './SearchBar';

export default function Home() {

    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemons);
    const [pagUno , setpagUno] = useState(1);
    const [cardsxPage, setcardsxPage] = useState(12);
    const [orden, setOrden] = useState('');
    const [fuerza, setFuerza] = useState('');
    // const [pageSig , setpageSig] = useState(2);
    // const [cardsxPaginit] = useState(9);
   
     const lastPokemoninit = pagUno===1? (pagUno * cardsxPage)-3: (pagUno*cardsxPage)-3 ;//9 - 21
     const firstPokemoninit = pagUno===1? (lastPokemoninit - cardsxPage)+3: lastPokemoninit-cardsxPage ;//0-9
    // const lastPokemon = (pageSig * cardsxPage)-3;//21
   
    // const firstPokemon = lastPokemon - cardsxPage;//9
  
    // const currPokemon = allPokemons.slice(firstPokemon,lastPokemon ) :
    const currPokemon =  allPokemons.slice(firstPokemoninit,lastPokemoninit);

    const paginado = (pagNumber) => {
        // if(pagNumber===1){
            setpagUno(pagNumber)
        // }else{
        // setpageSig(pagNumber)}
    }

    // console.log(allPokemons)
    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getPokemons())
    }
    function handleFilterCreated(e){
        dispatch(pokemonsCreated(e.target.value))
    }
    function handleSort(e) {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setpagUno(1)
        setOrden(`Ordenado${e.target.value}`)
    }
    function handlePower(e) {
        e.preventDefault()
        dispatch(orderByPower(e.target.value))
        setpagUno(1)
        setFuerza(`Ordenado${e.target.value}`)
    }


    return (
        <div>
            <Link to='/pokemonscreated'>Crear tu propio personaje</Link>
            <h1> Home de Pokemones</h1>
            <button onClick={e => { handleSubmit(e) }}>Cargar tus personajes</button>
            <div>
                <select name='select' onChange={el => handleSort(el)}>
                <option value='default'>Ordenado por</option>
                    <option value='ascendente'>Ascendente</option>
                    <option value='descendente'>Descendente</option>
                </select>
                <select name='select'  onChange={el => handlePower(el)}>
                <option value='default'>Ordenado por</option>
                    <option value='mas'>Fuerza +</option>
                    <option value='menos'>Fuerza -</option>
                </select>
                <select  onChange={el => handleFilterCreated(el)} >
                <option value='default'>Creado por</option>
                    <option value='api'>Existente API</option>
                    <option value='database'>Usuario</option>
                </select>
                {/* me faltaria los tipos con map */}
                <SearchBar/>
                <Paginado cardsxPage= {cardsxPage} allPokemons={allPokemons.length}
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