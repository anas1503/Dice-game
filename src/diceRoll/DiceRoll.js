import React from 'react'
import Die from '../dice/Die'
import './diceRoll.css'

const DiceRoll = () => {

    const faces=["one","two","three","four","five","six"];
    const num= Math.floor(Math.random() * 6);
    
    return (
        <div>
           <Die face="three" player="1" /> 
           <button className="btn" >Roll</button>
        </div>
    )
}

export default DiceRoll
