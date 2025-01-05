import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'

const Form = () => {

    const handleAddData = (e) => {
        console.log(e.target.value)
         e.preventDefault()
         const data = {
            id:1,
            task: e.target.task.value
         }

         console.log(data)
    }

  return (
    <form className='flex items-center justify-center mt-10 p-2'>
      <input onChange={handleAddData} name='task' type="text" placeholder="Add things to do..." className='w-[100%] h-[50px] p-2 text-[20px] shadow-lg rounded-l-md outline-none'/>
      <Button type={"submit"} icon={<FontAwesomeIcon icon={faCalendarPlus} />}/>
    </form>
  )
}

export default Form
