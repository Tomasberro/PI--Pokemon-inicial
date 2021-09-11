import React from 'react';
import styles from './CardPoke.module.css'

export default function CardPoke({name, image, types}) {
    return (
        <div className= {styles.cards}>
           <div className={styles.container}> <img src={image} alt ="imagen no encontrada" width= "150px" height= "200px" />
            <h3>{name}</h3>
            <h5>{types}</h5></div>
        </div>
    )
}