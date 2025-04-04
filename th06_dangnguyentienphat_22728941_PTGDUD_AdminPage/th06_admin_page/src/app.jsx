import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import SideBar from './components/SideBar'
import Overview from './components/Overview'
import DetailReport from './components/DetailReport'

export function App() {

  return (
    <>
      <div className="container grid grid-cols-4 grid-rows-3 gap-4 border p-4">

        <SideBar />

        <Overview />

        <DetailReport />

      </div>
    </>
  )
}
