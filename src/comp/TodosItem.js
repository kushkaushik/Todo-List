import React from 'react'

export const TodosItem = (props) => {
    return (
        <>
       
        <div className = " container">
        <h4 className= "">{props.todo.title}</h4>
        <p>{props.todo.desc}</p>
        <button onClick = {() => props.onDelete(props.todo)} className = "btn btn-danger">delte</button><hr/>

        </div>
        </>
    )
}
