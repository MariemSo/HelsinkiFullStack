/* eslint-disable react/prop-types */

// import { useState } from "react";

const SomeCountries = ({ filteredCountries, handleShowCountry }) => {
  return (
    <>
      {filteredCountries.map((c) => (
        <p key={c.ccn3}>
          {c.name.common}{" "}
          <button onClick={() => handleShowCountry(c)}>Show</button>
        </p>
      ))}
    </>
  );
};

export default SomeCountries;
