import React from 'react'


const JokesCard = (props) => {
  return (
    <div className='jokes-card'>
      <p style={{display: !props.question && 'none'}}>{props.question}</p>
      <p style={{color: !props.question && 'yellow'}}>{props.answer}</p>
    </div>  
  )
}

export default JokesCard