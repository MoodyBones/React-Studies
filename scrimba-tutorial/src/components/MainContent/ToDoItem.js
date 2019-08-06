import React from 'react'

function ToDoItem(props) {
  return (
    <div className='toDo-item round'>
      <input 
        type='checkbox' 
        id='checkbox' 
        checked={props.item.completed} 
        onChange={() => console.log('changed')} 
      />
      <p>{props.item.text}</p>
    </div>
  )
}

export default ToDoItem