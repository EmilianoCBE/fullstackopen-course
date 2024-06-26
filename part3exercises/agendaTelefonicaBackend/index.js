const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())
const logPostData = (req, res, next) => {
  if (req.method === 'POST') {
    console.log('Request body:', req.body);
  }
  next();
};
app.use(morgan('tiny'))
app.use(logPostData)

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  const personsLength = persons.length
  const time = new Date().getTime()
  const dateRequest = new Date(time)

  response.send(`<p>Phonebook has info for ${personsLength} people</p><p>${dateRequest}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const newId = Math.floor(Math.random() * 100)
  return newId
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  const requestNameLower = body.name.toLowerCase()

  const personsNames = persons.map(person => person.name.toLowerCase())

  const uniqueName = personsNames.includes(requestNameLower)

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'info missing' 
    })
  } else if (uniqueName){
    return response.status(400).json({ 
      error: 'name must be unique' 
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  }

  persons = persons.concat(person)

  response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})