// eslint-disable-next-line react/jsx-no-undef

import "./App.css";
import Form from "./components/Form";
import countryService from "./services/countries";
import Countries from "./components/Countries";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilterCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countryService.getAll().then((countries) => {
      setCountries(countries);
    });
  }, []);

  // console.log(countries[0].name.common);

  const fetchCountries = (e) => {
    const filterC = countries.filter((person) =>
      person.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterCountries(filterC);
    setSelectedCountry(null);
  };

  const handleShowCountry = (country) => {
    setSelectedCountry(country);
  };
  return (
    <>
      <Form fetchCountries={fetchCountries} />
      <Countries
        filteredCountries={filteredCountries}
        selectedCountry={selectedCountry}
        handleShowCountry={handleShowCountry}
      />
    </>
  );
}

export default App;
