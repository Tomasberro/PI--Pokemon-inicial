const axios = require('axios')
let arrayUrl = []
const getApi = async () => {
    const primerget = await axios.get('https://pokeapi.co/api/v2/pokemon') 
    const dataget = await primerget.data.results
     console.log(dataget);
   let datafinal =  dataget.map(elem =>{
      arrayUrl.push(elem.url)
     } )
    // [urls..]
}

const getApi2= async () => {
    for (let i=0; i<arrayUrl.length ; i++){
        const subreq = await axios.get(arrayUrl[i])
        const obj= {
            name: subreq.name,
            types: subreq.types.map( el => el.type.name),
            image: sprites.back_default,
        }
        return obj;
    }

}



const info= getApi()
console.log(info)