import React from 'react'

const Button = ({title}) => {
  return (
    <>
      <button className='bg-green-600 text-white p-2 font-semibold rounded-md w-[150px]'>{title}</button>
    </>
  )
}

export default Button
