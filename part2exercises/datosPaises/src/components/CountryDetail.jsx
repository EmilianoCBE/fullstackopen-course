export const CountryDetail = ({detail}) => {
  const languages = Object.values(detail.languages)
  const flagSrc = detail.flags.png.toString()
  const flagAlt = detail.flags.alt.toString()

  return (
    <>
      <h2>{detail.name.common}</h2>
      <p>{detail.capital[0]}</p>
      <p>{detail.area}</p>
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
