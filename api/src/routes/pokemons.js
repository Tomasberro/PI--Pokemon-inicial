'use strict';
const { Router } = require('express');
const { Pokemon, Type } = require('../db')
const { getApi, getBdinfo } = require('./utils')
const router = Router();// poner express.Router()


const pksTotal = async () => {
  const ApiInfo = await getApi();
  const BdInfo = await getBdinfo();
  const infoTotal = [...ApiInfo, ...BdInfo]

  return infoTotal;
}

router.get('/', async (req, res, next) => {
  const name1 = req.query.name;
  try {
    const pokemonsRuta = await pksTotal();

    if (name1) {
      let pksName = pokemonsRuta.filter(el =>  el.name.toLowerCase().includes(name1.toLowerCase())
      
  );

      let resto = pksName.map(elem => {
        return {
          name: elem.name,
          image: elem.image,
          types: elem.types.map(el => el)
        }
      })
      resto.length ? res.status(200).send(resto) : res.status(404).send('Pokemon no encontrado');
    } else {
      res.status(200).send(pokemonsRuta);
    }
  } catch (error) { next(error) }
})

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const pokemonsRuta = await pksTotal();
    // let pokemonId= await Pokemon.findByPk(id);db
    if (id) {
      let pokemonId = pokemonsRuta.filter(elem => elem['id'] == id) //parsear
      pokemonId.length ? res.status(200).json(pokemonId) : res.status(404).send('Pokemon no encontrado');
    }
  }
  catch (error) { next(error) }
})

router.post('/', async (req, res, next) => {
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
    pokemonCreated.addType(tipoDb);

    res.send('soy el post de pokemons')
  }
  catch (error) { next(error) }
})

router.put("/:id", async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
try{
   const PokeUpdate= await Pokemon.update({name: name},{
     where: {
       id: id
     }
   });
  res.status(200).send("Pokemon update succesfull")
} catch (error) { next(error) }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try{ const PokeDelete= await Pokemon.findOne({
      where: {
        id: id
      }
    });
    await PokeDelete.destroy();
    res.status(200).send("Pokemon deleted succesfull")
  } catch (error) { next(error) }
});

module.exports = router;
