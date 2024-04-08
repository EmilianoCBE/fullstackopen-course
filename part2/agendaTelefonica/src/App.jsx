import { useState } from 'react'

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
      <div>
        filter shown with: 
        <input 
          value={filter}
          onChange={handleFilter}
        />
      </div>
      <h2>Add a new contact</h2>
      <form onSubmit={add}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNewNameChange}
          />
        </div>
        <div>number: 
          <input 
            value={newNumber}
            onChange={handleNewNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          filter !== '' ?
          persons.map(person => (
            person.name.toLowerCase().includes(filter) ? 
            <li key={person.name}>
              {person.name} {person.number}
            </li> : 
            ''
          )) :
          persons.map((person) => (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App