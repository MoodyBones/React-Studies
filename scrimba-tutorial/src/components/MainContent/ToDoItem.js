import React from 'react'

function ToDoItem() {
  return (
    <div className='toDo-item round'>
      <input type='checkbox' id='checkbox' />
      <label for="checkbox"></label>
      <p>Learn React</p>
    </div>
  )
}

export default ToDoItem