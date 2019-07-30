import React from 'react'
import Welcome from './Welcome'
import ToDoItem from './ToDoItem'

function ToDo() {
  return (
    <section className='toDo-wrapper'>
      <div className='toDo-list'>
        {/* <Welcome /> */}
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </div>
      
      {/* <input type='checkbox' /><span>Learn React</span>
      <input type='checkbox' /><span>Complete Animation Tutorial</span>
      <input type='checkbox' /><span>Review JS Fundamentals</span>
      <input type='checkbox' /><span>Read up on a11y</span> */}
    </section>
  )
}

export default ToDo