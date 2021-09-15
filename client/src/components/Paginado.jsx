import React from 'react';
import styles from './Paginado.module.css';

export default function Paginado({ cardsxPage, paginado, allPokemons }) {
    const numbers = [];
    // console.log(cardsxPage)
    for (let i = 1; i <= Math.ceil(allPokemons / cardsxPage); i++) {
        numbers.push(i)

    }
    // console.log(numbers)
    return (
        <nav className={styles.paginacion}>
            <ul className={styles.ul}> {numbers?.map(number => {
            // console.log(paginado(number))
             return(  <p class="active" onClick={() => paginado(number)}>{number}</p>
             )
            })
            }
            </ul>
        </nav>

    )
}

