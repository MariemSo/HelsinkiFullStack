/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
const PersonsForm = ({
  newName,
  newNumber,
  addPerson,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} /> <br />
        number:{" "}
        <input type="number" value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonsForm;
