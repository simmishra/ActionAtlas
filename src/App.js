import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App(){
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])
  // Run this function inside useEffect everytime the objects inside the array(todos here) of our second property change


  function addTodo(title){
    setTodos(currentTodos =>{
      return [
        ...currentTodos,
        {id:crypto.randomUUID(), title,completed: false}
      ]
    })

  }

  

  function toggleTodo(id,completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return {...todo,completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }




  return <>
        <NewTodoForm addTodo= {addTodo}/>
        <h1 className="header">ACTION ATLAS</h1>
        <TodoList todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
}