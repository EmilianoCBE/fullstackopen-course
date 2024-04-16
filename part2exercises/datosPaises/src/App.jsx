import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const URL_API = 'https://studies.cs.helsinki.fi/restcountries'
  const [nameCountry, setNameCountry] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get(`${URL_API}/api/all`)
      .then(response => {
        const apiCountries = response.data.map(country => country.name.common)
        const filteredCountries = apiCountries.filter(filteredCountry => filteredCountry.includes(nameCountry))
        setCountries(filteredCountries)
      })
  }, [nameCountry])
  

  const handleChange = event => {
    setNameCountry(event.target.value)
  }
  console.log(countries.map(country => {
    <p>{country}</p>
  }))

  return (
    <>
      <h3>Find countries</h3>
      <input type="text" value={nameCountry} onChange={handleChange}/>
      {
        countries.map(country => {
          <p>{country}</p>
        })
      }
    </>
  )
}

export default App
