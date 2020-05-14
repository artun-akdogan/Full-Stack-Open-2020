import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personSvc from './services/Persons'


const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterName, setFilterName] = useState('')
    useEffect(() => {
        personSvc.getAll().then(response => {
            setPersons(response.data)
        })
    }, [])

    const addPerson = (event) => {
        event.preventDefault()

        const newPerson = {
            name: newName,
            number: newNumber
        }

        if (persons.some(val => val.name === newName)) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                const id = persons.find((person => person.name === newName)).id
                personSvc.update(id, newPerson).then( response => {
                    setPersons(persons.map(person => person.id !== id ? person : response.data))
                })
            }

        } else {
            personSvc.create(newPerson).then(response => {
                setPersons(persons.concat(response.data))
                setNewName('')
                setNewNumber('')
            })
        }

    }

    const delPerson = (id) => {
        if (window.confirm(`Delete ${persons.find((person => person.id === id)).name} ?`)) {
            personSvc.del(id).then(response => {
                setPersons(persons.filter(person => person.id !== id))
            })
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filterName={filterName} setFilterName={setFilterName} />
            <h3>Add a new</h3>
            <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} addPerson={addPerson} />
            <h3>Numbers</h3>
            <Persons persons={persons} filterName={filterName} delPerson={delPerson} />
        </div>
    )
}

export default App