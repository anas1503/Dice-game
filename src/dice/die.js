import React from 'react'

const Die = (props) => {
    return (
        <div>
          <i class={`fas fa-dice-${props.face}`}/>
        </div>
    )
}

export default Die
