'use strict';
const axios = require('axios');
const { Pokemon, Type } = require('../db');
// const Type = require('../models/Type');

module.exports = {

    getApi: async () => {
        const primerget = await axios.get('https://pokeapi.co/api/v2/pokemon')
        const dataget = primerget.data.results
        const segundoget = await axios.get(primerget.data.next)
        const dataget2 = segundoget.data.results
        const datafinal = dataget.concat(dataget2);//[...] destructuring
        // let arrayUrl = []
        const subreq3 = datafinal.map(elem => {
            return axios.get(elem.url)
        }) // [urls..]
        const urlSub = await Promise.all(subreq3)
        const objFinal = urlSub.map(elem => {
            const obj = {
                id: elem.data.id,
                name: elem.data.name,
                types: elem.data.types.map(el => el.type.name),
                image: elem.data.sprites.back_default,
                hp: elem.data.stats[0].base_stat,
                attack: elem.data.stats[1].base_stat,
                defense: elem.data.stats[2].base_stat,
                speed: elem.data.stats[5].base_stat,
                height: elem.data.height,
                weight: elem.data.weight
            }

            return obj;
        })
        return objFinal
    },

    getBdinfo: async () => {
        return await Pokemon.findAll({
            include: {
                // raw: true, formato json
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
        })
    },
};
//   update : (id, name, phone) => {
//         const contact = findById(id);
//         if (!contact) throw new Error("No existe un contacto con dicho id.");
//         contact.name = name;
//         contact.phone = phone;
//         return contact;
//       },
//     if (id) {
//         let pokemonId = pokemonsRuta.filter(elem => elem['id'] == id)
//       lo encuentro y le piso propiedades p update
  
// router.put("/:id", (req, res) => {
//     const { name} = req.body;
//     const { id } = req.params;

//   const pokemonsRuta = await pksTotal();
//   if (id) {
//     let pokemonId = pokemonsRuta.filter(elem => elem['id'] == id)
//     if (!name )
//       return res.status(400).json({ message: "Faltan inputs." });

//     try {
//     pokemonId.name= name
//       res.json(update(parseInt(id), name));
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   });
//   remove : (id) => {
//     const contact = findById(id);
//     if (!contact) throw new Error("No existe un contacto con dicho id.");
//     contacts = contacts.filter((contact) => contact.id !== id);
//     return contact;
//   },

//   router.delete("/:id", (req, res) => {
//     const { id } = req.params;
//     try {
//       res.json(remove(parseInt(id)));
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   });





