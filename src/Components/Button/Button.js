const Button = ({icon, type}) => {
  return (
    <>
      <button type={type} className='w-[100px] h-[50px] text-white text-[20px] shadow-lg bg-green-600 rounded-r-lg outline-none'>{icon}</button>
    </>
  )
}

export default Button
