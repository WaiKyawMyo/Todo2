import React, { useState } from 'react'

import Form from './Form'
import TodoListShow from './TodoListShow'
import Fooder from './Fooder'

export default function Todo() {
  const [todos,settodos]= useState([])
  const totalTodo= todos.filter((todo)=>todo.done).length
  const total = todos.length
  return (
    <div>
        <Form todos={todos} settodos={settodos}/>
        <TodoListShow todos={todos} settodos={settodos} />
        <Fooder totalTodo={totalTodo} total={total}/>
    </div>
  )
}
