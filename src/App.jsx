import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const App = () => {
  const [val,setVal]=useState(false)
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
      <div className='relative w-60 h-32 bg-zinc-500 rounded-md flex overflow-hidden '>
    
    <img className={`shrink-0 transition-transform duration-700 ease-in-out ${val ===false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1723643136002-d49a1d7309d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" alt="" />
 <img className={`shrink-0 transition-transform duration-700 ease-in-out ${val ===false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1723441857662-d465a52e78d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
        <span onClick={()=>setVal(()=>!val)} className='absolute w-8 h-8 bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center justify-center rounded-full bg-[#dadada8b]' >
        <FaArrowRightLong size={".7em"}/>
        </span>
      </div>

    </div>
  )
}

export default App