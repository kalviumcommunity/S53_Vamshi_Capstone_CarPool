import DriverForm from "../Components/driver-form"

const AddDriverPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Driver</h1>
      <DriverForm />
    </div>
  )
}

export default AddDriverPage
