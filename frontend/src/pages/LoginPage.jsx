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
    <main className="flex flex-col items-center justify-center h-full gap-y-6 p-4">
      <form
        onSubmit={login}
        className="bg-soft-white p-10 md:p-12 rounded-md shadow-lg w-full md:w-96 space-y-6" // Increased padding, larger shadow, fixed width on medium screens
      >
        <h1 className="text-3xl md:text-4xl font-bold text-deep-burgundy mb-4 text-center">
          {/* Centered title, increased font size on medium screens */}
          Login Form
        </h1>

        <div className="flex flex-col w-full">
          <label htmlFor="username" className="text-base text-neutral-gray mb-2">
            {/* Increased label font size, added margin */}
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            className="bg-soft-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent" // Increased padding
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="password" className="text-base text-neutral-gray mb-2">
            {/* Increased label font size, added margin */}
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="bg-soft-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent" // Increased padding
          />
        </div>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <div className="flex justify-center"> {/* Removed unnecessary padding */}
          <button
            type="submit"
            className="bg-coral text-soft-white py-2 px-8 rounded-md hover:bg-coral-light transition-colors duration-300 text-base w-full" // Increased button size, full width
          >
            Login
          </button>
        </div>
      </form>
    </main>
    // test
  )
}
