/* eslint-disable react/prop-types */

const OneCountry = ({ filteredCountries }) => {
  let country = filteredCountries[0];
  const languages = country.languages ? Object.values(country.languages) : [];

  console.log(languages);
  console.log(country);
  return (
    <>
      <h1>{country.name.common}</h1>
      <br />
      <p>Capital : {country.capital}</p>
      <p>Area : {country.area}</p>
      <br />
      <h3>languages</h3>
      <ul>
        {languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.svg} alt={country.flags.alt} width={200} />
    </>
  );
};

export default OneCountry;
