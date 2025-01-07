import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'

const Form = ({todos,setTodos}) => {
  
  // Subbmit form function
    const handleOnSubmitTask = (e) => {
         e.preventDefault()
         const data = {
            id:todos.length ? todos[todos.length -1].id + 1 : 1,
            title: e.target.task.value
         }
         setTodos([...todos, data])
         e.target.reset()
    }

  return (
    <form onSubmit={handleOnSubmitTask} className='flex items-center justify-center mt-10 p-2'>
      <input required name='task' type="text" placeholder="Add things to do..." className='w-[100%] h-[50px] p-2 text-[20px] shadow-lg rounded-l-md outline-none'/>
      <Button type={"submit"} icon={<FontAwesomeIcon icon={faCalendarPlus} />}/>
    </form>
  )
}

export default Form
