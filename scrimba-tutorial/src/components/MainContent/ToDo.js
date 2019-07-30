import React from 'react'

function ToDo() {
  return (
    <section className='toDo-wrapper'>
      <h2>To Do</h2>
      <ul className='l-s-none'>
        <li><input type='checkbox' /><span>Learn React</span></li>
        <li><input type='checkbox' /><span>Complete Animation Tutorial</span></li>
        <li><input type='checkbox' /><span>Review JS Fundamentals</span></li>
        <li><input type='checkbox' /><span>Read up on A11Y</span></li>
      </ul>
    </section>
  )
}

export default ToDo