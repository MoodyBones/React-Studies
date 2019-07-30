import React from 'react'
import Welcome from './Welcome'

function ToDo() {
  return (
    <section className='toDo-wrapper'>
      <Welcome />
      <ul className='l-s-none'>
        <li><input type='checkbox' /><span>Learn React</span></li>
        <li><input type='checkbox' /><span>Complete Animation Tutorial</span></li>
        <li><input type='checkbox' /><span>Review JS Fundamentals</span></li>
        <li><input type='checkbox' /><span>Read up on a11y</span></li>
      </ul>
    </section>
  )
}

export default ToDo