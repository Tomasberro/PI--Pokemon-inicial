const { default: axios } = require('axios');
const { Router } = require('express');
const {Tipo} = require('../db');

const router = Router();

router.get('/', async (req, res) => {
    const infoApityp = await axios.get('https://pokeapi.co/api/v2/type');
    const infoType = infoApityp.data.results.map(elem => elem.name);
    // console.log(infoType)
    const createType = infoType.forEach(elem => {
      Tipo.findOrCreate({
        where: {name : elem}
      })
      });
    const typeFinal = await Tipo.findAll();
    // console.log(typeFinal)
    res.send(typeFinal);
  })




module.exports = router;