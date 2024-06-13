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
    <main className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6">
      <form
        onSubmit={register}
        className="bg-soft-white p-8 sm:p-12 md:p-16 rounded-lg shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg space-y-6 sm:space-y-8"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deep-burgundy mb-4 sm:mb-6 text-center">
          Registration Form
        </h1>

        <div className="flex flex-col w-full">
          <label htmlFor="username" className="text-base sm:text-lg text-neutral-gray mb-2 sm:mb-3">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            className="bg-soft-white p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="password" className="text-base sm:text-lg text-neutral-gray mb-2 sm:mb-3">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="bg-soft-white p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
          />
        </div>

        {/* Add more fields if necessary */}

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-coral text-soft-white py-2 sm:py-3 px-8 sm:px-10 rounded-lg hover:bg-coral-light transition-colors duration-300 text-base w-full"
          >
            Register
          </button>
        </div>
      </form>
    </main>


  )
}
