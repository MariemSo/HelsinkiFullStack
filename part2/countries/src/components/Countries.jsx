// eslint-disable-next-line react/prop-types
/* eslint-disable react/prop-types */
import OneCountry from "./OneCountry";
import SomeCountries from "./someCountries";
const Countries = ({
  filteredCountries,
  selectedCountry,
  handleShowCountry,
}) => {
  if (selectedCountry) {
    return <OneCountry filteredCountries={[selectedCountry]} />;
  }

  if (filteredCountries.length > 10) {
    return (
      <>
        <p>Too many matches , specify another filter</p>
      </>
    );
  } else if (filteredCountries.length === 1) {
    return <OneCountry filteredCountries={filteredCountries} />;
  }
  return (
    <SomeCountries
      filteredCountries={filteredCountries}
      handleShowCountry={handleShowCountry}
    />
  );
};

export default Countries;
