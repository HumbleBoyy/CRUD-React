import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'

const Task = ({ todos, setTodos }) => {

// Modal states 
  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

 
// Edit and id States
  const [updateValue, setUpdateValue] = useState("")
  const [updateId, setUpdateId] = useState(null)

// Edit function 
  function handleEditBtnClick(id){
    setUpdateId(id)
    setEditModal(true)
    const findObj = todos.find(item => item.id == id)
    setUpdateValue(findObj.title)
  }

// Submit function 
  const handleOnSubmitEditTask = (e) => {
    e.preventDefault()
    const findObj = todos.find(item => item.id == updateId)
    findObj.title = updateValue
    setTodos([...todos])
    setEditModal(false)
  }


// Delete function 
  const handleDeleteTask = (id) => {
    const findIndex = todos.findIndex(item => item.id = id)
    todos.splice(findIndex, 1)
    setTodos([...todos])
    setDeleteModal(false)
  }

 
  return (
    <>
{/* Todos list  */}
      {
        todos.map((item, index) => (
          < div key={index}>
            <div >
              <li className='bg-slate-400 w-[500px] rounded-lg h-[70px] p-3 flex justify-between items-center'>
                <strong className='text-[20px]'><span>{index + 1})</span> {item.title}</strong>
                <div className='flex gap-2'>
                  <button onClick={() => handleEditBtnClick(item.id)} className='text-blue-600 text-[25px]'><FontAwesomeIcon icon={faPenToSquare} /></button>
                  <button onClick={() => setDeleteModal(true)} className='text-red-600 text-[25px]'><FontAwesomeIcon icon={faTrash} /></button>
                </div>
              </li>
            </div>
          </div>
        ))
      }

{/* Edit Modal */}
        <Modal extraClass={editModal === false ? "scale-0" : "scale-1"}>
              <div className='flex justify-center flex-col p-2 gap-2'>
                <form onSubmit={handleOnSubmitEditTask} className='flex items-center flex-col justify-center mt-10'>
                  <input value={updateValue} onChange={(e) => setUpdateValue(e.target.value)} name='Editedtask' type="text" placeholder="Add things to do..." className='w-[100%] h-[50px] p-2 text-[20px] shadow-2xl rounded-md outline-none' />
                  <div className='flex items-center gap-2 mt-3'>
                    <button onClick={() => setEditModal(false)} className='bg-red-600 w-[200px] h-[50px] text-white font-bold rounded-md text-[25px]'>Cancel</button>
                    <Button type={"submit"} icon={"Edit"} extraClass={'!bg-blue-600 !w-[200px] !text-white !font-bold !rounded-md !text-[25px] '} />
                  </div>
                </form>
              </div>
            </Modal>

{/* Delete Modal */}
            <Modal extraClass={deleteModal === false ? "scale-0" : "scale-1"}>
              <div className='flex justify-center items-center flex-col p-16 gap-2'>
                <h2 className='text-[25px]'>Are you sure to delete?</h2>
                <div className='flex gap-2'>
                  <button onClick={() => setDeleteModal(false)} className='bg-blue-600 w-[150px] text-white font-bold rounded-md text-[25px]'>Cancel</button>
                  <button onClick={handleDeleteTask} className='bg-red-600 w-[150px] text-white font-bold rounded-md text-[25px]'>Delete</button>
                </div>
              </div>
            </Modal>

    </>

  )
}

export default Task
