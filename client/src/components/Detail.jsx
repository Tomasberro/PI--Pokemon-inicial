import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addFavorites, cleanDetail, getPokemonsId } from '../actions';
import { NavLink } from 'react-router-dom';
import styles from './Detail.module.css';
import loading from '../assets/Loading.jpeg';
import swal from 'sweetalert';

export default function Detail(props) {
    const { id } = props.match.params
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemonsId(id))
        return () => dispatch(cleanDetail(id))
    }, [dispatch, id]);
    const pokemonDetail = useSelector((state) => state.detail);
    const favoritos = useSelector((state) => state.favorites);
   
    function agregarFavoritos(e) {
        e.preventDefault()
        console.log(favoritos)
        let exist = favoritos.find(el => el.id == pokemonDetail[0].id)
        if(!exist){
        dispatch(addFavorites({
            image: pokemonDetail[0].image,
            name: pokemonDetail[0].name,
            id: `${pokemonDetail[0].id}`,
            types: pokemonDetail[0].types.map(el => {
                return (el.name ?
                    <div>{el.name}</div>
                    : <div>{el}</div>
                )
            })
        }))
        swal("Eso es!", "Agregado a tu lista de Favoritos!");
    }else{
        swal("No!", "Ya esta en tu lista de Favoritos!");
    }
}
    return (
        <div className={styles.detalle}>
            {pokemonDetail.length ?
             <div className={styles.detalleli}>
                <img className={styles.imgdetail} src={pokemonDetail[0].image} 
                alt="not found" width="200px" height="250px" />
                <h1 className={styles.nombre}> {pokemonDetail[0].name.toUpperCase()} </h1>

                <h2 className={styles.tipos}> Tipo: {pokemonDetail[0].types.map(el => {
                    return (el.name ?
                        <div>{el.name}</div>
                        : <div>{el}</div>
                    )
                })}</h2>
                <h3>Numero: {`"${pokemonDetail[0].id}"`}</h3>
                <p>Vida: {pokemonDetail[0].hp}</p>
                <p>Fuerza: {pokemonDetail[0].attack}</p>
                <p>Defensa: {pokemonDetail[0].defense}</p>
                <p>Velocidad: {pokemonDetail[0].speed}</p>
                <h4>Altura: {pokemonDetail[0].height}</h4>
                <h5>Peso: {pokemonDetail[0].weight}</h5>
            
            <NavLink to="/home">
            <button className={styles.buttonvolver}>Volver</button>
        </NavLink>
         <button onClick={agregarFavoritos} className={styles.buttonvolver2}
        >agregar a favoritos</button>
        </div>
            : <div><img src={loading} alt='Not found' width='300px' height='300px' />
            <p className={styles.loading}>Loading...</p></div>}
            

        </div>
    )
}


