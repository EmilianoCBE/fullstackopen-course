import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import personService from "./services/persons";
import axios from "axios";
import { Notification } from "./components/Notification";
import { NotificationError } from "./components/NotificationError";

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2024</em>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState('some error happened...')

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

    if (personExist) {
      confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      const url = "http://localhost:3001/persons"
      const filteredPerson = persons.find(person => person.name === personObject.name)
      const filteredId = filteredPerson.id
      const updatePerson = { ...filteredPerson, number: newNumber} 
      axios
        .put(`${url}/${filteredId}`, updatePerson)
        .then(response => {
          setPersons(persons.map(person => person.id !== filteredId ? person : response.data))
          setSuccessMessage(
            `Updated '${response.name}'`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
      
      setNewName("");
      setNewNumber("");
      return;
    }

    personService
      .addPerson(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setSuccessMessage(
          `Added '${returnedPerson.name}'`
        )
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
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
      .catch(error => {
        // const person = response.data
        console.log(error)
        // setErrorMessage(
        //   `Person '${person.name}' was already removed from server`
        // )
        // setTimeout(() => {
        //   setErrorMessage(null)
        // }, 5000)
        // setPersons(persons.filter(person => person.id !== filteredId))
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage}/>
      {/* <NotificationError message={errorMessage} /> */}

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

      <Footer />

    </div>
  );
};

export default App;
