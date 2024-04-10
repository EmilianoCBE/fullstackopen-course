import axios from "axios";

const baseUrl = "http://localhost:3001/persons"

const getAllPersons = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addPerson = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const updatePerson = (id, newObject)  => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAllPersons, addPerson, updatePerson }

// axios.post("http://localhost:3001/persons", personObject).then((response) => {
//   setPersons(persons.concat(response.data));
//   setNewName("");
//   setNewNumber("");
// });
