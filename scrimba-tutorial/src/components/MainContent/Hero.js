import React from 'react'
import Emoji from '../Emoji'


function Hero() {
  return (
      <section className='hero-wrapper'>
        <div className='hero-container bg-white temp-pad'>
          <h1>I'm Mel Jones</h1>
          <p>A self-taught Web Dev based in Berlin. Born in Melbourne, Australia, I love tasty food and salty water.</p>
          <span><Emoji symbol="🌴" label="woman-technologist"/></span>
          <h4>Holiday wish list!</h4>
          <ol className='vacay-list'>
            <li>Mexico</li>
            <li>Portugal</li>
            <li>Sri Lanka</li>
          </ol>
        </div>
      </section>
  )
}

export default Hero