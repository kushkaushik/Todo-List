import './App.css';
import { Todos } from "./component/Todos";
import { AddTodo } from "./component/AddTodo";

import {Footer} from './component/Footer'
import {Header} from './component/Header'
import React, { useState,useEffect } from 'react'




function App() {
  let initTodo;
  if(localStorage.getItem("todos") ===null){
    initTodo = [];

  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }





  const onDelete = (m) =>{
    console.log("I am Deleteed",m)

   setTodos(todos.filter((e)=>
   {return e!==m}
   ))
   localStorage.setItem("todos",JSON.stringify(todos));

  }







const addTodo = (title,desc) =>{
console.log("Adding todo",title,desc)

let sno;
if(todos.length == 0){
  sno = 1;
}else{
 sno = todos[todos.length-1].sno+1;
}
const myTodo = {
  sno:sno,
  title:title,
  desc : desc,
}
setTodos([...todos,myTodo]);






}





const [todos,setTodos] = useState(initTodo);
useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos));
  
}, [todos])
  


  return (
   <>

    
    <Header title = "Todos"/>
    <AddTodo addTodo = {addTodo}/>

    <Footer/>
  <Todos todo = {todos} onDelete = {onDelete}/>    

   </>

  );
}

export default App;
