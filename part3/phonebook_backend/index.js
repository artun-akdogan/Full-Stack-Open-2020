const express = require('express')
const app = express()
app.use(express.json())

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
]

const generateId = () => {
    const maxId = persons.length > 0 ? Math.max(...persons.map(person => person.id)) : 0
    return maxId + 1
}

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people<br><br>${Date()}`)
})

app.post('/api/persons', (req, res) => {
    const body = req.body
    if (!body.name) {
        return res.status(400).json({ error: 'name missing' })
    }
    if (!body.number) {
        return res.status(400).json({ error: 'number missing' })
    }
    if(persons.some(person => person.name === body.name)){
        return res.status(400).json({ error: 'name must be unique' })
    }
    const person = {
        name : body.name,
        number: body.number,
        id: generateId()
    }
    persons = persons.concat(person)
    res.json(person)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id == id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
})

const port = 3001
app.listen(port)
console.log("Server running on port", port)