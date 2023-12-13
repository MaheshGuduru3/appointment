import { createContext, useState }  from 'react'


export const AppProvide = createContext()


const ContextApi = (props) => {

    
    const doctorArr = [
          
        {
           doctorid : 1,
           name : "Dr.Mahesh G",
           specialist : "Psychiatrist",
           duration : "15mins",
           fee : "Rs.1000",
           education : "Psychiatric medication,MBBS",
           location:"Banjara Hills, Hyderabad",
           about : "Dr. Mahesh G is psychiatrist specialist at Asha Hospital in  hyderabad.",
           timeslots : ["10:30AM" ,"11:30Am", "12:30PM","02:30PM","03:30PM", "04:30PM","05:30PM"]
        },
        {
            doctorid : 2,
            name : "Dr.Mani H",
            specialist :"Dermothology",
            duration : "15mins",
            fee : "Rs.1000",
            education : "Psychiatric medication,MBBS",
            location:"Banjara Hills, Hyderabad",
            about : "Dr. Mani H is psychiatrist specialist at Asha Hospital in  hyderabad.",
            timeslots : ["10:30AM" ,"11:30Am", "12:30PM","02:30PM","03:30PM", "04:30PM","05:30PM"]
        },
        {
        doctorid : 3,
        name : "Dr. Chandu G",
        specialist : "Neurology",
        duration : "15mins",
        fee : "Rs.2000",
        education : "Neurology medication,MBBS",
        location:"Banjara Hills, Hyderabad",
        about : "Dr. chandu G is neurology specialist at Asha Hospital in  hyderabad.",
        timeslots : ["10:30AM" ,"11:30Am", "12:30PM","02:30PM","03:30PM", "04:30PM","05:30PM"]
    }
    
    
]




const [ doctor , setDoctor ] = useState(doctorArr)
const [ patient , setPatient] = useState([
    {
        patientid : 1,
        opid : 1254,
        name : "patient1",
        gender : "Male",
        age :'20',
        mobile : 123478591,
        lastcons : ["05-12-2023,12:30PM"],
        doctorsid : 1,
    },
    {
        patientid : 2,
        opid:147,
        name : "patient2",
      gender : "Male",
      age :'20',
      mobile : 123458591,
      lastcons : ["02-12-2023,04:30PM"],
      doctorsid : 2, 
    }
])
const [ selected , setSelected] = useState('Appointment')
const [menu ,setMenu] = useState(false)
return (
    <AppProvide.Provider  value={ { patient ,menu , setMenu,  doctor , selected , setPatient, setDoctor, setSelected} } >
        { props.children }
    </AppProvide.Provider>
  )
}

export default ContextApi