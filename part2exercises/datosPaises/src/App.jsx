import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { CountryList } from './components/CountryList'
import { CountryDetail } from './components/CountryDetail'

function App() {
  const URL_API = 'https://studies.cs.helsinki.fi/restcountries'
  const [nameCountry, setNameCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [countryDetail, setCountryDetail] = useState({})

  useEffect(() => {
    if(nameCountry !== ''){
      axios
      .get(`${URL_API}/api/all`)
      .then(response => {
        const apiCountries = response.data.map(country => country.name.common)
        const filteredCountries = apiCountries.filter(filteredCountry => filteredCountry.includes(nameCountry))
        setCountries(filteredCountries)
      })
    }
  }, [nameCountry])
  

  const handleChange = event => {
    setNameCountry(event.target.value)
  }

  return (
    <>
      <h3>Find countries</h3>
      <input type="text" value={nameCountry} onChange={handleChange}/>
      {
        countries.length <= 10 ?
          countries.length == 1 ?
            <CountryDetail />
          : 
          countries.map(country => 
            <CountryList country={country} key={country}/>
          )
        : <p>Too many matches, specify another filter</p>
            
      }
    </>
  )
}

export default App
