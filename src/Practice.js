import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  const Display = (props) => {
    return (
    <div>{props.counter}</div>
    )
  }
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  const name = "Peter"
  const age = 10

  const course = {
    title: 'Half Stack application development',
    total: 'Total number of exercises: ',
    parts: [
      {
        name: 'Fundamentals of React',
        number: 'Number of exercises: ',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        number: 'Number of exercises: ',
        exercises: 7
      },
      {
        name: 'State of a component',
        number: 'Number of exercises: ',
        exercises: 14
      }
    ]
  }
  const alex = {
    name: "Alex",
    age: 26,
    education: "BA"
  }
  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    greet() {
      console.log("Hello, my name is " + this.name + ", I'm " + this.age + " and I have a " + this.education + " in IT")
    }
  }
  const adam = new Person('Doris', 29)
  adam.greet()
  const ciaran = new Person('Ciaran', 28)
  ciaran.greet()

  
  const Hello = ({ name, age }) => {
    const bornYear = () => new Date().getFullYear() - age

    return (
      <div>
        <p>
          Hello {name}, you are {age} years old
        </p>
        <p>
          So you were probably born in {bornYear()}
        </p>
      </div>
    )
  }
  return (
    <div>
      <div>
        <Display counter={counter} />
      </div>
      <h1>{counter}</h1>
      <button onClick={increaseByOne}>increase</button>
      <button onClick={setToZero}>reset</button>
      <h1>Greetings</h1>
      <Hello name="Maya" age={10 + 26} />
      <Hello name={name} age={age} />
      <h2>{course.parts[0].name}</h2>
      <h3>{course.parts[0].number} {course.parts[0].exercises}</h3>
      <h2>{course.parts[1].name}</h2>
      <h3>{course.parts[1].number} {course.parts[1].exercises}</h3>
      <h2>{course.parts[2].name}</h2>
      <h3>{course.parts[2].number} {course.parts[2].exercises}</h3>
      <h2>{course.total} {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} </h2>
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)





import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  const Display = ({counter}) => {
    return (
      <div>{counter}</div>
    )
  }
  const Button = ({handleClick, text}) => {
    return (
      <div>
        <button onClick={handleClick}>{text}</button>
      </div>
    )
  }
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne}
        text="plus" />
      <Button handleClick={decreaseByOne}
        text="decrease" />
      <Button handleClick={setToZero}
        text="reset" />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
