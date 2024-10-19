import React, { useState } from 'react'
import Footer from './footer';
import Form from './Form';
import Todolist from './Todolist';
function Todo() { 
  
    
   
  const[todos,setTodos]=useState([])
  const completedtodos=todos.filter((todo)=>todo.done).length
  const totaltodos=todos.length;
   return (
    <div>
   <Form todos={todos} setTodos={setTodos}/>
   <Todolist todos={todos} setTodos={setTodos}/>
 < Footer completedtodos={completedtodos} totaltodos={totaltodos}/>
 </div>
   )
}
  export default Todo
