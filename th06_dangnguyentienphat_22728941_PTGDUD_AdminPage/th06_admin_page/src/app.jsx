import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {

  return (
    <>
      <div className="container grid grid-cols-4 grid-rows-3 gap-4 border p-4">

        <div className="side_bar col-span-1 row-span-3 border p-4">
          <h2>Side Bar</h2>
        </div>

        <div className="header col-span-3 row-span-1">
          <div className="dash_board border p-4">
            <h2>Dashboard</h2>
          </div>
          <div className="over_view grid grid-cols-3 gap-4 p-4">
            <div className="item col-span-1 row-span-1 border p-4">
              <h3>Item 1</h3>
            </div>
            <div className="item col-span-1 row-span-1 border p-4">
              <h3>Item 2</h3>
            </div>
            <div className="item col-span-1 row-span-1 border p-4">
              <h3>Item 3</h3>
            </div>
          </div>
        </div>

        <div className="detail col-span-3 row-span-2 border p-4">
          <table className='table-auto border-collapse w-full'>
            <thead>
              <tr>
                <th className="border border-gray-300 px-5 py-2">State</th>
                <th className="border border-gray-300 px-10 py-2">Custom name</th>
                <th className="border border-gray-300 px-10 py-2">Company</th>
                <th className="border border-gray-300 px-10 py-2">Order value</th>
                <th className="border border-gray-300 px-10 py-2">Order date</th>
                <th className="border border-gray-300 px-10 py-2">Status</th>
                <th className="border border-gray-300 px-10 py-2">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-5 py-2">✔</td>
                <td className="border border-gray-300 px-10 py-2">John Doe</td>
                <td className="border border-gray-300 px-10 py-2">Company X</td>
                <td className="border border-gray-300 px-10 py-2">$100</td>
                <td className="border border-gray-300 px-10 py-2">2025-04-02</td>
                <td className="border border-gray-300 px-10 py-2">Active</td>
                <td className="border border-gray-300 px-10 py-2">Edit</td>
              </tr>
              {/* Thêm các hàng khác nếu cần */}
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}
