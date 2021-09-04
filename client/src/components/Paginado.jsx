import React from 'react';
import './Paginado.module.css';

export default function Paginado({ pokemonsPage, paginado, allPokemons }) {
    let numbers = [];
    for (let i = 0; i <= Math.ceil(allPokemons / pokemonsPage); i++) {
        numbers.push(i)

    }
    return (
        <nav >
            <ul> {numbers?.map(number => {
                <a onClick={() => paginado(number)}>{number}</a>

            })
            }
            </ul>
        </nav>

    )
}

