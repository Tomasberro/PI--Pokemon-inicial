import React from 'react';
import styles from './Paginado.module.css';

export default function Paginado({ cardsxPage, paginado, allPokemons }) {
    const numbers = [];
    // console.log(cardsxPage)
    for (let i = 0; i <= Math.ceil(allPokemons / cardsxPage); i++) {
        numbers.push(i+1)

    }
    // console.log(numbers)
    return (
        <nav className={styles.paginacion}>
            <ul className={styles.ul}> {numbers?.map(number => {
            // console.log(paginado(number))
             return(  <a class="active" onClick={() => paginado(number)}>{number}</a>
             )
            })
            }
            </ul>
        </nav>

    )
}

