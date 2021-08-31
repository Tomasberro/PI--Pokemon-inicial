'use strict';
const { Router } = require('express');
const { Pokemon, Tipo } = require('../db')
const {getApi, getBdinfo, getAllinfo} = require('./utils')
const router = Router();// poner express.Router()


const pksTotal = async () => {
  const ApiInfo= await getApi();
  const BdInfo = await getBdinfo();
  const infoTotal = ApiInfo.concat(BdInfo);
  return infoTotal;
}

router.get('/', async (req, res) => {
  const name1 = req.query.name;
  const pokemonsRuta = await pksTotal();
  
  // console.log(pokemonsRuta);
  if(name1){
    let pksName =  pokemonsRuta.filter(el => el.name.toLowerCase().includes(name1.toLowerCase()));
    // console.log(name)
    // console.log(pksName)
    pksName.length? res.status(200).send(pksName): res.status(404).send('Pokemon no encontrado');
  }else{
    res.status(200).send(pokemonsRuta);
  }
  })

  router.get('/:idPokemon', (req, res) => {
    const {id} = req.params;
    const pokemonsRuta = await pksTotal();
    if(id){
      
    }
    res.send('soy el get de pokemons')
  })

  router.post('/', async (req, res) => {
    let {
      name,
      id,
      image,
      tipo,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      owndb
    } = req.body;
    const pokemonCreated = await Pokemon.create({
      name,
      id,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      owndb
    });
    let tipoDb = Tipo.findAll({
      where : {name: tipo}
    })
    pokemonCreated.addTipo(tipoDb);
    res.send('soy el post de pokemons')
  })

//   console.log(arrayUrl)
//   const getApi2= async () => {
//       for (let i=0; i<arrayUrl.length ; i++){
//           const subreq = await axios.get(arrayUrl[i])
//           const subreq2= await subreq.data
//           console.log(subreq2)
//           const datatotal= subreq2.map(elem => {
//           const obj= {
//               name: elem.name,
//               types: elem.types.map( el => el.type.name),
//               image: async () => {
//                   const urlimage= elem.sprites.back_default;
//                   const imagetraida= await axios.get(urlimage)
//                   return imagetraida;
//               }
//           }
//           return obj;
//       })
//       return datatotal;
//       }
  
//   }

// const info= getApi()
// console.log(info)
// const info2 = getBdinfo()
// console.log(info2)
module.exports = router;
