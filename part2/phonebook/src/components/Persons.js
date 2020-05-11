import React from 'react'

const Persons = ({ persons, filterName }) => (
    <div>
        {persons.filter(val => val.name.toLowerCase().includes(filterName.toLowerCase())).map((person => <div key={person.name}>{person.name} {person.number}</div>))}
    </div>
)

export default Persons