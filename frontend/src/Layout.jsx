import React from 'react'
import { Header } from './component/Header'
import { Outlet } from 'react-router-dom'
import './global.css'

export const Layout = () => {
  return (
    <div className="text-deep-burgundy bg-bubblegum-pink min-h-screen font-lato">
      <Header />
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
