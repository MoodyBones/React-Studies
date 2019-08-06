import React from 'react'
import ToDoItem from './ToDoItem'
import toDosData from './toDosData'

class ToDo extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: toDosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedToDos = prevState.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
      return {
        todos: updatedToDos
      }
    })
  }


  render() {
    const toDoItems = this.state.todos.map(item => 
      <ToDoItem 
        key={item.id} 
        item={item}
        handleChange={this.handleChange}
      />
    )
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