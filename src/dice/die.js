import React from 'react'
import './die.css'

const Die = (props) => {
    const {player,face}=props;

    return (
        <div>
          <h2>Player {player}</h2>
          <i class={` die fas fa-dice-${face}`}/>
        </div>
    )
}

export default Die
