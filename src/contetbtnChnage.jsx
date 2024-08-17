import React, { useState } from 'react'

const contentbtnChange = () => {
  const [val,setVal]=useState(false);
  return (
    <div className='px-4 py-6'>
      <h1>{
        val === false ? "andar aao" : "bhar jao"
        }

      </h1>
      <button onClick={()=>setVal(()=>!val)}
      className='bg-sky-400 rounded-md text-white px-2 py-2'>change it</button>
    </div>
  )
}

export default contentbtnChange