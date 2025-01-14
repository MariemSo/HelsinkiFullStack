import "./App.css";
import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import PersonsForm from "./components/PersonsForm";
import Filter from "./components/Filter";
import personService from "./services/person";
import Notification from "./components/Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterPerson, setFilterPerson] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [message, setMessage] = useState({ text: "", isError: false });

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    let newId = persons.length + 1;
    const newPerson = {
      id: newId.toString(),
      name: newName,
      number: newNumber,
    };
    const isPerson = persons.filter((person) => person.name === newPerson.name);
    if (isPerson.length > 0) {
      if (
        confirm(
          `${newPerson.name} is already added to phonebook,replace the old number with a new none ?`
        ) === true
      ) {
        console.log(isPerson[0].number);
        updatePerson(isPerson[0].id, newNumber);
        const successMessage = {
          text: `The number of ${isPerson[0].name} Has been updated!`,
          isError: false,
        };
        setMessage(successMessage);
      }
      return;
    }
    personService.create(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      const successMessage = {
        text: `${newPerson.name}  Has been added !`,
        isError: false,
      };
      setMessage(successMessage);
      setNewName("");
      setNewNumber("");
    });
  };

  const updatePerson = (id, newNumber) => {
    const person = persons.find((p) => p.id === id);
    const updatedNumber = { ...person, number: newNumber };

    personService.updatePerson(id, updatedNumber).then((returnedPerson) => {
      setPersons(persons.map((p) => (p.id === id ? returnedPerson : p)));
    });
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

      <Notification text={message.text} isError={message.isError} />

      <Filter filteredPerson={filteredPerson} />

      <h3>Add a new</h3>

      <PersonsForm
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons
        message={message}
        setMessage={setMessage}
        setPersons={setPersons}
        showAll={showAll}
        persons={persons}
        filterPerson={filterPerson}
      />
    </>
  );
}

export default App;
