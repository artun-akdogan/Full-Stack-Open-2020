import React from 'react';

const Header = ({ name }) => {
    return <h1>{name}</h1>
}

const Part = ({ props }) => {
    return <p>{props.name} {props.exercises}</p>
}

const Content = ({ parts }) => {
    //Added "React.Fragment" to eliminate "Each child in a list should have a unique "key" prop" warning.
    return (
        <div>
            {parts.map((val) => <Part key={val.id} props={val} />)}
        </div>
    )
}

const Total = ({ parts }) => {
    return <p><strong>total of {parts.reduce((acc, val) => acc + val.exercises, 0)} exercises</strong></p>
}

const Course = ({ course }) => (
    <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
)

export default Course