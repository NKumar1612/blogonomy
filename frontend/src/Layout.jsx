import React from 'react'
import { Header } from './component/Header'
import { Outlet } from 'react-router-dom'
import './global.css'

export const Layout = () => {
  return (
    <div className='text-deep-burgundy bg-bubblegum-pink min-h-screen font-sans'>
      <Header />
      <main className="flex-grow px-10 py-7 max-w-[1000px] mx-auto">
        <Outlet/>
      </main>
    </div>
  )
}
