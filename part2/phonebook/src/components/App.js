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
        if (persons.some(val => val.name === newName)) {
            window.alert(`${newName} is already added to phonebook`)
            return
        }
        const newPerson = {
            name: newName,
            number: newNumber
        }
        personSvc.create(newPerson).then(response => {
            setPersons(persons.concat(response.data))
            setNewName('')
            setNewNumber('')
        })
    }

    const delPerson = (id) => {
        if(window.confirm(`Delete ${persons.find((person => person.id === id)).name} ?`)){
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