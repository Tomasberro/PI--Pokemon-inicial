import axios from 'axios';
import { GET_POKEMONS, POKEMONS_CREATED, ORDER_BY_NAME, ORDER_BY_POWER, GET_POKEMONS_NAME, GET_POKEMONS_ID, GET_TYPES, POST_POKEMONS, POKEMONS_TYPES_FILTER,  ADD_FAVORITES, REMOVE_FAVORITES, CLEAN_DETAIL } from './actionsTypes';

export function getPokemons (){
    return async function (dispatch){
    let response = await axios.get('/pokemons');
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
  try{  let response = await axios.get('/pokemons?name=' + payload);
    return dispatch ({
        type:  GET_POKEMONS_NAME,  
        payload: response.data
    })
}catch(err){alert('Pokemon no encontrado')}
}
}

export function getPokemonsId (payload){
    return async function (dispatch){
   try{ let response = await axios.get('/pokemons/' + payload);
//    console.log(response)
    return dispatch ({
        type:  GET_POKEMONS_ID,  
        payload: response.data
    })
}catch(error){console.log(error)}
}
}
export function cleanDetail (payload){
    return {
        type: CLEAN_DETAIL,
        payload
    }
}

export function getTypes (){
    return async function (dispatch){
  try{  let response = await axios.get('/types', {});
    return dispatch ({
        type:  GET_TYPES,  
        payload: response.data
    })
}catch(error){console.log(error)}
}
}
export function postPokemons (payload){
    return async function (dispatch){
    let response = await axios.post('/pokemons',payload);
    // return response
    dispatch ({
        type:  POST_POKEMONS,  
        payload: response.data
    })
}
}

export function pokemonsTypesFilter (payload){
    return {
        type: POKEMONS_TYPES_FILTER,
        payload
    }
}
export function addFavorites(payload){
    return {
        type: ADD_FAVORITES,
        payload
    }
}
export function removeFavorites(payload){
    return {
        type: REMOVE_FAVORITES,
        payload
    }
}