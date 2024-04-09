import axios from "axios";

const baseUrl = "http://localhost:3001/persons"

const getAllPersons = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addPersons = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const updatePersons = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { getAllPersons, addPersons, updatePersons }

// axios.post("http://localhost:3001/persons", personObject).then((response) => {
//   setPersons(persons.concat(response.data));
//   setNewName("");
//   setNewNumber("");
// });
