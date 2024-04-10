import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import personService from "./services/persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService
      .getAllPersons()
      .then(initialPersons => {
        setPersons(initialPersons);
      });
  }, [persons]);
  

  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNewNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const add = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.some((person) => person.name === personObject.name)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
      return;
    }

    personService
      .addPerson(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      })

  };

  const deletePerson = (id) => {
    console.log(`This is the id ${id}`)
    const url = "http://localhost:3001/persons"
    const personToDelete = `${url}/${id}`
    axios
      .delete(personToDelete)
      .then(response => {
        const person = response.data
        confirm(`Delete ${person.name} ?`)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilter} />

      <h2>Add a new contact</h2>
      <PersonForm
        onSubmit={add}
        valueName={newName}
        valueNumber={newNumber}
        onChangeName={handleNewNameChange}
        onChangeNumber={handleNewNumberChange}
      />
      <h2>Numbers</h2>
      <Persons 
        filter={filter} 
        persons={persons}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
