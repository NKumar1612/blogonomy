import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext';

export const Header = () => {

  const {setUserInfo,userInfo} = useContext(UserContext);

  useEffect(() => {
    fetch('https://blogonomy.onrender.com/profile', {
      credentials: 'include'
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('https://blogonomy.onrender.com/logout', {
      method: 'POST',
      credentials: 'include'
    });
    setUserInfo(null);
  }


  const username = userInfo?.username;

  return (
    <header className='flex justify-between items-center lg:px-6 lg:py-4 sm:px-12 sm:py-10 bg-soft-white'>
      <Link to="/" className='logo lg:text-lg sm:text-3xl font-light text-chery-red'>BLOGONOMY</Link>
      <nav className='flex space-x-4 sm:text-3xl lg:text-lg'>
        {username ? (
          <>
            <Link to='/create' className='text-chery-red hover:underline'>Create New Post</Link>
            <button onClick={logout} className='text-chery-red hover:underline'>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className='text-chery-red hover:underline'>Login</Link>
            <Link to="/register" className='text-chery-red hover:underline'>Register</Link>
          </>
        )}
      </nav>
    </header>
  )
}
