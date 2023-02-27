import React from 'react'

function Header() {
  return (
    <div className='px-[50px] z-10 flex justify-between items-center w-[100%]  fixed top-0'>
        <a className='flex justify-center items-center h-[40px]' href="#">
          <img src="/logo.svg" alt="" />
        </a>
        <ul className='hidden lg:flex gap-4 '>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2  '>Model S</li>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2  '>Model 3</li>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2  '>Model X</li>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2 ' > Model Y</li>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2  '> Solar Roof </li>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2  '>Solar Panels</li>
        </ul>

        <ul className='flex gap-4'>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2  '>Shop</li>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2  '>Account</li>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2  '>Menu</li>
          
        </ul>
    </div>
  )
}

export default Header