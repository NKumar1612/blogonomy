import React from 'react'
import { Header } from './component/Header'
import { Outlet } from 'react-router-dom'
import './global.css'

export const Layout = () => {
  return (
    <div className="min-h-screen font-lato flex flex-col  bg-bubblegum-pink"> 
      <Header />
      {/* Hero Section (Full Width) */}
      <section className="w-full">
        <Outlet />
      </section>
    </div>
  )
}
