import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteTodo, editTodo } from "./action"

const Todo=({id,title})=>{
    const[editing,setEditing] =useState(false)
    const[newtitle,setNewTitle]=useState(title)
    let dispatch=useDispatch()
    const handleTodo=()=>{
        if(newtitle.trim()){
            debugger
            dispatch(editTodo({id:id,title:newtitle}))
            setEditing(false)

        }
    }
    const handleDel=()=>{
        dispatch(deleteTodo(id))
    }
    return(
        <div>
            {
                editing?(
                    <div className="form-group">
                        <input className="form-control" type="text" value={newtitle} onChange={(e)=>setNewTitle(e.target.value)}/>
                        <button className="btn btn-secondary" onClick={()=>handleTodo()}>Save</button>
                          
                    </div>
                )
                :(
                    <li className="list-group-item">
                        <p>{title}</p>
                        <div className="actions">
                            <button className="btn btn-primary" onClick={()=>setEditing(true)}>Edit</button>
                            <button className="btn btn-danger" onClick={()=>handleDel()}>Delete</button>
                        </div>
                    </li>
                )
            }
        </div>
    )
}
export default Todo