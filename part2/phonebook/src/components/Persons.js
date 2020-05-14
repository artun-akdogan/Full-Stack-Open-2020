import React from 'react'

const Persons = ({ persons, filterName, delPerson }) => (
    <div>
        {persons.filter(val => val.name.toLowerCase().includes(filterName.toLowerCase())).map((person => <div key={person.name}>{person.name} {person.number} <button onClick={() => delPerson(person.id)}>delete</button></div>))}
    </div>
)

export default Persons