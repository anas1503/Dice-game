import React from 'react'
import './win.css'

const Win = (props) => {
    const {p1score,p2score,winner}=props;
    return (
        <div className="winContainer">
        <div className="winScore">
                <p>Player 1 score : <span style={{color:"white"}}>{p1score}</span></p> 
                <p>Player 2 score : <span style={{color:"white"}}>{p2score}</span> </p> 
                </div>

            <p className="win">{props.winner}</p>
        </div>
    )
}

export default Win
