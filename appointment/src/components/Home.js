import React from 'react'
import LeftView from './pages/LeftView'
import RightView from './pages/RightView'

const Home = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[96rem] m-auto min-h-[92vh] flex bg-emerald-300 bg-opacity-40'>
           <LeftView />
           <RightView />
        </div>
    </div>
  )
}

export default Home