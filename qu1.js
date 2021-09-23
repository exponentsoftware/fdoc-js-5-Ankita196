
const url = 'https://restcountries.com/v3/all' // countries api
const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
   const lang=countries.map((item)=>item.languages)
   //return [ {kir: 'Kyrgyz', rus: 'Russian'}, {kir: 'Kyrgyz', rus: 'Russian'}]
  let lang1=Object.assign({}, ...lang);
  //return {kir: 'Kyrgyz', rus: 'Russian', spa: 'Spanish', ara: 'Arabic'}
  const objectArrays = Object.keys(lang1)
  console.log(objectArrays.length)
  
  
  
  } catch (err) {
    console.log(err)
  }
}
console.log(' async and await')
fetchData()
