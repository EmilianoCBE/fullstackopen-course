import { useState } from 'react'
import Filter from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNewNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const add = (e) => {

    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if(persons.some(person => person.name === personObject.name)){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilter}/>
      
      <h2>Add a new contact</h2>
      <PersonForm 
        onSubmit={add}
        valueName={newName}
        valueNumber={newNumber}
        onChangeName={handleNewNameChange}
        onChangeNumber={handleNewNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons}/>
    </div>
  )
}

export default App