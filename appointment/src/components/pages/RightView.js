import React, { useContext, useEffect, useState } from 'react'
import { AppProvide } from '../../context/ContextApi'
import { GiDuration } from "react-icons/gi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { FcDisplay, FcGraduationCap } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import Appointment from '../Appointment';


const RightView = () => {
    
   const { selected , doctor , patient}  = useContext(AppProvide)
   console.log(patient)
   const [tog , setTog ] = useState(false)

   const [searching , setSearching] = useState('')

   const [more , setMore] = useState(false)
   
   const [id , setId] = useState(null)

   const [display , setDisplay] = useState(false) 
  
    console.log(id)
            
    let res = []   
    
    useEffect(()=>{
          const result = patient.filter((i)=> {
                if(i.name === searching.toLowerCase()){
                      setId(i.doctorsid) 
                     return i.doctorsid
                }
          }) 
    },[searching])
  
    return (
        <div className='w-full'>
            <div className='flex flex-col p-5 gap-5'>
                 <h4 className='text-2xl  font-semibold  opacity-70'>/{selected} </h4>
                 <div className='w-full xxl:w-[75rem] min-h-[34rem] m-auto bg-white shadow-xl p-7 rounded-sm'>
                   {
                      selected === "Doctordetails" &&
                      <div className='w-full flex gap-5 flex-wrap justify-center cursor-pointer'>
                      {
                         doctor.map((itm,index)=>(
                            <div className='w-[18rem] shadow-md flex flex-col gap-3 rounded-md p-3' key={index}>
                            <div>
                               <h4 className='text-lg font-semibold'>{itm.name}</h4>
                               <h5 className='text-md font-thin'>{itm.specialist}</h5>
                               <h6 className='font-mono'>{itm.doctorid}</h6>
                            </div>
                            <div className='flex justify-around border-t-2 border-b-2 p-2'>
                               <div className='flex items-center gap-2'>
                                   <h4 className='w-8 h-8 flex justify-center items-center text-xl bg-blue-300 text-blue-500 rounded-full'><GiDuration /> </h4>
                                   <div>
                                       <h4 className='text-xs font-semibold'>Duration</h4>
                                       <h6 className='text-xs font-light'>{itm.duration}</h6>
                                   </div>
                               </div>
                               <div className='flex  items-center gap-2'>
                                   <h4 className='w-8 h-8 flex justify-center items-center text-xl bg-blue-300 text-blue-500 rounded-full'><HiOutlineCurrencyRupee /></h4>
                                   <div>
                                       <h4 className='text-xs font-semibold'>Fee</h4>
                                       <h6 className='text-xs font-thin'>{itm.fee}</h6>
                                   </div>
                               </div>
                            </div>
                            <div className='flex  items-center gap-2'>
                                   <h4 className='w-8 h-8 flex justify-center items-center text-xl bg-blue-300 text-blue-500 rounded-full'>< FcGraduationCap/></h4>
                                   <div>
                                       <h4 className='text-xs font-semibold'>Education</h4>
                                       <h6 className='text-xs font-thin'>{itm.education}</h6>
                                   </div>
                           </div>
                           <div className='flex  items-center gap-2'>
                                   <h4 className='w-8 h-8 flex justify-center items-center text-xl bg-blue-300 text-blue-500 rounded-full'>< CiLocationOn  /></h4>
                                   <div>
                                       <h4 className='text-xs font-semibold'>Location</h4>
                                       <h6 className='text-xs font-thin'>{itm.location}</h6>
                                   </div>
                           </div>
                           <div className='flex  items-center gap-2'>
                                   <h4 className='w-12 h-8 flex justify-center items-center text-xl bg-blue-300 text-blue-500 rounded-full'><FcAbout /></h4>
                                   <div>
                                       <h4 className='text-xs font-semibold'>About</h4>
                                       <h6 className='text-xs font-thin'>{itm.about}</h6>
                                   </div>
                           </div>
                           <h6 className='text-xs bg-green-400 text-white p-0.5 rounded-full text-center font-semibold'>Available All Slots
                             
                           </h6>
                         </div>
                         ))
                      }
                  </div>
                   }
                  
                    {
                       selected === "Patient" &&
                        <div className='w-full'>
                            <div className='w-full md:w-[25rem] relative'>
                                <input type='text' className='form-input w-full md:w-[25rem]' placeholder='Search by patient name'  value={searching}  onChange={(e)=>{setSearching(e.target.value); setTog(true) ; setDisplay(false)}}/>
                                <span className='absolute top-1.5 p-1  px-3 right-0'><IoIosSearch className='text-xl' /></span>
                                {
                                    searching.length > 0 && tog &&
                                     <div className='w-full shadow-xl'>
                                        <ul className='p-1 cursor-pointer' onClick={(e)=>{setSearching(e.target.innerText); setTog(false); setDisplay(true)}}>
                                            {
                                              res =  patient?.filter((itms)=> itms.name.toLowerCase().includes(searching.toLowerCase())).map((itm)=>(  
                                                    <li className='text-lg font-extralight'>{itm.name}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                }
                                {
                                     res.length === 0 && searching.length > 0 && tog && <div className='w-full shadow-lg font-thin'>Not Found</div>
                                }
                            </div> 
                            {
                                   display &&
                                 <div className='w-full'>
                                 <div className='w-full flex gap-2 flex-col lg:flex-row lg:justify-evenly p-4'>
                                     {
                                     patient?.filter((it)=>it.name === searching.toLowerCase()).map((itm)=>(
                                         <div className={more ? 'w-[15rem] shadow-md p-4 flex flex-col items-start gap-2' : 'w-[15rem] h-[15rem] shadow-md p-4 flex flex-col items-start gap-2'}>
                                         <div>
                                            <h4 className=''><FaUserCircle className='w-10 h-10' /></h4>
                                            <h4 className='text-md font-semibold'>PatientName:<span className=' font-thin'>{itm.name}</span> </h4>
                                         </div> 
                                         <div className='w-full flex justify-between'>
                                           <h4 className='text-sm font-light'>pid:{itm.patientid}</h4>
                                           <h4 className='text-sm font-light'>OPid:{itm.opid}</h4>
                                         </div> 
                                         <h4 className='text-md'>Gender:<span className='font-light'>{itm.gender}</span></h4> 
                                         <h4 className='text-md'>Number:<span className='font-light'>{itm.mobile}</span></h4>
                                         <h4 className='text-md'>age:<span className='font-light'>{itm.age}</span></h4>
                                         <button className='text-blue-500 text-sm font-semibold' onClick={()=> setMore(!more)}>{ more ?'...less' : '...more'}</button> 
                                         {
                                            more && 
                                            <div className='flex flex-col gap-1'>
                                                <div>
                                                    <h4 className='text-md font-semibold'>Last Consultation</h4>
                                                    <span className='font-light'>{itm.lastcons.length > 0 ? itm.lastcons[itm.lastcons.length-1] : "No data"}</span>
                                                </div>
                                                <div>
                                                    <h4 className='text-md font-semibold'>Consultant</h4>
                                                    <span className='font-light'>{
                                                     doctor.filter((i)=> i.doctorid === itm.doctorsid).map(({ name })=>(
                                                         <span>{ name }</span>
                                                     ))
                                                     
                                                    }</span>
                                                </div>
                                            </div>
                                         }                                    
                                    </div>
                                        ))  
                                     }
 
                                     {
                                         doctor?.filter((i)=>(i.doctorid === id)).map((itm)=>(
                                             <div className='w-[18rem] shadow-md flex flex-col gap-3 rounded-md p-3'>
                                             <div>
                                                <h4 className='text-lg font-semibold'>{itm.name}</h4>
                                                <h5 className='text-md font-thin'>{itm.specialist}</h5>
                                                <h6 className='font-mono'>{itm.doctorid}</h6>
                                             </div>
                                             <div className='flex justify-around border-t-2 border-b-2 p-2'>
                                                <div className='flex items-center gap-2'>
                                                    <h4 className='w-8 h-8 flex justify-center items-center text-xl bg-blue-300 text-blue-500 rounded-full'><GiDuration /> </h4>
                                                    <div>
                                                        <h4 className='text-xs font-semibold'>Duration</h4>
                                                        <h6 className='text-xs font-light'>{itm.duration}</h6>
                                                    </div>
                                                </div>
                                                <div className='flex  items-center gap-2'>
                                                    <h4 className='w-8 h-8 flex justify-center items-center text-xl bg-blue-300 text-blue-500 rounded-full'><HiOutlineCurrencyRupee /></h4>
                                                    <div>
                                                        <h4 className='text-xs font-semibold'>Fee</h4>
                                                        <h6 className='text-xs font-thin'>{itm.fee}</h6>
                                                    </div>
                                                </div>
                                             </div>
                                             <div className='flex  items-center gap-2'>
                                                    <h4 className='w-8 h-8 flex justify-center items-center text-xl bg-blue-300 text-blue-500 rounded-full'>< FcGraduationCap/></h4>
                                                    <div>
                                                        <h4 className='text-xs font-semibold'>Education</h4>
                                                        <h6 className='text-xs font-thin'>{itm.education}</h6>
                                                    </div>
                                            </div>
                                            <div className='flex  items-center gap-2'>
                                                    <h4 className='w-8 h-8 flex justify-center items-center text-xl bg-blue-300 text-blue-500 rounded-full'>< CiLocationOn  /></h4>
                                                    <div>
                                                        <h4 className='text-xs font-semibold'>Location</h4>
                                                        <h6 className='text-xs font-thin'>{itm.location}</h6>
                                                    </div>
                                            </div>
                                            <div className='flex  items-center gap-2'>
                                                    <h4 className='w-12 h-8 flex justify-center items-center text-xl bg-blue-300 text-blue-500 rounded-full'><FcAbout /></h4>
                                                    <div>
                                                        <h4 className='text-xs font-semibold'>About</h4>
                                                        <h6 className='text-xs font-thin'>{itm.about}</h6>
                                                    </div>
                                            </div>
                                            <h6 className='text-xs bg-green-400 text-white p-0.5 rounded-full text-center font-semibold'>Available All Slots 
                                            </h6>
                                          </div>
                                         
                                         ))
                                     }
                                 </div>
                             
                             </div>
                            }

                            {
                                 searching.length === 0 &&
                                 <div className='w-full min-h-[20rem] flex items-center justify-center text-[2.5rem] font-light opacity-60'> Search by using searchbar </div>
                            }
                        </div>

                    }
                    {
                        selected === "Appointment" &&

                        <Appointment />
                    }

                 </div>
            </div>
        </div>
  )
}

export default RightView