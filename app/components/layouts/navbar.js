"use client"
import React from 'react'
import 'boxicons';

function Navbar() {
  return (
    <nav className='w-full h-max py-6 px-8 fixed z-10 backdrop-blur-sm justify-around'>
        <div className='w-full flex gap-9 text-white text-2xl font-bold '>
            <h1>Home</h1>
            <h1>About Me</h1>
            <h1>Projects</h1>
            <h1>Certificates</h1>
        </div>
        <div>
            <div className='w-max h-max rounded-full flex bg-slate-400'>
            <i className='bx bx-globe text-cyan-50 '></i>
            </div>
            <div className='w-max h-max rounded-full bg-slate-400'>
            <i className='bx bx-sun text-cyan-50 '></i>
            </div>
            
            
        </div>
    </nav>
  )
}

export default Navbar