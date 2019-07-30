import React from 'react'

import Hero from './MainContent/Hero'
import ToDo from './MainContent/ToDo'


function MainContent() {
  return (
      <main className='main-wrapper'>
        <Hero />
        <ToDo />
      </main>
  )
}

export default MainContent