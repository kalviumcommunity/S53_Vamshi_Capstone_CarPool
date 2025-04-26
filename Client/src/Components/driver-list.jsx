import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const DriverList = () => {
  const [drivers, setDrivers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/getdrivers")
        console.log(response.data.drivers)
        setDrivers(response.data.drivers)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDrivers()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">Error: {error}</div>
  }

  if (drivers.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-lg font-medium text-gray-700">No drivers found</h3>
        <Link
          to="/drivers/add"
          className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Add New Driver
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-600">All Drivers</h2>
        <Link
          to="/drivers/add"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Add New Driver
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Driver
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Car
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Route
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Price
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Seats
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Departure
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {drivers.map((driver) => (
              <tr key={driver._id} className="hover:bg-gray-50">
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {driver.driver_image ? (
                      <img
                        src={driver.driver_image || "/placeholder.svg"}
                        alt={driver.driver_name}
                        className="h-10 w-10 rounded-full object-cover mr-3"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-medium">{driver.driver_name.charAt(0).toUpperCase()}</span>
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-gray-900">{driver.driver_name}</div>
                      <div className="text-gray-500 text-sm">ID: {driver.driver_id}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="text-gray-900">{driver.car_name}</div>
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="text-gray-900">{driver.from_location}</div>
                  <div className="text-gray-500 text-sm">to {driver.to_location}</div>
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="text-gray-900 font-medium">${driver.price.toFixed(2)}</div>
                </td>
                <td className="py-4 px-4 whitespace-nowrap text-center">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                    {driver.no_of_seats_available}
                  </span>
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="text-gray-900">{new Date(driver.departure_time).toLocaleDateString()}</div>
                  <div className="text-gray-500 text-sm">
                    {new Date(driver.departure_time).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </td>
                <td className="py-4 px-4 whitespace-nowrap text-sm">
                  <div className="flex space-x-2">
                    <Link to={`/drivers/edit/${driver._id}`} className="text-blue-600 hover:text-blue-900">
                      Edit
                    </Link>
                    <Link to={`/drivers/${driver._id}`} className="text-blue-600 hover:text-blue-900">
                      View
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DriverList
