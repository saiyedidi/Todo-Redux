import { useSelector } from "react-redux"
import Todo from "./Todo"

const TodoList=()=>{
   const data= useSelector((item)=>item.todos)
    return(
        <>
        <ul className="list-group mt-4">
            {
                data.map((item)=>(
                    <Todo key={item.id} id={item.id} title={item.title}/>
                ))
            }
        </ul>

        </>
    )
}
export default TodoList