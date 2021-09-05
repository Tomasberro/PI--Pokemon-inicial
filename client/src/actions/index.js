import axios from 'axios';
import { GET_POKEMONS, POKEMONS_CREATED, ORDER_BY_NAME, ORDER_BY_POWER, GET_POKEMONS_NAME } from './actionsTypes';

export function getPokemons (){
    return async function (dispatch){
    let response = await axios.get('http://localhost:3001/pokemons');
    return dispatch ({
        type:  GET_POKEMONS,  
        payload: response.data
    })
}
}

export function pokemonsCreated (payload){
    return {
        type: POKEMONS_CREATED,
        payload
    }
}

export function orderByName (payload){
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByPower (payload){
    return {
        type: ORDER_BY_POWER,
        payload
    }
}
export function getPokemonsName (payload){
    return async function (dispatch){
    let response = await axios.get('http://localhost:3001/pokemons?name=' + payload);
    return dispatch ({
        type:  GET_POKEMONS_NAME,  
        payload: response.data
    })
}
}