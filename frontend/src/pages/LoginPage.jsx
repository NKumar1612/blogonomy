import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {UserContext} from "../UserContext";

// random
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
    // hi
    <main className="flex flex-col items-center justify-center h-full gap-y-6 p-4">
      <form
        onSubmit={login}
        className="bg-soft-white p-8 rounded-md shadow-md w-full md:w-1/2 lg:w-2/3 xl:w-3/4 h-full md:h-1/2 lg:h-2/3 xl:h-3/4 space-y-5"  // Adjusted width classes
      >
        <h1 className="text-3xl font-bold text-deep-burgundy mb-4">Login Form</h1>

      <div className="flex flex-col w-full">
        <label htmlFor="username" className="text-sm text-neutral-gray mb-1"> 
          {/* Reduced margin bottom */}
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          className="bg-soft-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent text-sm" // Added text-sm
        />
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="password" className="text-sm text-neutral-gray mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          className="bg-soft-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent text-sm"
        />
      </div>

      <div className="flex justify-center py-2"> {/* Reduced top padding */}
        <button
          type="submit"
          className="bg-coral text-soft-white p-2 rounded-md w-32 hover:bg-coral-light transition-colors duration-300 text-sm" // Added text-sm
        >
          Login
        </button>
      </div>
    </form>
  </main>
  )
}
