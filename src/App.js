import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "./components/action"
import TodoList from "./components/TodoList"

const App=()=>{
   let dispatch=useDispatch()
   const[todoTitle,setTodoTitle] = useState('')
   const handleAdd=()=>{
    if(todoTitle.trim()){
      const newTodo={
        title:todoTitle
      }
      dispatch(addTodo(newTodo))
      setTodoTitle('');
    }

   }
  return(
    <>
    <div className="container mt-5 w-50">
      <h3 className="text-primary text-centre">Todo App Using Redux React</h3>
      <div className="input-group">
        <input type="text"
         className="form-control"
          value={todoTitle}
           onChange={(e)=>setTodoTitle(e.target.value)}/>
        <button className="btn btn-primary" onClick={()=>handleAdd()}> Add</button>
      </div>
      <TodoList></TodoList>

    </div>
    </>
  )
}
export default App