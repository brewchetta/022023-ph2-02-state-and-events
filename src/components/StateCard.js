import React from 'react'
import { useState } from 'react'

function StateCard({ state }) {
  
  const [likes, setLikes] = useState(0)
  const [color, setColor] = useState(true)

  console.log('likes:', likes)
  
  function handleClick() {
    setLikes( likes + 1 )
  }

  function handleColor() {
    setColor( internalColor => !internalColor )
  }

  return (
    <div className="state-card">

      <h2>{ state }</h2>

      <button onClick={ handleClick }>{ likes } Like</button>

      <button 
      onClick={ handleColor } 
      style={{ background: color ? 'lightblue' : 'grey' }}>
        Change Color
      </button>

    </div>
  )
}

export default StateCard
