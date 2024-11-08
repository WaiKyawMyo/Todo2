import React from 'react'
import Todolist from './Todolist'
import "./TodoListShow.css"

export default function TodoListShow({todos,settodos} ) {
  const todosort = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
  return (
    <div className='list'> 
        {todosort.map(item=>(
          <Todolist key={item.name} item={item} todos={todos} settodos={settodos}/>
        ))}
    </div>
  )
}
