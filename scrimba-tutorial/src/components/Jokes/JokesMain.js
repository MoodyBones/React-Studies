import React from 'react'

import JokesCard from './JokesCard'
import jokesData from './jokesData'


function JokesMain() {
  const jokeComponents = jokesData.map(joke => <JokesCard key={joke.id} question={joke.question} answer={joke.answer} />)

  return (
    <div className='jokes-wrapper'>
      <h1>LOL<br/>Jokes</h1>
      {jokeComponents}
    </div>
  )
}

export default JokesMain