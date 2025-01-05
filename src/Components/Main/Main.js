import React, { useState } from 'react'
import Form from '../Form/Form'
import Task from '../TasksList/Task'

const Main = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])


  localStorage.setItem("todos", JSON.stringify(todos))
  return (
    <>
    <div className='bg-blue-950 h-[100vh] flex items-center flex-col gap-2'>
      <div className='w-[500px] bg-slate-300 h-[150px] mt-2 rounded-lg'>
        <Form todos={todos} setTodos={setTodos}/>
      </div>
      <Task todos={todos} setTodos={setTodos}/>
    </div>
  
    </>
  )
}

export default Main
