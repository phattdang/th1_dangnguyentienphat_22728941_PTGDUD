import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const overviewData = [
    {
      name: "Turnover",
      value: 92.405,
      rate: 5.39,
      imgBtn: "https://i.imgur.com/yzmYQtJ.png"
    },
    {
      name: "Profit",
      value: 32.218,
      rate: 5.39,
      imgBtn: "https://i.imgur.com/phVH2YN.png"
    },
    {
      name: "New customer",
      value: 298,
      rate: 5.84,
      imgBtn: "https://i.imgur.com/0AXDJOn.png"
    }
  ];
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
      <main className="flex-1 bg-gray-50 p-6 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-pink-600">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-1"
            />
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
          </div>
        </div>

        {/* Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {overviewData.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold text-gray-600">{item.name}</h3>
                <img src={item.imgBtn} alt={item.name} className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold">
                {item.name === "New customer"
                  ? item.value.toLocaleString("en-US")
                  : "$" + item.value.toLocaleString("en-US")}
              </div>
              <div className="text-sm text-green-500 mt-1">
                ↑ {item.rate}% period of change
              </div>
            </div>
          ))}
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
