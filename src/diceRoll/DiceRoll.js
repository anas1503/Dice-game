import React from 'react'
import { useState } from 'react'
import Die from '../dice/Die'
import './diceRoll.css'

const DiceRoll = () => {

    const faces = ["one", "two", "three", "four", "five", "six"];
    const [dice, setDice] = useState(1)
    const [user, setUser] = useState(1)
    const [value, setValue] = useState(1)
    const [sum1, setSum1] = useState(0)
    const [sum2, setSum2] = useState(0)
  

    const RandomNum = () => {
        const num = Math.floor(Math.random() * 6);
        setDice(num);
        setValue(value + 1);
        console.log("t value is " + value);

        if (value % 5 === 0 && value % 2 != 0) {
            alert("Player 2 turn");
            setUser(2);
        }
        else setSum1(sum1+num);

        if (value % 10 === 0) {
            alert("Player 1 turn");
            setUser(1);
        }
    }

    return (
        <div>
            <Die face={faces[dice]} player={user} />
            <button className="btn" onClick={RandomNum}>Roll</button>
            <h1 className="sum">Total Score</h1>
            <div className="score">
                <div style={{ background: "white" }}>
                    <p id="p1">{sum1}</p>
                    <h2 style={{ color: "blue" }}>Player 1</h2>
                </div>
                <div style={{ background: "white" }}>
                    <p id="p2">{sum2}</p>
                    <h2 style={{ color: "blue" }}>Player 2</h2>
                </div>
            </div>
        </div>
    )
}

export default DiceRoll
