import { useState } from "react";
import Persons from "./components/Persons";
import PersonsForm from "./components/PersonsForm";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterPerson, setFilterPerson] = useState([]);
  const [showAll, setShowAll] = useState(true);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    const isPerson = persons.filter((person) => person.name === newPerson.name);
    if (isPerson.length > 0) {
      return alert(`${newPerson.name} is already added to phonebook`);
    }

    setPersons(persons.concat(newPerson));
  };

  const filteredPerson = (e) => {
    const filterP = persons.filter((person) =>
      person.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterPerson(filterP);
    if (filterPerson.length < persons.length) {
      setShowAll(false);
    }
    return filterP;
  };

  return (
    <>
      <h2>Phonebook</h2>

      <Filter filteredPerson={filteredPerson} />

      <h3>Add a new</h3>

      <PersonsForm
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons
        showAll={showAll}
        persons={persons}
        filterPerson={filterPerson}
      />
    </>
  );
}

export default App;
