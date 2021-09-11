import { GET_POKEMONS, POKEMONS_CREATED, ORDER_BY_NAME, ORDER_BY_POWER, GET_POKEMONS_NAME, GET_POKEMONS_ID, POST_POKEMONS, GET_TYPES, POKEMONS_TYPES_FILTER } from "../actions/actionsTypes";

var initialState = {
    pokemons: [],
    filtrados: [],
    detail: [],
    types: []
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                filtrados: action.payload
            }
            case POKEMONS_CREATED:
                let pokemonsAll = state.filtrados;
               
                let pokesfiltrcreat= action.payload === 'database'? pokemonsAll.filter(el => el.owndb ): pokemonsAll.filter(el => !el.owndb);
                return {
                    ...state,
                    pokemons: pokesfiltrcreat
                } 
            case ORDER_BY_NAME:
                let ordAlfabetico = action.payload === 'ascendente'? state.filtrados.sort(function (a, b) {
                    if (a.name > b.name) {
                      return 1;
                    }
                    if (a.name < b.name) {
                      return -1;
                    }
                    return 0;
                }):
                state.filtrados.sort(function (a, b) {
                    if (a.name > b.name) {
                      return -1;
                    }
                    if (a.name < b.name) {
                      return 1;
                    }
                    return 0;
                })
                return {
                    ...state,
                    pokemons: ordAlfabetico
                } 
                case ORDER_BY_POWER:
                    let ordFuerza = action.payload === 'mas'? state.filtrados.sort(function (a, b) {
                        if (a.attack > b.attack) {
                          return 1;
                        }
                        if (a.attack < b.attack) {
                          return -1;
                        }
                        return 0;
                    }):
                    state.filtrados.sort(function (a, b) {
                        if (a.attack > b.attack) {
                          return -1;
                        }
                        if (a.attack < b.attack) {
                          return 1;
                        }
                        return 0;
                    })
                    return {
                        ...state,
                        pokemons: ordFuerza
                    }
                    case GET_POKEMONS_NAME:
                        return {
                            ...state,
                            pokemons: action.payload,
                        }
                    case GET_POKEMONS_ID:
              
                          return {
                              ...state,
                              detail: action.payload,
                          }
                          case POST_POKEMONS:
                              return {
                                  ...state
                              }
                              case GET_TYPES:
                                  return{
                                    ...state,
                                    types: action.payload
                                  }
                            case POKEMONS_TYPES_FILTER:
                           let pokemonsAllTypes = state.filtrados;
               
                                let pokesFiltrTypes= action.payload === 'All'? pokemonsAllTypes: pokemonsAllTypes.filter(el =>  

                         el.owndb? el.types.map(el => el.name).includes(action.payload)
                                        : 
                                        el.types.includes(action.payload))
                                    
                                return {
                                    ...state,
                                    pokemons: pokesFiltrTypes
                                }    

        default: return state
    }
    }

export default rootReducer;