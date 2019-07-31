import React from 'react'

const JokesCard = (props) => {
  return (
    
    <div className='jokes-card'>
      <p>{props.jokes.q}</p>
      <p>{props.jokes.a}</p>
    </div>
  )
}

export default JokesCard