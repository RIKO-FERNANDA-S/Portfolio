"use client"
import React from 'react'
import 'boxicons'
import Image from 'next/image'
import imgMenu from '@/public/image/navbar/menu.png'

function NavMobile() {
  return (
    <main className='flex lg:hidden w-full absolute m-4'>
        <div className="drawer ">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary text-white"><Image src={imgMenu}/></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
    </main>
  )
}

export default NavMobile