import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Task = () => {
  return (
    <div >
      <li className='bg-slate-400 w-[500px] rounded-lg h-[70px] p-3 flex justify-between items-center'>
         <strong className='text-[20px]'>Task</strong>
         <div className='flex gap-2'>
            <button className='text-blue-600 text-[25px]'><FontAwesomeIcon icon={faPenToSquare} /></button>
            <button className='text-red-600 text-[25px]'><FontAwesomeIcon icon={faTrash} /></button>
         </div>
      </li>
    </div>
  )
}

export default Task
