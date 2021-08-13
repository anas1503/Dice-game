import React from 'react'
import { useState } from 'react'
import Die from '../dice/Die'
import Win from '../winner/Win'
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
    const [winner1, setWinner1] = useState("")
    const [winner2, setWinner2] = useState("")


    const RandomNum = () => {
        const num = Math.floor(Math.random() * 6);
        setDice(num);
        setScore(score + num + 1);
        setValue(value + 1);
        if (value % 5 === 0 && value % 2 !== 0 && value !== 0) {
            alert("Player 2 turn");
            setUser(2);
            setSum1(score);
            setScore(0)
        }

        if (value % 10 === 0 && value !== 0) {

            setUser(1);
            setSum2(score);
            setScore(0)
            setResult(true)

            setWinner1("Player 1 wins!!")
            setWinner2("Player 2 wins!!")

            if (sum1 === sum2)
                alert("Match tied :anguished:")

        }
    }

    const resethandler = () => {
        setValue(0);
        setUser(1);
        setSum1(0);
        setSum2(0);
        setScore(0);

    }

    return (
        <>
            {result ? (<Win p1score={sum1} p2score={sum2} winner1={winner1} winner2={winner2} />
            )
                :
                (<div><Die face={faces[dice]} player={user} />

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
