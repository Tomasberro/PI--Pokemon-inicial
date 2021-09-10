'use strict';
const { Router } = require('express');
const { Pokemon, Type } = require('../db')
const { getApi, getBdinfo } = require('./utils')
const router = Router();// poner express.Router()


const pksTotal = async () => {
  const ApiInfo = await getApi();
  const BdInfo = await getBdinfo();
  // console.log(BdInfo)
  // const dataValue = BdInfo[0].dataValues;
  // console.log(dataValue)
  const infoTotal = [...ApiInfo, ...BdInfo]
  // console.log(infoTotal)
  return infoTotal;
}

router.get('/', async (req, res) => {
  const name1 = req.query.name;
  try {
    const pokemonsRuta = await pksTotal();// probar bd comandos gabi

    // console.log(pokemonsRuta);
    if (name1) {
      // console.log('entre')
      let pksName =  pokemonsRuta.filter(el => {
        // console.log(el)
        // if(el.dataValues.owndb){
        //   el.dataValues.name.toLowerCase().includes(name1.toLowerCase())
        // }
       return el.name.toLowerCase() == name1.toLowerCase()});
      // console.log(name) filtrar propiedades de objeto
      // console.log(pksName)
      let resto = pksName.map(elem => {
        return {
          name: elem.name,
          image: elem.image,
          types: elem.types.map(el => el)
        }
      })
      // console.log(resto)
      resto.length ? res.status(200).send(resto) : res.status(404).send('Pokemon no encontrado');
    } else {
      res.status(200).send(pokemonsRuta);
    }
  } catch (error) { console.log(error) }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const pokemonsRuta = await pksTotal();

    // let pokemonId= await Pokemon.findByPk(id);
    // return res.json(pokemonId);}
    if (id) {
      let pokemonId = pokemonsRuta.filter(elem => elem['id'] == id) //parsear y probar json en send
      pokemonId.length ? res.status(200).json(pokemonId) : res.status(404).send('Pokemon no encontrado');
    }
  }
  catch (error) { console.log(error) }
})

router.post('/', async (req, res) => {
  let {
    name,
    id,
    image,
    types,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    owndb
  } = req.body;
  try {
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
    let tipoDb = await Type.findAll({
      where: { name: types }
    })
    // console.log(req.body.types)
    // console.log(tipoDb)
  
    pokemonCreated.addType(tipoDb);
   
    res.send('soy el post de pokemons')
  }
  catch (error) { console.log(error) }
})



// const info= getApi()
// console.log(info)
// const info2 = getBdinfo()
// console.log(info2)
module.exports = router;
