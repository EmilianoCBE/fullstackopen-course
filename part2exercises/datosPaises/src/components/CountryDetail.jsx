import axios from "axios";
import { useEffect, useState } from "react";

export const CountryDetail = ({detail}) => {
  const apiKey = import.meta.env.VITE_WEATHER_KEY;
  const [weather, setWeather] = useState(null)

  const languages = Object.values(detail.languages)
  const flagSrc = detail.flags.png.toString()
  const flagAlt = detail.flags.alt.toString()

  const lat = detail.capitalInfo.latlng[0]
  const lon = detail.capitalInfo.latlng[1]

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`)
      .then(response =>
        console.log(response)  
      )
  },[])

  return (
    <>
      <h2>{detail.name.common}</h2>
      <p>{detail.capital[0]}</p>
      <p>Area {detail.area}</p>
      <h3>Languages:</h3>
      <ul>
        {
          languages.map(language => (
            <li key={language}>
              {languages}
            </li>
          ))
        }
      </ul>
      <img src={flagSrc} alt={flagAlt} />
    </>
  )
}
