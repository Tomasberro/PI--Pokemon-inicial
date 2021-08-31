'use strict';
const axios = require('axios');
const { Pokemon, Tipo } = require('../db')

module.exports = {
    reset: function () {
        // No es necesario modificar esta función (Ya está completa)
        arrayUrl = [];
    },

    getApi: async () => {
        const primerget = await axios.get('https://pokeapi.co/api/v2/pokemon')
        const dataget = primerget.data.results
        //  console.log(dataget);
        const segundoget = await axios.get(primerget.data.next)
        const dataget2 = segundoget.data.results
        //  console.log(dataget2);
        const datafinal = dataget.concat(dataget2);
        let arrayUrl = []
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
                image: elem.data.sprites.back_default //subreq2.sprites.back_default
                //  async () => {
                //     const urlimage= subreq2.sprites.back_default;
                //     const imagetraida= await axios.get(urlimage)
                //     return imagetraida;
                // },
            }
            // console.log(obj)
            return obj;
        })
        return objFinal
    },

    getBdinfo: async () => {
        return await Pokemon.findAll({
            include: {
                model: Tipo,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
        })
    },
    // getAllinfo: async () => {
    //     const ApiInfo= await getApi();
    //     const BdInfo = await getBdinfo();
    //     const infoTotal = ApiInfo.concat(BdInfo);
    //     return infoTotal;
    // }
};

// getApi2: async () => {
//     for (let i=0; i<arrayUrl.length ; i++){
//         const subreq = await axios.get(arrayUrl[i])
//         const subreq2= await subreq.data
//         console.log(subreq2)
//         const datatotal= subreq2.map(elem => {
//         const obj= {
//             name: elem.name,
//             types: elem.types.map( el => el.type.name),
//             image: async () => {
//                 const urlimage= elem.sprites.back_default,
//                 const imagetraida= await axios.get(urlimage)
//                 return imagetraida;
//             }
//         }
//         return obj;
//     })
//     }
// }




// const info= getApi()
// console.log(info)