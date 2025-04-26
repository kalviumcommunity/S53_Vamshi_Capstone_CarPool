import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import DriversListPage from "./Pages/drivers-list"
import AddDriverPage from "./Pages/add-driver"
import EditDriverPage from "./Pages/edit-driver"
import DriverDetailsPage from "./Pages/driver-details"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="py-6">
          <Routes>
            <Route path="/" element={<DriversListPage />} />
            <Route path="/drivers" element={<DriversListPage />} />
            <Route path="/drivers/add" element={<AddDriverPage />} />
            <Route path="/drivers/edit/:id" element={<EditDriverPage />} />
            <Route path="/drivers/:id" element={<DriverDetailsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
