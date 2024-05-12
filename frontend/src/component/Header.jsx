import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext';

export const Header = () => {

  const {setUserInfo,userInfo} = useContext(UserContext);

  useEffect(() => {

    fetch('http://localhost:4000/profile', {

      credentials: 'include',

    }).then(response => {

      response.json().then(userInfo => {
        setUserInfo(userInfo);

      });
    });
  }, []);

  function logout() {
    
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header className='flex justify-between items-center px-6 py-4 bg-soft-white'>
      <Link to="/" className='logo font-bold text-2xl text-chery-red'>MyBlog</Link>
      <nav className='flex space-x-4 text-lg'>
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
