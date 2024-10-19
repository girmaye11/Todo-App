import React from 'react'
import styles from "./todoitem.module.css"

 function Todoitem( {item,todos,setTodos } ) {
  function handledelete(item){
    setTodos(todos.filter((todo) => todo !==item))

  }
  function handleclick(name){
   
   setTodos(todos.map((todo)=>todo.name === name ?{...todo,done:!todo.done}:todo))
   
  }
  const className = item.done ? styles.completed : ""
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={()=> handleclick  (item.name)}>{item.name}</span>
        
      <span>
        <button  onClick={() => handledelete(item)}
        className={styles.deletebutton}>X</button>
      </span>
      </div>
      
      <hr className={styles.line}/>
    </div>
  )
}

export default Todoitem
