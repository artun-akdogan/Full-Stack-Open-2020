import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')

    const addPerson = (event) =>{
        event.preventDefault()
        if(persons.some(val => val.name===newName)){
            window.alert(`${newName} is already added to phonebook`)
            return
        }
        const newPerson = {
            name: newName
        }
        setPersons(persons.concat(newPerson))
        setNewName('')
    }

    const updateInput = (event) =>{
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={updateInput} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map((person=><div key={person.name}>{person.name}</div>))}
            </div>
        </div>
    )
}

export default App