import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4">
        <div className="text-2xl font-bold mb-6">Logo</div>
        <nav className="space-y-4">
          <button className="text-left w-full font-semibold text-pink-600">Dashboard</button>
          <button className="text-left w-full text-gray-700">Projects</button>
          <button className="text-left w-full text-gray-700">Teams</button>
          <button className="text-left w-full text-gray-700">Analytics</button>
          <button className="text-left w-full text-gray-700">Messages</button>
          <button className="text-left w-full text-gray-700">Integrations</button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-pink-600">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-1"
            />
            <div className="w-8 h-8 bg-gray-300 rounded-full" /> {/* Avatar */}
          </div>
        </div>

        {/* Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow text-center">Overview 1</div>
          <div className="bg-white p-4 rounded shadow text-center">Overview 2</div>
          <div className="bg-white p-4 rounded shadow text-center">Overview 3</div>
        </section>

        {/* Detailed Report Section */}
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Detailed Report</h2>
          <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">
            Table Placeholder
          </div>
        </section>
      </main>
    </div>
  );
}

export default App
