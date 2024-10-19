import  { useState } from 'react'
import styles from "./Form.module.css"
 function Form({todos,setTodos}) {
    
    
    //const [todo, setTodo]=useState("")
    const [todo, setTodo]=useState({name:"", done:false});
    function submithandler(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo({name:"", done:false});
       }
  return (
    
      <form className={styles.todoform}
        onSubmit={submithandler}>
<div className={styles.inputcontainer}>
    <input  className={styles.moderninput} 
    placeholder="input todo items" onChange={(e)=>
     setTodo({name:e.target.value, done:false})} 
     value={todo.name}
      type="text"/>
    <button className={styles.modernbutton} 
    type="submit" >Add</button>
    </div>
   </form>

    
)
}
export default Form