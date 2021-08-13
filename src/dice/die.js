import React from 'react'
import './die.css'

const Die = (props) => {
    const {player,face}=props;

    return (
        <div>
          <p className="players">Player {player}</p>
          <i class={` die fas fa-dice-${face}`}/>
        </div>
    )
}

export default Die
