/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
const PersonsForm = ({ addPerson, handleNameChange, handleNumberChange }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input onChange={handleNameChange} /> <br />
        number: <input onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonsForm;
