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

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

export default { getAllPersons, addPerson, deletePerson }

// axios.post("http://localhost:3001/persons", personObject).then((response) => {
//   setPersons(persons.concat(response.data));
//   setNewName("");
//   setNewNumber("");
// });
