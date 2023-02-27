import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-[Rubik] text-[#393c41] min-w-[375px] max-w-[1440px]">
      <Header/>
      <Home/>
      
      
      
    </div>
  )
}

export default App
