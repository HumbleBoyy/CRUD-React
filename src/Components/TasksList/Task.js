import { faL, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'

const Task = ({todos, setTodos}) => {
    const [deleteModal, setDeleteModal] = useState(false)

    const handleDeleteTask = (id) => {
       todos.splice(id, 1)
       setTodos([...todos])
       setDeleteModal(false)
    }
  return (
    <>
    {
        todos.map((item, index) => (
        < div key={index}>
        <div >
            <li className='bg-slate-400 w-[500px] rounded-lg h-[70px] p-3 flex justify-between items-center'>
                <strong className='text-[20px]'><span>{item.id})</span> {item.title}</strong>
                <div className='flex gap-2'>
                    <button className='text-blue-600 text-[25px]'><FontAwesomeIcon icon={faPenToSquare} /></button>
                    <button onClick={() => setDeleteModal(true)} className='text-red-600 text-[25px]'><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </li>
        </div>

        <Modal extraClass={deleteModal === false ? "scale-0" : "scale-1"}>
        <div className='flex justify-center items-center flex-col p-16 gap-2'>
           <h2 className='text-[25px]'>Are you sure to delete?</h2>
           <div className='flex gap-2'>
             <button  onClick={() => setDeleteModal(false)} className='bg-blue-600 w-[150px] text-white font-bold rounded-md text-[25px]'>Cancel</button>
             <button onClick={() => handleDeleteTask(index)} className='bg-red-600 w-[150px] text-white font-bold rounded-md text-[25px]'>Delete</button>
           </div>
        </div>
       </Modal>
      </div>
        ))
    }
    </>
    
  )
}

export default Task
