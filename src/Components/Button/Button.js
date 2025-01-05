import React from 'react'

const Button = ({icon, type}) => {
  return (
    <>
      <button type={type} className='w-[100px] h-[50px] text-white text-[20px] shadow-lg bg-green-600 rounded-r-lg'>{icon}</button>
    </>
  )
}

export default Button
