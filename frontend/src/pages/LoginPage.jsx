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
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <form
        onSubmit={login}
        className="bg-soft-white p-12 sm:p-16 rounded-lg shadow-xl w-full max-w-lg space-y-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-deep-burgundy mb-9 text-center">
          Login Form
        </h1>

        <div className="flex flex-col w-full">
          <label htmlFor="username" className="text-base md:text-lg text-neutral-gray mb-3">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            className="bg-soft-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="password" className="text-base md:text-lg text-neutral-gray mb-3">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="bg-soft-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
          />
        </div>

        {errorMessage && (
          <div className="text-red-500 text-center mt-4">
            <p>{errorMessage}</p>
          </div>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-coral text-soft-white py-3 px-10 rounded-lg hover:bg-coral-light transition-colors duration-300 text-base w-full"
          >
            Login
          </button>
        </div>
      </form>
    </main>


  );
};
