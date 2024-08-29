import React from 'react'
//React hook form
import {useForm} from 'react-hook-form'
function App() {
 const {register, handleSubmit}= useForm();
  return (
  <form action="" onSubmit={handleSubmit(data => console.log(data))} >
    <input {...register('name')} type="text" placeholder='name' />
    <input {...register('email')} type="text" placeholder='email' />
    <input type="submit" />
  </form>
  )
}

export default App