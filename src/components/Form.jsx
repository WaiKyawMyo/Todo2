import React, { useState } from 'react'
import "./Form.css"

export default function Form({todos,settodos}) {
    const [todo,settodo]=useState({name:'',done:false})

    function handlesubmit(e){
      e.preventDefault()
      
      settodos([...todos,todo])
      settodo({name:'',done:false})
    }
  return (
  
        <form className='todoform' action="" onSubmit={handlesubmit}>
            <div className='ContainerInputandbutton'>

            <input className='moderninput' type="text" onChange={(e)=>settodo({name:e.target.value,done:false})} value={todo.name} placeholder='Ender Todo list'/>
            <button className='modernButton' type='submit'>Add</button>

            </div>
        </form>
    
  )
}
