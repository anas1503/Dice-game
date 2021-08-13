import React from 'react'
import { useState } from 'react'
import DiceRoll  from './diceRoll/DiceRoll'
import './win.css'

const Win = (props) => {

     const [play,setPlay]=useState(false);
   
const Playhandler = () =>{
    setPlay(true);
}
    const {p1score,p2score,winner1,winner2}=props;
    return (
       <>
       {play ? (<DiceRoll />) : ( <div className="winContainer">
        <div className="winScore">
                <p>Player 1 score : <span style={{color:"white"}}>{p1score}</span></p> 
                <p>Player 2 score : <span style={{color:"white"}}>{p2score}</span> </p> 
                </div>

            <p className="win">{p1score>p2score ? (winner1): (winner2)}</p>

            <button className="playAgain" onClick={Playhandler}>Play Again</button>
        </div>)}
       </>
    )
}

export default Win
