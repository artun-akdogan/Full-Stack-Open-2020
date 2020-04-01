import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) =>{
  return <h1>{name}</h1>
}

const Part = ({props}) =>{
  return <p>{props.name} {props.exercises}</p>
}

const Content = ({parts}) =>{
  //Added "React.Fragment" to eliminate "Each child in a list should have a unique "key" prop" warning.
  return (
    <div>
      {parts.map((val, id)=><Part key={id}  props={val} />)}
    </div>
  )
}

const Total = ({parts}) =>{
  return <p>Number of exercises {parts.reduce((acc, val)=> acc+val.exercises, 0)}</p>
}

const App = () =>{
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))