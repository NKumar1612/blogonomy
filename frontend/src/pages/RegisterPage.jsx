import React, { useState } from 'react'

export const RegisterPage = () => {
  const [username, setUsername] =  useState('');
  const [password, setPassword] =  useState('');
  
  async function register(ev){
    ev.preventDefault();
    const response =  await fetch('http://localhost:4000/register', {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {'Content-Type': 'application/json'}
    });
    
    if (response.status === 200){
      alert('registration success.')
    }
    else {
      alert('registration failed, please try again.')
    }

  }

  return (
  <form onSubmit={register} className='grid grid-cols-1 gap-y-6 h-full p-4'>
      <h1 className='text-3xl font-bold py-5'>Registration Form</h1>

      <input 
          type='text' 
          placeholder='Username' 
          value={username} 
          onChange={ev => setUsername(ev.target.value)} 
          className='bg-soft-white placeholder-neutral-gray placeholder-red-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent'
      />

      <input 
          type='password' 
          placeholder='Password'
          value={password} 
          onChange={ev => setPassword(ev.target.value)}  
          className='bg-soft-white placeholder-neutral-gray placeholder-red-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent'
      />

      <div className="flex justify-center py-4">
          <button className='bg-coral text-soft-white p-2 rounded-md w-28 hover:bg-coral-light transition-colors duration-300'>Register</button>
      </div>
  </form>

  )
}
