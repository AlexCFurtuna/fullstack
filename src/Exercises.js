import React, { useState } from 'react';

const Exercises = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [anecdotes, setAnecdotes] = useState(0)
  const anecdoteArr = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const randomArr = anecdoteArr[Math.floor(Math.random() * anecdoteArr.length)]


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='Good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button onClick={() => setBad(bad + 1)} text='Bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
      <Button onClick={() => setAnecdotes(randomArr)} text='Next Anecdote'/>
      <p>
        {randomArr}
      </p>
    </div>
  )
}


const Statistics = ({ good, neutral, bad }) => {
  const sumAll = good + neutral + bad;
  const sumGoodBad = good + bad;
  const average = Math.round(((good - bad) / sumGoodBad) * 100) / 100;
  const positive = Math.round((good / sumGoodBad) * 100) / 100;

  if (sumAll === 0) {
    return (
      <div>
        <h1>Statistics:</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div className="table">
      <table>
        <tr>
          <th>Good</th>
          <th>Neutral</th>
          <th>Bad</th>
          <th>All</th>
          <th>Positive</th>
          <th>Average</th>
        </tr>
        <tr>
          <th>{good}</th>
          <th>{neutral}</th>
          <th>{bad}</th>
          <th>{sumAll}</th>
          <th>{positive}</th>
          <th>{average}</th>
        </tr>
      </table>
    </div>
  )
}
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

export default Exercises;