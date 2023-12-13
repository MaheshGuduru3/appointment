import React, { useContext} from 'react'
import { AppProvide } from '../../context/ContextApi'

const LeftView = () => {
  
  const {  selected , setSelected  } =  useContext(AppProvide)

  return (
      <div className='w-[15rem]  bg-white shadow-lg min-h-[91vh]'>
         <div className='w-full p-4'>
               <div className='flex flex-col items-start' onClick={(e)=>setSelected(e.target.innerText)}>
                   <button className={ selected === 'Appointment'? 'w-full font-light text-xl  text-white p-1 bg-teal-300': 'w-full font-light text-xl p-1 hover:bg-teal-200'}>Appointment</button>
                   <button className={ selected === 'Patient'? 'w-full font-light text-white text-xl p-1 bg-teal-300': 'w-full font-light text-xl p-1 hover:bg-teal-200'}>Patient</button>
                   <button className={ selected === 'Doctordetails'? 'w-full  text-white font-light text-xl p-1 bg-teal-300': 'w-full font-light text-xl p-1 hover:bg-teal-200'}>Doctordetails</button>
               </div>
         </div>
      </div>
  )
}

export default LeftView