import personService from "../services/person";

/* eslint-disable react/prop-types */

const Persons = ({ setPersons, showAll, persons, filterPerson }) => {
  const deletedPerson = (id, name) => {
    if (confirm(`delete ${name} ?`) === true) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons((prevPersons) =>
            prevPersons.filter((person) => person.id !== id)
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("deletion Canceled");
    }
  };

  const renderPersons = (personList) => {
    return personList.map((person) => (
      <p key={person.id}>
        {person.name} - {person.number}
        <button
          onClick={() => {
            deletedPerson(person.id, person.name);
          }}
        >
          Delete
        </button>
      </p>
    ));
  };

  return (
    <div>{showAll ? renderPersons(persons) : renderPersons(filterPerson)}</div>
  );
};

export default Persons;
