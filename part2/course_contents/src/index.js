import React from 'react';
import ReactDOM from 'react-dom';

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

const Course = ({course})=>(
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
  </div>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);