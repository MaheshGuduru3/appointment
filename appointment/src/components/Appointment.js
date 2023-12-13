import React, { useContext, useEffect, useState } from 'react'
import { AppProvide } from '../context/ContextApi'
import { FaSkating } from 'react-icons/fa'

const Appointment = () => {

    const { doctor , patient , setPatient} = useContext(AppProvide)
   

    const [ choose , setChoose] = useState('ChooseDate&Time')
    const [date , setDate] = useState('')
    const [time , setTime] = useState('')
   
    const [ name , setName] = useState('')
    const [gender ,setGender] = useState('')
    const [age , setAge] = useState('')
    const [number , setNumber] = useState('')
    
    const [special , setSpecial] = useState('')


    const [fdname ,setFdname] = useState([])

    const [id , setId] = useState(null)

    const [ submitData , setSubmitData] = useState(false)
   
    const [finish , setFinish] = useState(false)

    console.log(patient.length) 

    function finishHandler() {
        const res = {
            patientid: patient.length + 1 ,
            name: name,
            opid : Math.ceil(Math.random() * 10000 + 1),
            gender: gender,
            age:age,
            mobile : number,
            lastcons : [ `${date},${time}`],
            doctorsid : id 
        }

   

        setPatient([...patient , res ])
         setFinish(true)
          setSubmitData(false)   
    }
 
 useEffect(()=>{
       const result = doctor?.filter((i)=>i.specialist=== special)
       if(result){
         setId(result[0]?.doctorid)
         setFdname(result)
       }
 },[special])

    
  return (
    <div className='w-full relative'>
        <div className='w-full lg:w-[70%] m-auto flex justify-between border-b-2 cursor-pointer' onClick={(e)=>setChoose(e.target.innerText)}>
        <h4 className={choose === 'ChooseDate&Time' ? 'text-lg font-thin border-b-2 border-b-blue-700 hover:border-b-blue-500 hover:border-b-2' :'text-lg font-thin hover:border-b-blue-500 hover:border-b-2' }>ChooseDate&Time</h4>
        <h4 className={choose === 'Personalinfo' ? 'text-lg font-thin border-b-2 border-b-blue-700 hover:border-b-blue-500 hover:border-b-2' :'text-lg font-thin hover:border-b-blue-500 hover:border-b-2' }>Personalinfo</h4>
        <h4 className={choose === 'ChooseDoctor' ? 'text-lg font-thin border-b-2 border-b-blue-700 hover:border-b-blue-500 hover:border-b-2' :'text-lg font-thin hover:border-b-blue-500 hover:border-b-2' }>ChooseDoctor</h4>
        </div>

        {
            choose === "ChooseDate&Time" &&
            <div className='w-[70%] m-auto p-4'>
                <div className='w-[20rem] bg-white shadow-lg p-4 flex flex-col gap-3 border-2'>
                    <div >
                       <h4 className='font-light p-1'>Choose Date</h4>
                       <input type='date' className='w-[15rem] p-1 cursor-pointer' value={date} onChange={(e)=>setDate(e.target.value)} />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div>
                          <h4 className='font-light p-1'>Choose Morning</h4>
                          <div className='flex gap-4 cursor-pointer' onClick={(e)=>setTime(e.target.innerText)}>
                            <h4 className={time === "10:30AM" ? 'border-2 p-1 bg-blue-500 text-white text-sm px-2 hover:bg-blue-500 hover:text-white':'border-2 p-1 text-sm px-2 hover:bg-blue-500 hover:text-white'}>10:30AM</h4>
                            <h4 className={time === "11:30AM" ? 'border-2 p-1 bg-blue-500 text-white text-sm px-2 hover:bg-blue-500 hover:text-white':'border-2 p-1 text-sm px-2 hover:bg-blue-500 hover:text-white'}>11:30AM</h4>                         
                         </div>
                        </div>
                        <div>
                          <h4 className='font-light p-1'>Choose AfterNoon</h4>
                          <div className='flex gap-4 cursor-pointer' onClick={(e)=>setTime(e.target.innerText)}>
                            <h4 className={time === "12:30PM" ? 'border-2 p-1 bg-blue-500 text-white text-sm px-2 hover:bg-blue-500 hover:text-white':'border-2 p-1 text-sm px-2 hover:bg-blue-500 hover:text-white'}>12:30PM</h4>
                            <h4 className={time === "02:30PM" ? 'border-2 p-1 bg-blue-500 text-white text-sm px-2 hover:bg-blue-500 hover:text-white':'border-2 p-1 text-sm px-2 hover:bg-blue-500 hover:text-white'}>02:30PM</h4>
                            <h4 className={time === "10:30PM" ? 'border-2 p-1 bg-blue-500 text-white text-sm px-2 hover:bg-blue-500 hover:text-white':'border-2 p-1 text-sm px-2 hover:bg-blue-500 hover:text-white'}>03:30PM</h4>
                          </div>
                        </div>
                        <div>
                          <h4 className='font-light p-1'>Choose Evening</h4>
                          <div className='flex gap-4 cursor-pointer' onClick={(e)=>setTime(e.target.innerText)}>
                            <h4 className={time === "04:30PM" ? 'border-2 p-1 bg-blue-500 text-white text-sm px-2 hover:bg-blue-500 hover:text-white':'border-2 p-1 text-sm px-2 hover:bg-blue-500 hover:text-white'}>04:30PM</h4>
                            <h4 className={time === "05:30PM" ? 'border-2 p-1 bg-blue-500 text-white text-sm px-2 hover:bg-blue-500 hover:text-white':'border-2 p-1 text-sm px-2 hover:bg-blue-500 hover:text-white'}>05:30PM</h4>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        }

        {
            choose === "ChooseDoctor" &&
            <div className='w-[70%] m-auto p-4'>
                <div className='w-[20rem] bg-white shadow-lg p-4 flex flex-col gap-2'>
                    <div>
                        <h4 className='p-1'>Type of Specialist</h4>
                        <select className='form-select' onChange={(e)=>setSpecial(e.target.value)}>
                        <option value='Select Specialist' disabled selected>Select Specialist</option> 
                            {  
 
                                doctor.map((itm , index)=>(
                                  <option value={itm.specialist} key={index}>{itm.specialist}</option>
                                )) 
                            }
                        </select>
                    </div>
                    <div>
                        <h4 className='p-1'>Specialist Name</h4>
                        <select className='form-select'>
                        <option value='Select Name' disabled selected>Select Name</option> 

                            {
                               fdname.map((itm,index)=>(
                                <option value={itm.name} key={index}>{itm.name}</option>
                               ))
                            }
                        </select>
                    </div>
                  
                </div>
            </div>
        }
            
        {
            choose === "Personalinfo" &&
            <div className='w-[70%] m-auto p-4'>
                <div className='w-[20rem] bg-white shadow-lg p-4'>
                   <form onSubmit={(e)=>{e.preventDefault()}} className='flex flex-col gap-2'>
                      <input type='text' className='form-input p-1 w-full' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
                      <input type='text' className='form-input p-1 w-full' placeholder='Gender' value={gender} onChange={(e)=>setGender(e.target.value)} />
                      <input type='text' className='form-input p-1 w-full' placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)} />
                      <input type='text' className='form-input p-1 w-full' placeholder='Number' value={number} onChange={(e)=>setNumber(e.target.value)} />
                   </form>
                </div>
            </div>
        }
    
       {
           date && time && name && gender && age && number && special && fdname ?
           <div className='text-center'>
            <button className='p-1 text-white px-4' onClick={()=>setSubmitData(true)}>{finish ? <span className='p-1 bg-green-500 text-white px-4'>Your Appointment is success!</span> : <span className='p-1 bg-red-500 text-white px-4'>Submit</span>}</button>
            </div>
            :
            <div className='text-center'>
                <h4>Note:Required All field.</h4>
            </div>
       }

       {
           submitData &&
           <div className='w-full absolute top-1'>
                <div className='w-full flex justify-center'>
                   <div className='w-[20rem] shadow-lg bg-white z-10 rounded-md p-4'>
                       <h4 className='p-1 font-semibold border-b-2'>Submission Data</h4>
                       <div className='border-b-2 p-2 flex flex-col gap-1'>
                          <h4>Patient Data</h4>
                          <h4>PatientName : {name}</h4>
                          <h4>Gender : {gender}</h4>
                          <h4>Age : {age}</h4>
                          <h4>Number : {number}</h4>
                        </div>
                        <div className='border-b-2 p-2 flex flex-col gap-1'>
                        <h4>Doctor Data</h4>
                          <h4>DoctorName : {
                              fdname.map((i,index)=>(
                                <span key={index}>{i.name}</span>
                              ))
                            }</h4>
                           <h4>Specialist : {special}</h4>
                        </div>
                        <div className='p-1 flex gap-2'>
                          <button className='p-1 bg-slate-400 text-white' onClick={()=>setSubmitData(false)}>Close</button>
                          <button className='p-1 bg-red-500 text-white' onClick={finishHandler}>Finish</button>
                        </div>
                    </div>
                </div>
           
            </div>
       }

      
    </div>
  )
}

export default Appointment