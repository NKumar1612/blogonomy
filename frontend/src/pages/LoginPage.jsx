import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    setErrorMessage(null); 

    const response = await fetch("https://blogonomy.onrender.com/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      const userInfo = await response.json();
      setUserInfo(userInfo);
      setRedirect(true);
    } else {
      const errorData = await response.json(); 
      setErrorMessage(errorData.message || "Login failed. Please check your credentials.");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen  w-screen gap-y-6 p-4">
      <form
        onSubmit={login}
        className="bg-soft-white p-10 sm:p-12 rounded-md shadow-lg min-h-screen  w-screen sm:w-96 space-y-6" 
      >
        <h1 className="text-3xl md:text-4xl font-bold text-deep-burgundy mb-4 text-center">
          Login Form
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

        {errorMessage && (
          <div className="text-red-500 text-center mt-2">
            <p>{errorMessage}</p>
          </div>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-coral text-soft-white py-2 px-8 rounded-md hover:bg-coral-light transition-colors duration-300 text-base w-full"
          >
            Login
          </button>
        </div>
      </form>
    </main>
  );
};
