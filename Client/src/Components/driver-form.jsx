"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const DriverForm = ({ initialData, isEditing = false , id}) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState(
    initialData || {
      driver_id: "",
      driver_name: "",
      driver_image: "",
      car_name: "",
      price: "",
      from_location: "",
      to_location: "",
      no_of_seats_available: "",
      departure_time: "",
    },
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === "price" || name === "no_of_seats_available" ? Number.parseFloat(value) : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      if(!isEditing){
        const response = await axios.post("http://localhost:3001/drivers",formData)
        console.log(response.data)
        alert("Driver Details Added")
      navigate("/drivers")
      }
      else{
        const response = await axios.put(`http://localhost:3001/editdrivers/${id}`,formData) 
        console.log(response.data)
        navigate("/drivers")
      }
        
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">{isEditing ? "Edit Driver" : "Add New Driver"}</h2>

      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Driver ID</label>
            <input
              type="text"
              name="driver_id"
              value={formData.driver_id}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isEditing} // Don't allow editing driver_id
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Driver Name</label>
            <input
              type="text"
              name="driver_name"
              value={formData.driver_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              minLength={3}
              maxLength={20}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Driver Image URL</label>
            <input
              type="url"
              name="driver_image"
              value={formData.driver_image}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Car Name</label>
            <input
              type="text"
              name="car_name"
              value={formData.car_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              min="0"
              step="0.01"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">From Location</label>
            <input
              type="text"
              name="from_location"
              value={formData.from_location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">To Location</label>
            <input
              type="text"
              name="to_location"
              value={formData.to_location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Available Seats</label>
            <input
              type="number"
              name="no_of_seats_available"
              value={formData.no_of_seats_available}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              min="0"
              step="1"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Departure Time</label>
            <input
              type="datetime-local"
              name="departure_time"
              value={formData.departure_time ? new Date(formData.departure_time).toISOString().slice(0, 16) : ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            onClick={() => navigate("/drivers")}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300"
          >
            {loading ? "Saving..." : isEditing ? "Update Driver" : "Add Driver"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default DriverForm
