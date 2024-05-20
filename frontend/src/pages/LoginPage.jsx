import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {UserContext} from "../UserContext";


export const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  async function login(ev) {

    ev.preventDefault();

    const response = await fetch('https://blogonomy.onrender.com/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });

    if (response.ok) {
      
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      });

    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <form onSubmit={login} className='flex flex-col gap-y-6 h-full p-4'>
      <h1 className='text-3xl font-bold py-5'>Login Form</h1>

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
          <button className='bg-coral text-soft-white p-2 rounded-md w-28 hover:bg-coral-light transition-colors duration-300'>Login</button>
      </div>
  </form>
  )
}
