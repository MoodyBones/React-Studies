import React from 'react'
import ToDoItem from './ToDoItem'
import toDosData from './toDosData'

class ToDo extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: toDosData
    }
  }
  render() {
    const toDoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item}/>)
    return (
      <section className='toDo-wrapper'>
        <div className='toDo-list'>
          {toDoItems}
        </div>
      </section>
    )
  }
}

export default ToDo