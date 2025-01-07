import React from 'react'

const Modal = ({children, extraClass}) => {
  return (
    <div className={`fixed inset-0  ${extraClass} flex items-center justify-center bg-[#00000009] w-full`}>
         <div className='w-[500px] h-[200px] rounded-sm bg-slate-200'>
            {children}
         </div>
    </div>
  )
}

export default Modal
