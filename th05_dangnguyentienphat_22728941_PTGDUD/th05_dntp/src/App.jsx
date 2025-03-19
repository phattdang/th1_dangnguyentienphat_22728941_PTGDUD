import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bai1 from './components/bai1'
import Bai2 from './components/bai2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main w-200">
        <Bai1 />
        <Bai2 />
      </div>
    </>
  )
}

export default App
