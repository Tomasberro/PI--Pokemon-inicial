const { default: axios } = require('axios');
const { Router } = require('express');
const {Type} = require('../db');

const router = Router();

router.get('/', async (req, res) => {
    try{const infoApityp = await axios.get('https://pokeapi.co/api/v2/type');
    const infoType = infoApityp.data.results.map(elem => elem.name);
    // console.log(infoType)
    const createType = infoType.forEach(elem => {
      Type.findOrCreate({
        where: {name : elem}
      })
      });
    const typeFinal = await Type.findAll();
    // console.log(typeFinal)
    res.send(typeFinal);}
    catch(error){console.log(error)}
  })




module.exports = router;