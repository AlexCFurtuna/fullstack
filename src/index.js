import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Exercises from './Exercises'
import './index.css'

const App = (props) => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    setValue(newValue)
  }

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const hello = (who) => () => {
    console.log('hello', who)
  }

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }
  const handleReset = () => {
    setAll(allClicks.concat('0'))
    setLeft(0)
    setRight(0)

    //window.location.reload(false)
  }



  //React.createContext('div', [props])
  //const mystyle = {
  //color: "white",
  //backgroundColor: "rgb(245, 84, 84)",
  //padding: "100px",
  //width: "50%",
  //display: "flex",
  //flexDirection: "column",
  //textAlign: "center",
  //borderRadius: "5px",
  //}

  return (
    <div className="content" >
      <div className="boxes">
        {left}
        <Button onClick={handleLeftClick} text='Left' />
        <Button onClick={handleReset} text='Reset' />
        <Button onClick={handleRightClick} text='Right' />
        {right}
        <Button onClick={hello()} text='console button' />
        <History allClicks={allClicks} />

      </div>
      <div className="boxes">
        <Button onClick={hello('world')} text='world btn' />
        <Display value={value} />
        <Button onClick={hello('react')} text='react btn' />
        <Display value={value} />
        <Button onClick={hello('function')} text='function btn' />
        <Display value={value} />
      </div>

      <div className="boxes">
        <Display value={value} />
        <Button onClick={() => setValue(1000)} text={'1000'} />
        <Button onClick={() => setToValue(0)} text={'0'} />
        <Button onClick={() => setToValue(value + 1)} text={"+1"} />
      </div>
      <div className="exercises boxes">
        <Exercises />
      </div>
    </div>

  )
}
const Display = props => <div>{props.value}</div>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const History = (props) => {
  console.log('props value is: ', props)
  if (props.allClicks.length === 0) {
    return (
      <p>
        the app is used by pressing buttons
      </p>
    )
  }
  return (
    <p>
      button press history: {props.allClicks.join(' ')}
    </p>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
