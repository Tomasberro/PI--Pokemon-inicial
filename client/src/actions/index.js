import axios from 'axios';
import { GET_POKEMONS } from './actionsTypes';

export function getPokemons (){
    return async function (dispatch){
    let response = await axios.get('http://localhost:3001/pokemons');
    return dispatch ({
        type:  GET_POKEMONS,  
        payload: response.data
    })
}
}