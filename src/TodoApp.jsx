
import React,{useEffect,useState,useId} from "react"
const API_URL ="https://dummyjson.com/todos"
const TodoApp = () => {

   const [todos,setTodo] = useState([])
   const [crTodo,setCrTodo] = useState([])
    useEffect(()=>{
        const fetchTodoData = async ()=>{
            const response = await fetch(API_URL)
            const todos_api = await response.json()
            setTodo(todos_api.todos)
        }
        fetchTodoData()
    },[])
    const handleAdd = ((value)=>{
        setTodo([...todos,{id:todos.length+1,todo:crTodo}])
        console.log(crTodo);
    })
    return (
    <>
    <h2>Todo Page</h2>
    <input type="text" value={crTodo} onChange={(e)=>{setCrTodo(e.target.value)}}/>
    <button onClick={handleAdd} >Add New</button>
    {
    todos.map((val)=>(
        <li key={val.id}>{val.todo}</li>
    ))
    }
    </>)
    
}
export default TodoApp;