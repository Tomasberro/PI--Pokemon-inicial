import React from 'react';
import styles from './CardPoke.module.css'

export default function CardPoke({ name, image, types, specialattack }) {
    return (
        <div className={styles.cards}>
            
            <div className={styles.container}> <div>
            <img src={image} alt="imagen no encontrada" width="200px" height="250px" /></div>
            <div className={styles.name}><h3> {name}</h3> </div> 
            <div className={styles.types}><h5>  {types}</h5> </div> 
            <div className={styles.types}><h5>  {specialattack}</h5> </div> 
                </div>
        </div>
    )
}