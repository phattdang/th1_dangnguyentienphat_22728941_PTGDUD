import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

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

const tableData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    project: "Project Alpha",
    status: "Completed",
    amount: "$1,200"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    project: "Project Beta",
    status: "In Progress",
    amount: "$980"
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    project: "Project Gamma",
    status: "Pending",
    amount: "$750"
  }
];

function DashboardPage() {
  return (
    <div>
      <main className="flex-1 bg-gray-50 p-6 overflow-auto">
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

        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Detailed Report</h2>
          <div className="overflow-auto">
            <table className="w-full table-auto text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-2">#</th>
                  <th className="text-left px-4 py-2">Name</th>
                  <th className="text-left px-4 py-2">Email</th>
                  <th className="text-left px-4 py-2">Project</th>
                  <th className="text-left px-4 py-2">Status</th>
                  <th className="text-left px-4 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id} className="border-t">
                    <td className="px-4 py-2">{row.id}</td>
                    <td className="px-4 py-2">{row.name}</td>
                    <td className="px-4 py-2">{row.email}</td>
                    <td className="px-4 py-2">{row.project}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        row.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : row.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

function ProjectsPage() {
  return <div className="text-xl font-semibold p-4">📂 This is Projects Page</div>;
}

function TeamsPage() {
  return <div className="text-xl font-semibold p-4">👥 This is Teams Page</div>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <aside className="w-64 bg-white shadow-lg p-4">
          <div className="text-2xl font-bold mb-6 text-pink-600">Logo</div>
          <nav className="space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2 bg-pink-100 text-pink-600 font-semibold rounded px-3 py-2"
                  : "flex items-center space-x-2 text-gray-700 rounded px-3 py-2 hover:bg-gray-100"
              }
            >
              <span>📊</span>
              <span>Dashboard</span>
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2 bg-pink-100 text-pink-600 font-semibold rounded px-3 py-2"
                  : "flex items-center space-x-2 text-gray-700 rounded px-3 py-2 hover:bg-gray-100"
              }
            >
              <span>📂</span>
              <span>Projects</span>
            </NavLink>
            <NavLink
              to="/teams"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2 bg-pink-100 text-pink-600 font-semibold rounded px-3 py-2"
                  : "flex items-center space-x-2 text-gray-700 rounded px-3 py-2 hover:bg-gray-100"
              }
            >
              <span>👥</span>
              <span>Teams</span>
            </NavLink>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2 bg-pink-100 text-pink-600 font-semibold rounded px-3 py-2"
                  : "flex items-center space-x-2 text-gray-700 rounded px-3 py-2 hover:bg-gray-100"
              }
            >
              <span>📈</span>
              <span>Analytics</span>
            </NavLink>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2 bg-pink-100 text-pink-600 font-semibold rounded px-3 py-2"
                  : "flex items-center space-x-2 text-gray-700 rounded px-3 py-2 hover:bg-gray-100"
              }
            >
              <span>💬</span>
              <span>Messages</span>
            </NavLink>
            <NavLink
              to="/integrations"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2 bg-pink-100 text-pink-600 font-semibold rounded px-3 py-2"
                  : "flex items-center space-x-2 text-gray-700 rounded px-3 py-2 hover:bg-gray-100"
              }
            >
              <span>🔗</span>
              <span>Integrations</span>
            </NavLink>
          </nav>
        </aside>

        <main className="flex-1 bg-gray-50 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/teams" element={<TeamsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;