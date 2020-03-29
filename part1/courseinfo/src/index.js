import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) =>{
  return <h1>{name}</h1>
}

const Part = ({name, exercises}) =>{
  return <p>{name} {exercises}</p>
}

const Content = (props) =>{
  //Added "React.Fragment" to eliminate "Each child in a list should have a unique "key" prop" warning.
  return (
    <div>
      {props.parts.map((val, id)=>(
          <React.Fragment key={id}>
            {Part(val)}
          </React.Fragment>
        ))}
    </div>
  )
}

const Total = (props) =>{
  return <p>Number of exercises {props.parts.reduce((acc, val)=> acc+val.exercises, 0)}</p>
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