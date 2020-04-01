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
      {parts.map((val)=><Part key={val.id}  props={val} />)}
    </div>
  )
}

const Total = ({parts}) =>{
  return <p><strong>total of {parts.reduce((acc, val)=> acc+val.exercises, 0)} exercises</strong></p>
}

const Course = ({course})=>(
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map((val)=><Course key={val.id}  course={val} />)}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);