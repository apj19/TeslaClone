import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Account from './Components/Account'
import CarDetails from './Components/CarDetails'
import Header from './Components/Header'
import Home from './Components/Home'
import Shop from './Components/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-[Rubik] text-[#393c41] min-w-[375px] max-w-[1440px] overflow-x-hidden">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/:id" element={<CarDetails/>} />


      </Routes>
      
      
      
    </div>
  )
}

export default App
