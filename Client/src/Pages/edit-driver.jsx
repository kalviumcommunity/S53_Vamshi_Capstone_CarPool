"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import DriverForm from "../Components/driver-form"

const EditDriverPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [driver, setDriver] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchDriver = async () => {
      try {
        const response = await fetch(`/api/drivers/${id}`)
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch driver details")
        }

        setDriver(data.driver)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDriver()
  }, [id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">Error: {error}</div>
        <button
          onClick={() => navigate("/drivers")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Drivers
        </button>
      </div>
    )
  }

  if (!driver) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-10">
          <h3 className="text-lg font-medium text-gray-700">Driver not found</h3>
          <button
            onClick={() => navigate("/drivers")}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Drivers
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Driver</h1>
      <DriverForm initialData={driver} isEditing={true} />
    </div>
  )
}

export default EditDriverPage
