import React from 'react'
import "./Todolist.css"

export default function Todolist({item,settodos,todos}) {
  function deletebutton(item){
    
    settodos((previous)=> previous.filter((todo)=>todo.name !== item.name))
  }
  function clickdone(name){
   settodos((previous)=>previous.map((todo)=> todo.name==name?  {...todo,done:!todo.done} : todo))
    
    console.log(item)
  }
  return (
    <div className='item'>
        <div className='itemName'>
         <span className={item.done==true ? "complete ": ''} onClick={()=>clickdone(item.name)}>{item.name}</span> 
        
        <span>
          <button  onClick={()=>deletebutton(item)} className='deleteButton bg-slate-700'>X</button>
        </span>
        </div>
        
        <hr  className='line'/>
    </div>
  )
}
