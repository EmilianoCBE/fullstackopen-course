import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNewNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const add = (e) => {

    e.preventDefault()
    const personObject = {
      name: newName,
      phone: newNumber
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
          persons.map((person) => (
            <li key={person.name}>
              {person.name} {person.phone}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App