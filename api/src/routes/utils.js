'use strict';
const axios = require('axios');
const { Pokemon, Type } = require('../db');
// const Type = require('../models/Type');

module.exports = {
    
    getApi: async () => {
        const primerget = await axios.get('https://pokeapi.co/api/v2/pokemon')
        const dataget = primerget.data.results
        //  console.log(dataget);
        const segundoget = await axios.get(primerget.data.next)
        const dataget2 = segundoget.data.results
        //  console.log(dataget2);
        const datafinal = dataget.concat(dataget2);//[...] destructuring
        // let arrayUrl = []
        const subreq3 = datafinal.map(elem => {
            //   arrayUrl.push(elem.url)
            return axios.get(elem.url)
        }) // [urls..]
        //  for (let i=0; i<arrayUrl.length ; i++){
        //     const subreq = await axios.get(arrayUrl[i])
        //     const subreq2=  subreq.data
        // console.log(subreq2)
        const urlSub = await Promise.all(subreq3)
        const objFinal = urlSub.map(elem => {
            const obj = {
                id: elem.data.id, //subreq2.id,
                name: elem.data.name, //subreq2.name,
                types: elem.data.types.map(el => el.type.name), //subreq2.types.map( el => el.type.name),
                image: elem.data.sprites.back_default, //subreq2.sprites.back_default
                hp: elem.data.stats[0].base_stat,
                attack: elem.data.stats[1].base_stat,
                defense: elem.data.stats[2].base_stat,
                speed: elem.data.stats[5].base_stat,
                height: elem.data.height,
                weight:elem.data.weight
            }
            // console.log(obj)
            return obj;
        })
        return objFinal
    },

    getBdinfo: async () => {
        return await Pokemon.findAll({//traeme todos los pokemons
            include: {
                raw: true,
                model: Type,//incluime los tipos mediante el name
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
        })
    },
    
};







