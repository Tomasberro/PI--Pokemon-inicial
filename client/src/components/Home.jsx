import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons, getTypes, orderByName, orderByPower, pokemonsCreated, pokemonsTypesFilter } from '../actions';
import { Link } from 'react-router-dom';
import CardPoke from './CardPoke';
import Paginado from './Paginado';
import SearchBar from './SearchBar';
import styles from './Home.module.css';
import readme from '../assets/readme.png';

export default function Home() {

    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemons);
    const [pagUno, setpagUno] = useState(1);
    const [cardsxPage, setcardsxPage] = useState(12);
    const [orden, setOrden] = useState('');
    const [fuerza, setFuerza] = useState('');
    const types = useSelector((state) => state.types)

    const lastPokemoninit = pagUno === 1 ? (pagUno * cardsxPage) - 3 : (pagUno * cardsxPage) - 3;//9 - 21
    const firstPokemoninit = pagUno === 1 ? (lastPokemoninit - cardsxPage) + 3 : lastPokemoninit - cardsxPage;//0-9

    const currPokemon = allPokemons.slice(firstPokemoninit, lastPokemoninit);

    const paginado = (pagNumber) => {
        setpagUno(pagNumber)
    }

    useEffect(() => {
        dispatch(getTypes())
    }, []);

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getPokemons())
    }
    function handleFilterCreated(e) {
        e.preventDefault()
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
    function handleFilterTypes(e) {
        e.preventDefault()
        dispatch(pokemonsTypesFilter(e.target.value))
    }

    return (
        <div>
            <div> <Link to='/pokemonscreated' className={styles.buttoncrear}>
                Crear tu propio personaje</Link>
                <Link to="/favorites" className={styles.favoritos}>
                    Favoritos</Link></div>
            <h1> Home</h1>
            <div className={styles.readme}><img src={readme} alt="Loading" width="100px" height="100px" /></div>
            <button onClick={e => { handleSubmit(e) }} className={styles.buttoncargar}
            >Cargar todos los Pokemons</button>
            <div>
                <div >
                    <select name='select' onChange={el => handleSort(el)} className={styles.buttonordenado} >
                        <option value='default' >Ordenar por nombre</option>
                        <option value='ascendente'>Ascendente</option>
                        <option value='descendente'>Descendente</option>
                    </select>
                    <select name='select' onChange={el => handlePower(el)} className={styles.buttonordenado}>
                        <option value='default'>Ordenar por Fuerza</option>
                        <option value='mas'>Fuerza -</option>
                        {/* se cambian los + fuertes al final del aray */}
                        <option value='menos'>Fuerza +</option>
                    </select>

                    <select onChange={el => handleFilterCreated(el)} className={styles.buttonordenado} >
                        <option value='default'>Creado por</option>
                        <option value='api'>Existente API</option>
                        <option value='database'>Usuario</option>
                    </select>
                    <select onChange={e => handleFilterTypes(e)} className={styles.buttonordenado}>
                        <option value='All'>Todos los tipos</option>
                        {types && types.map((type) => {

                            return <option key={type.id} value={type.name}>{type.name}</option>
                        })}
                    </select>
                </div>
                <SearchBar />
                <Paginado cardsxPage={cardsxPage} allPokemons={allPokemons.length}
                    paginado={paginado} />
                <div className={styles.cardscontainer}>{
                    currPokemon?.map(e => {
                        return (
                            <div  >
                                <Link to={`/home/${e.id}`} className={styles.link}>
                                    <CardPoke key={e.id} image={e.image} name={e.name}
                                        types={e.types.map(el => {
                                            return (el.name ?
                                                <div>{el.name}</div>
                                                : <div>{el}</div>
                                            )
                                        })} />
                                </Link>
                            </div>
                        )
                    })
                }</div>

            </div>
        </div>
    )
}