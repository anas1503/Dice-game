import React from 'react'
import { useState } from 'react'
import Die from '../dice/Die'
import Win from '../Win'
import './diceRoll.css'

const DiceRoll = () => {

    const faces = ["one", "two", "three", "four", "five", "six"];
    const [dice, setDice] = useState(1)
    const [user, setUser] = useState(1)
    const [value, setValue] = useState(0)
    const [sum1, setSum1] = useState(0)
    const [sum2, setSum2] = useState(0)
    const [score, setScore] = useState(0)
    const [result, setResult] = useState(false)
    const [winner, setWinner] = useState("")


    const RandomNum = () => {
        const num = Math.floor(Math.random() * 6);
        setDice(num);
        setScore(score + num + 1);
        setValue(value + 1);
        if (value % 5 === 0 && value % 2 != 0 && value!=0) {
            alert("Player 2 turn");
            setUser(2);
            setSum1(score);
            setScore(0)
        }

        if (value % 10 === 0 && value!=0) {

            // alert("Click ok to get result");
            setUser(1);
            setSum2(score);
            setScore(0)
            setResult(true)
            if(sum1>sum2) setWinner("Player 1 wins!!");
            else if(sum1<sum2) setWinner("Player 2 wins!!");
            else setWinner("Its a draw")
        }
    }

    const resethandler=() => {
        setValue(0);
        setUser(1);
        setSum1(0);
        setSum2(0);
        setScore(0);

    }

    return (
        <>
        {result ? (<Win winner={winner} p1score={sum1} p2score={sum2} />    ) 
             :   
        ( <div><Die face={faces[dice]} player={user} />

<button className="reset" onClick={resethandler}>RESET</button>
<button className="btn" onClick={RandomNum}>Roll</button>
<h1 className="sum">Total Score : <span style={{ color: "white" }}>{score}</span></h1>
<div className="score">
    <div className="count" >
        <p id="p1">{sum1}</p>
        <h2>Player 1</h2>
    </div>
    <div className="count" >
        <p id="p2">{sum2}</p>
        <h2 >Player 2</h2>
    </div>
    
</div>
</div>
)
            }    </>
        
       
        
    )
        }


export default DiceRoll
