import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [showToggle,setShowToggle]=useState(false);

  function changToggel(){
    if(showToggle){
      setShowToggle(false);
    }else{
      setShowToggle(true);
    }
  }


  return (
    <div className='px-[50px] z-10 flex justify-between items-center w-[100%]  fixed top-0'>
        <p className='flex justify-center items-center h-[40px]'>
          <Link to="/"><img src="/logo.svg" alt="" /></Link>
          
        </p>
        <ul className='hidden lg:flex gap-4 '>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2  '><Link to="/Model S">Model S</Link></li>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2  '><Link to="/Model 3">Model 3</Link></li>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2  '><Link to="/Model X">Model X</Link></li>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2 ' ><Link to="/Model Y">Model Y</Link> </li>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2  '><Link to="/Solar Roof">Solar Roof</Link>  </li>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2  '><Link to="/Solar Panels">Solar Panels</Link></li>
        </ul>

        <ul className='flex gap-4'>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2  '> <Link to="/shop">Shop</Link> </li>
          <li className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2  '><Link to="/account">Account</Link></li>
          <li onClick={changToggel} className='hover:backdrop-opacity-10 hover:backdrop-invert rounded cursor-pointer p-2  '>Menu</li>
          
        </ul>
        {/* toggle Menu */}
        {showToggle && 
        <div onClick={changToggel} className='w-[100%] h-full fixed top-0 left-0 
        transition delay-150 ease-in-out
        flex'>
          <div className='w-[75%] backdrop-blur-sm '>1</div>
          <div className='bg-white w-[25%] min-w-[250px]'>

            <ul className='flex flex-col gap-2 mx-10'>
              <li onClick={changToggel}  className='flex justify-end items-end mt-12 cursor-pointer'>
              <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
              </li>

              <li className='py-2 hover:backdrop-opacity-5 hover:backdrop-invert rounded cursor-pointer'>Existing Inventory</li>
              <li className='py-2 hover:backdrop-opacity-5 hover:backdrop-invert rounded cursor-pointer'>Used Inventory</li>
              <li className='py-2 hover:backdrop-opacity-5 hover:backdrop-invert rounded cursor-pointer'>Trade-in</li>
              <li className='py-2 hover:backdrop-opacity-5 hover:backdrop-invert rounded cursor-pointer'>Demo Drive</li>
              <li className='py-2 hover:backdrop-opacity-5 hover:backdrop-invert rounded cursor-pointer'>Insurance</li>
              <li className='py-2 hover:backdrop-opacity-5 hover:backdrop-invert rounded cursor-pointer'>Cybertruck</li>
              <li className='py-2 hover:backdrop-opacity-5 hover:backdrop-invert rounded cursor-pointer'>Roadster</li>
              <li className='py-2 hover:backdrop-opacity-5 hover:backdrop-invert rounded cursor-pointer'>Semi</li>
              <li className='py-2 hover:backdrop-opacity-5 hover:backdrop-invert rounded cursor-pointer'>Charging</li>
            </ul>
          </div>
        </div>
        }
        
        
        

    </div>
  )
}

export default Header

// Existing Inventory

// 

// 

// 

// 

// 

// 

// 

// 

// Powerwall

// Commercial Energy

// Utilities

// Find Us
// 