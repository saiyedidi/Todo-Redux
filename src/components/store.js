import { createStore } from "redux";
const intialState={
    todos:[],
    nextId:1
}
const todoReducer=(state=intialState,action)=>{
    switch(action.type){
        case 'ADD TODO':
            const newTodo={id:state.nextId,title:action.payload.title}
            return{
                ...state,todos:[...state.todos,newTodo],nextId:state.nextId+1
            }
        case 'EDIT TODO':
            return{
                ...state,todos:state.todos.map((item)=>
                    item.id===action.payload.id?{...item,title:action.payload.title}:item)
            }
        case 'DELETE TODO':
            return{
                ...state,todos:state.todos.filter((item)=>item.id !== action.payload)
            }
         default:
             return state           
    }

}
const store = createStore(todoReducer)
export  default store