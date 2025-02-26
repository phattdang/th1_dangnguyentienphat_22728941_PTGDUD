import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BaiTap2 from './components/BaiTap2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BaiTap2 />
    </>
  )
}

export default App
