import React from 'react'
import DiceRoll from './diceRoll/DiceRoll'
import Header from './Header'
import './App.css';

const App = () => {
  return (
    <div className="main">
    <div className="wrapper">
      <Header />
      <DiceRoll />
    </div>
    </div>
  )
}

export default App
