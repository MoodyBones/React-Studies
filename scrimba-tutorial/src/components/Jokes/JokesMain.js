import React from 'react'
import JokesCard from './JokesCard'

const JokesMain = () => {
  return (
    <div className='jokes-wrapper'>
      <h1>LOL<br/>Jokes</h1>
      <JokesCard 
      jokes={{q:`Why did the chicken cross the road?`, a:`To get to the other side.`}}
      />
      <JokesCard 
      jokes={{a:`It’s hard to explain puns to kleptomaniacs because they always take things literally.`}}
      />
    </div>
  )
}

export default JokesMain