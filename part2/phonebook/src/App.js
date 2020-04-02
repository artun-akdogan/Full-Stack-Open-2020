import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterName, setFilterName] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some(val => val.name === newName)) {
            window.alert(`${newName} is already added to phonebook`)
            return
        }
        const newPerson = {
            name: newName,
            number: newNumber
        }
        setPersons(persons.concat(newPerson))
        setNewName('')
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with <input value={filterName} onChange={event=>setFilterName(event.target.value)}/>
            </div>
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={event => setNewName(event.target.value)} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={event => setNewNumber(event.target.value)} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.filter(val=>val.name.includes(filterName)).map((person => <div key={person.name}>{person.name} {person.number}</div>))}
            </div>
        </div>
    )
}

export default App