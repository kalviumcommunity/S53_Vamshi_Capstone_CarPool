import DriverList from "../Components/driver-list"

const DriversListPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Drivers</h1>
      <DriverList />
    </div>
  )
}

export default DriversListPage
