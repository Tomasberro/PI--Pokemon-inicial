import React from 'react';
import styles from './CardPoke.module.css'

export default function CardPoke({ name, image, types }) {
    return (
        <div className={styles.cards}>
            <div className={styles.container}> 
            <img src={image} alt="imagen no encontrada" width="200px" height="250px" />
                <h3 className={styles.name}>{name}</h3>
                <h5 className={styles.types}>{types}</h5>
                </div>
        </div>
    )
}