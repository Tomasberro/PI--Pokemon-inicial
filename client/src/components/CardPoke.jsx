import React from 'react';
import styles from './CardPoke.module.css'

export default function CardPoke({ name, image, types, specialattack }) {
    return (
        <div className={styles.cards}>
            
            <div className={styles.container}> <div>
            <img src={image} alt="imagen no encontrada" width="150px" height="200px" /></div>
            <div class='card-title'><h3> {name}</h3> </div> 
            {/* <ul class="list-group list-group-flush"> */}
            <p class="card-text">{types}</p>
            <p class="card-text">ataque: {specialattack}</p>
            {/* </ul> */}
            {/* <div className={styles.types}><h5>  {types}</h5> </div> 
            <div className={styles.types}><h5>  {specialattack}</h5> </div>  */}

                </div>
        </div>
    )
}