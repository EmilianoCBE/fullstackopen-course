import axios from "axios"
import { useState, useEffect } from 'react'
import { CountryDetail } from "./CountryDetail"

export const CountryList = ({country}) => {
  const URL_API = 'https://studies.cs.helsinki.fi/restcountries'
  const [countryDetail, setCountryDetail] = useState(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    axios
      .get(`${URL_API}/api/name/${country}`)
      .then(response => {
        const countryData = response.data
        setCountryDetail(countryData)
      })
  },[country])

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <>
      <p>
        {country}
      </p>
      <button onClick={handleShow}>
        {
          show ? 
            'Hide' 
            : 'Show'
        }
      </button>
      {
        show ?
          <CountryDetail detail={countryDetail}/>
          : null
      }
    </>
  )
}
