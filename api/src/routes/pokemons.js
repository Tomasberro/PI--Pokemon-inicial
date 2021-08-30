const { Router } = require('express');
// const {getApi} = require('./utils')
const router = Router();

router.get('/', (req, res) => {
    res.send('get')
  })

  router.get('/:idPokemon', (req, res) => {
    res.send('soy el get de pokemons')
  })

  router.post('/', (req, res) => {
    res.send('soy el post de pokemons')
  })

  const axios = require('axios')

const getApi = async () => {
    const primerget = await axios.get('https://pokeapi.co/api/v2/pokemon') 
    const dataget = await primerget.data.results
     console.log(dataget);
   let datafinal =  dataget.map(elem =>{
      return elem.url
     } )
     console.log(datafinal)
    return datafinal;
}
const info= getApi()
console.log(info)

module.exports = router;
// const getApi =  () => {
//   const primerget =axios.get('https://pokeapi.co/api/v2/pokemon')
//   .then(response => {
//     console.log(response.data); // response.data ya es un JSON
//   }, error => {
//     console.log(error);
//   });
// }