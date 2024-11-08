import React from 'react'
import "./Fooder.css"

export default function Fooder({totalTodo,total}) {
  return (
    <div className='footer'>
        <span className='item'>Compluted Todos:{totalTodo}</span>
        <span className='item'>Total Todos: {total}</span>
        
    </div>
  )
}
