import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';

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

const tableDataInitial = [
  {
    id: 1,
    name: "Elizabeth Lee",
    company: "AvatarSystems",
    orderValue: "$539",
    orderDate: "10/10/2023",
    status: "New"
  },
  {
    id: 2,
    name: "Carlos Garcia",
    company: "SnoozeShift",
    orderValue: "$747",
    orderDate: "24/07/2023",
    status: "New"
  },
  {
    id: 3,
    name: "Elizabeth Bailey",
    company: "Prime Time Telecom",
    orderValue: "$564",
    orderDate: "08/08/2023",
    status: "In-progress"
  },
  {
    id: 4,
    name: "Ryan Brown",
    company: "OmniTech Corporation",
    orderValue: "$541",
    orderDate: "31/08/2023",
    status: "In-progress"
  },
  {
    id: 5,
    name: "Ryan Young",
    company: "DataStream Inc.",
    orderValue: "$769",
    orderDate: "01/05/2023",
    status: "Completed"
  },
  {
    id: 6,
    name: "Hailey Adams",
    company: "FlowRush",
    orderValue: "$922",
    orderDate: "10/06/2023",
    status: "Completed"
  }
];

function DashboardPage() {
  const [tableData, setTableData] = useState(tableDataInitial);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: ""
  });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  const openModal = (row) => {
    setCurrentRow(row);
    setFormData({
      name: row.name,
      company: row.company,
      orderValue: row.orderValue,
      orderDate: row.orderDate,
      status: row.status
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentRow(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedTableData = tableData.map((row) =>
      row.id === currentRow.id ? { ...row, ...formData } : row
    );
    setTableData(updatedTableData);
    closeModal();
  };

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="relative">
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-pink-600">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span role="img" aria-label="notification">🔔</span>
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {overviewData.map((item, index) => (
            <div key={index} className={`p-6 rounded-lg shadow ${item.name === "Turnover" ? "bg-pink-50" : "bg-blue-50"}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold text-gray-600 uppercase">{item.name}</h3>
                <img src={item.imgBtn} alt={item.name} className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-800">
                {item.name === "New customer"
                  ? item.value.toLocaleString("en-US")
                  : "$" + item.value.toLocaleString("en-US")}
              </div>
              <div className="text-sm text-green-600 mt-2">
                ↓ {item.rate}% period of change
              </div>
            </div>
          ))}
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Detailed Report</h2>
            <div className="flex space-x-3">
              <button className="text-pink-600 border border-pink-600 rounded-full px-4 py-1.5 text-sm hover:bg-pink-50">
                Import
              </button>
              <button className="text-pink-600 border border-pink-600 rounded-full px-4 py-1.5 text-sm hover:bg-pink-50">
                Export
              </button>
            </div>
          </div>
          <div className="overflow-auto">
            <table className="w-full table-auto text-sm">
              <thead className="bg-gray-100 text-gray-600 uppercase">
                <tr>
                  <th className="text-left px-4 py-3">
                    <input type="checkbox" className="w-4 h-4" />
                  </th>
                  <th className="text-left px-4 py-3">Customer Name</th>
                  <th className="text-left px-4 py-3">Company</th>
                  <th className="text-left px-4 py-3">Order Value</th>
                  <th className="text-left px-4 py-3">Order Date</th>
                  <th className="text-left px-4 py-3">Status</th>
                  <th className="text-left px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((row) => (
                  <tr key={row.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="w-4 h-4" />
                    </td>
                    <td className="px-4 py-3 text-gray-800">{row.name}</td>
                    <td className="px-4 py-3 text-gray-600">{row.company}</td>
                    <td className="px-4 py-3 text-gray-800">{row.orderValue}</td>
                    <td className="px-4 py-3 text-gray-600">{row.orderDate}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        row.status === "New"
                          ? "bg-blue-100 text-blue-700"
                          : row.status === "In-progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => openModal(row)} className="text-gray-500 hover:text-gray-700">✏️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-6">
            <span className="text-sm text-gray-600">{tableData.length} results</span>
            <div className="flex space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-50"
              >
                &lt;
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-1 rounded-full ${
                    currentPage === index + 1
                      ? "bg-pink-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-50"
              >
                &gt;
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Edit Customer</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Customer Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Order Value</label>
                <input
                  type="text"
                  name="orderValue"
                  value={formData.orderValue}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Order Date</label>
                <input
                  type="text"
                  name="orderDate"
                  value={formData.orderDate}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
                >
                  <option value="New">New</option>
                  <option value="In-progress">In-progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Illustration Section */}
      <div className="absolute bottom-6 left-6 w-64 bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-800">V2.0 is available</h3>
            <p className="text-xs text-gray-600">Try now</p>
          </div>
        </div>
      </div>
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
        <aside className="w-16 bg-white shadow-lg p-4 flex flex-col items-center">
          <div className="text-2xl font-bold mb-8 text-pink-600">Logo</div>
          <nav className="space-y-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-center w-10 h-10 bg-pink-100 text-pink-600 font-semibold rounded"
                  : "flex items-center justify-center w-10 h-10 text-gray-700 rounded hover:bg-gray-100"
              }
            >
              <span className="text-lg">📊</span>
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-center w-10 h-10 bg-pink-100 text-pink-600 font-semibold rounded"
                  : "flex items-center justify-center w-10 h-10 text-gray-700 rounded hover:bg-gray-100"
              }
            >
              <span className="text-lg">📂</span>
            </NavLink>
            <NavLink
              to="/teams"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-center w-10 h-10 bg-pink-100 text-pink-600 font-semibold rounded"
                  : "flex items-center justify-center w-10 h-10 text-gray-700 rounded hover:bg-gray-100"
              }
            >
              <span className="text-lg">👥</span>
            </NavLink>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-center w-10 h-10 bg-pink-100 text-pink-600 font-semibold rounded"
                  : "flex items-center justify-center w-10 h-10 text-gray-700 rounded hover:bg-gray-100"
              }
            >
              <span className="text-lg">📈</span>
            </NavLink>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-center w-10 h-10 bg-pink-100 text-pink-600 font-semibold rounded"
                  : "flex items-center justify-center w-10 h-10 text-gray-700 rounded hover:bg-gray-100"
              }
            >
              <span className="text-lg">💬</span>
            </NavLink>
            <NavLink
              to="/integrations"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-center w-10 h-10 bg-pink-100 text-pink-600 font-semibold rounded"
                  : "flex items-center justify-center w-10 h-10 text-gray-700 rounded hover:bg-gray-100"
              }
            >
              <span className="text-lg">🔗</span>
            </NavLink>
          </nav>
        </aside>

        <main className="flex-1 bg-gray-100 p-6 overflow-auto">
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