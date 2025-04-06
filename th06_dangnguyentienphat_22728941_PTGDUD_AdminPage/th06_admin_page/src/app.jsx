import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import SideBar from './components/SideBar'
import Overview from './components/Overview'
import DetailReport from './components/DetailReport'
import { Router, Routes, Route } from 'react-router'
import { Analytic, Integration, Message, Project, Team } from './components/MenuItem'

export function App() {

  return (
    <>
      <div className="container grid grid-cols-4 grid-rows-3 border border-gray-300">
        <SideBar />
        <Overview />
        <Routes>
          <Route path="/" element={<DetailReport />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/analytics" element={<Analytic />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/integrations" element={<Integration />} />
        </Routes>
      </div>
    </>
  )
}
