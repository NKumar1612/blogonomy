import React from 'react'
import { Header } from './component/Header'
import { Outlet } from 'react-router-dom'
import './global.css'

export const Layout = () => {
  return (
    <div className='text-deep-burgundy bg-bubblegum-pink min-h-screen font-lato'>
      <Header />
      <main className=" max-w-[1000px]">
        <Outlet/>
      </main>
    </div>
  )
}
