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

    const personExist = persons.some(person => person.name === personObject.name)
    //const filteredId = filteredPerson.map(person => person.id)[0]

    //console.log(filteredPerson)

    if (personExist) {
      confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      const url = "http://localhost:3001/persons"
      const filteredPerson = persons.find(person => person.name === personObject.name)
      const filteredId = filteredPerson.id
      const updatePerson = { ...filteredPerson, number: newNumber} 
      console.log(updatePerson)
      // const filteredId = filteredPerson.map(person => person.id)[0]
      // const person = persons.find(person => person.id === filteredId)
      // const changeNumber = { ...person, number: newNumber}
      //console.log(changeNumber)
      axios
        .put(`${url}/${filteredId}`, updatePerson)
        .then(response => {
          setPersons(persons.map(person => person.id !== filteredId ? person : response.data))
        })
      // personService
      //   .updatePerson(filteredId, personObject)
      //   .then(response => {
      //     console.log(response)
      //     //setPersons(persons.map(person => person.name !== filteredPerson.name ? person : response.data))
      //   })
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
