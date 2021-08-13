import React from 'react'
import DiceRoll from './diceRoll/DiceRoll'
import './App.css';

const App = () => {
  return (
    <div className="main">
    <div className="wrapper">
      <h1>Dice Roll Game</h1>
      <DiceRoll />
    </div>
    </div>
  )
}

export default App
