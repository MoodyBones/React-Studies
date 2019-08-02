import React from 'react'

const JokesCard = (props) => {
  return (
    
    <div className='jokes-card'>
       <p style={{display: !props.jokes.q && 'none'}}>{props.jokes.q}</p>
      <p  style={{color: !props.jokes.q && 'yellow'}}>{props.jokes.a}</p>
    </div>
  )
}

export default JokesCard