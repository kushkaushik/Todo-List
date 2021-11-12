import React from 'react'
import { TodosItem } from "./TodosItem";
export const Todos = (props) => {
    return (
        <>
       <h4 className = "container my-2">TodosList</h4>
{props.todo.length === 0?"No Todos Here":
            props.todo.map((e)=>{
         return <TodosItem todo = {e} key = {props.todo.snow} onDelete = {props.onDelete}/> 
            })
}          
        </>
    )
}
