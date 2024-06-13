import React, { useState } from 'react'

export const RegisterPage = () => {
  const [username, setUsername] =  useState('');
  const [password, setPassword] =  useState('');
  
  async function register(ev){
    ev.preventDefault();
    const response =  await fetch('https://blogonomy.onrender.com/register', {
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
    <main className="flex flex-col items-center justify-center h-96  w-96 gap-y-6 p-4">
      <form
        onSubmit={register}
        className="bg-soft-white p-10 sm:p-12 rounded-md shadow-lg w-full sm:w-96 h-full space-y-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-deep-burgundy mb-4 text-center">
          Registration Form
        </h1>
    
        <div className="flex flex-col w-full">
          <label htmlFor="username" className="text-base text-neutral-gray mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            className="bg-soft-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
          />
        </div>
    
        <div className="flex flex-col w-full">
          <label htmlFor="password" className="text-base text-neutral-gray mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="bg-soft-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
          />
        </div>
    
        {/* You might want to add more fields here, like email, confirm password, etc. */}
    
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-coral text-soft-white py-2 px-8 rounded-md hover:bg-coral-light transition-colors duration-300 text-base w-full"
          >
            Register
          </button>
        </div>
      </form>
    </main>

  )
}
