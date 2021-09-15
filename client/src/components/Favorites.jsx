import React from 'react';
import { removeFavorites } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Favorites.module.css'
import { NavLink } from 'react-router-dom';

export default function Favorites() {
    const favoritos = useSelector(state => state.favorites)
    const dispatch = useDispatch();
    function handleRemove(e) {
        dispatch(removeFavorites(e))
    }

    return (

        <div className={styles.contenedor}>
            <h1 className={styles.huno}>Favoritos </h1>
            {favoritos.map(el => {
                return <div className={styles.container}>
                    <img src={el.image} alt="imagen no encontrada" width="200px" height="250px" />
                    <div className={styles.namefav}>{el.name} </div>
                    <div className={styles.typesfav}>{el.types}</div>
                    <button
                        onClick={() => {
                            handleRemove(el.id)
                        }}
                        className={styles.remover}
                    >Remover</button>
                </div>

            })}
            <NavLink to="/home">
                <button className={styles.buttonvolverfav}>Home</button>
            </NavLink>
        </div>
    )
}