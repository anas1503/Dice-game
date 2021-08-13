import React from 'react'
import { useState } from 'react'
import DiceRoll from './components/diceRoll/DiceRoll'
import Header from './components/Header'
import Dices from './assets/dices.png'
import './App.css';

const App = () => {
  const [gamestarted, setGamestarted] = useState(false)

  const starthandler = () => {
    setGamestarted(true);
  }
  return (
    <>
      {
        gamestarted ? (<div className="main">
          <div className="wrapper">
            <Header />
            <DiceRoll />
          </div>
        </div>) : (<div className="Landing">
          <img className="img" src={Dices} alt="dices" />
          <div className="start">
            <p className="title">The Dice Game</p>
            <button className="btn1" onClick={starthandler}>Play Now</button>
          </div>
        </div>)
      }
    </>



  )
}

export default App
