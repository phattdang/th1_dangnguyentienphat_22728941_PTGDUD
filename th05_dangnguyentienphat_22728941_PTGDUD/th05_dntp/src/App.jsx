import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bai1 from './components/bai1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bai1 />
    </>
  )
}

export default App
