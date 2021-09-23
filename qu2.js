const url = 'https://restcountries.com/v3/all' // countries api
const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    const areac=countries.map((item)=>[item.name.common,item.area])
   const area1=areac.sort((a,b) => b[1]-a[1]);
   const result=area1.slice(0,10)
   console.log(result)
  } catch (err) {
    console.log(err)
  }
}
console.log(' async and await')
fetchData()
