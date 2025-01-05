import axios from "axios"
const baseUrl= 'https://studies.cs.helsinki.fi/restcountries/api/all'
const oneCountryUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name'
const getAll = () => {
    const request = axios.get(baseUrl)
    console.log(request)
    return request.then(response => response.data)
  }

const getOne = (name) =>{
  const request = axios.get(`${oneCountryUrl}/${name}`)
  console.log(request)
  return request.then(response=>response.data)
}

export default {getAll, getOne}