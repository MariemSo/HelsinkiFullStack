/* eslint-disable react/prop-types */
const Filter = ({ filteredPerson }) => {
  return (
    <div>
      filter shown with <input onChange={filteredPerson} />
    </div>
  );
};

export default Filter;
