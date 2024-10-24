"use client"
import React from 'react'
import 'boxicons'
import Image from 'next/image'
import imgMenu from '@/public/image/navbar/menu.png'

function NavMobile() {
  return (
    <main className='flex lg:hidden w-max absolute my-4 ml-5'>
        <div className="drawer drawer-overlay">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button text-white"><Image src={imgMenu} alt='icons' className='w-10 h-auto'/></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><a>Home</a></li>
      <li><a>About Me</a></li>
      <li><a>Project</a></li>
      <li><a>Certificates</a></li>
    </ul>
  </div>
</div>
    </main>
  )
}

export default NavMobile