import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ todo }) => (
  <div>
    <h3>{todo.text}</h3>
    <div>
      <button>Mark As complete</button>
      <button>Remove</button>
    </div>
  </div>
)

export default TodoListItem
