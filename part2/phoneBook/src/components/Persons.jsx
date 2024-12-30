/* eslint-disable react/prop-types */
const Persons = ({ showAll, persons, filterPerson }) => {
  return (
    <div>
      {showAll
        ? persons.map((person) => {
            return (
              <p key={person.id}>
                {person.name} - {person.number}
              </p>
            );
          })
        : filterPerson.map((person) => {
            return (
              <p key={person.id}>
                {person.name} - {person.number}
              </p>
            );
          })}
    </div>
  );
};

export default Persons;
