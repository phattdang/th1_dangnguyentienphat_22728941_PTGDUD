import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BaiTap2 from './components/BaiTap2'
import BaiTap1 from './components/BaiTap1'
import Header from './components/BaiTap1/Header'
import Footer from './components/BaiTap1/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BaiTap1 /> */}
      {/* <BaiTap2 /> */}
      <div className="app p-10">
        <Header />
        <div className="container">
          <div className="leftContent">
            <div className="filter">

            </div>
            <div className="time">

            </div>
            <div className="rating">

            </div>
            <div className="apply">

            </div>
          </div>
          <div className="rightContent">
            <div className="notification">

            </div>
            <div className="image">

            </div>
            <div className="category">

            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
