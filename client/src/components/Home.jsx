import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons, getTypes, orderByName, orderByPower, pokemonsCreated, pokemonsTypesFilter } from '../actions';
import { Link } from 'react-router-dom';
import CardPoke from './CardPoke';
import Paginado from './Paginado';
import styles from './Home.module.css';
import NavBar from './NavBar';

export default function Home() {

    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemons);
    const [pagUno, setpagUno] = useState(1);
    const [cardsxPage] = useState(12);
    const [ orden, setOrden] = useState('');
    const [ fuerza, setFuerza] = useState('');
    const types = useSelector((state) => state.types)

    const lastPokemoninit = pagUno === 1 ? (pagUno * cardsxPage) - 3 : (pagUno * cardsxPage) - 3;//9 - 21
    const firstPokemoninit = pagUno === 1 ? (lastPokemoninit - cardsxPage) + 3 : lastPokemoninit - cardsxPage;//0-9

    const currPokemon = allPokemons.slice(firstPokemoninit, lastPokemoninit);

    const paginado = (pagNumber) => {
        setpagUno(pagNumber)
    }

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch]);

    function handleFilterCreated(e) {
        e.preventDefault()
        dispatch(pokemonsCreated(e.target.value))
    }
    function handleSort(e) {
        e.preventDefault()
        console.log(e.target.value)
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
            <NavBar/>
            {/* <button onClick={e => { handleSubmit(e) }} className={styles.buttoncargar}
            >Cargar Pokemons</button> */}
            <div>
                <div className={styles.filters}>
                    <div className={styles.filters}>
                    <select name='select' onChange={el => handleSort(el)}  
                    class="btn-group info">
                   
                        <option value='default' class="btn btn-danger dropdown-toggle" >Ordenar por nombre</option>
                        <option value='ascendente' class="dropdown-item">Ascendente</option>
                        <option value='descendente' class="dropdown-item">Descendente</option>
                    </select>
                    <select name='select' onChange={el => handlePower(el)} className='btn-group info'>
                        <option value='default' class="btn btn-danger dropdown-toggle">Ordenar por Fuerza</option>
                        <option value='mas' class="dropdown-item">Fuerza -</option>
                        {/* se cambian los + fuertes al final del aray */}
                        <option value='menos' class="dropdown-item">Fuerza +</option>
                    </select>
                    </div>
                    <div>
                    <select onChange={el => handleFilterCreated(el)} className='btn-group info' >
                        <option value='default' class="btn btn-danger dropdown-toggle">Creado por</option>
                        <option value='api' class="dropdown-item">Existente API</option>
                        <option value='database' class="dropdown-item">Usuario</option>
                    </select>
                    <select onChange={e => handleFilterTypes(e)} className='btn-group info'
                    >
                        <option value='All' class="dropdown-menu">Todos los tipos</option>
                        {types && types.map((type) => {

                            return <option key={type.id} value={type.name}
                            class="dropdown-item">{type.name}</option>
                        })}
                    </select>
                    </div>
                </div>
                <Paginado cardsxPage={cardsxPage} allPokemons={allPokemons.length}
                    paginado={paginado} />
                <div className={styles.cardscontainer}>{
                    currPokemon?.map(e => {
                        return (
                            <div  >
                                <Link to={`/home/${e.id}`} className={styles.link}>
                                    <CardPoke key={e.id} image={e.image} name={e.name}
                                    specialattack={e.specialattack}
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