import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">RideShare</span>
            </Link>

            <div className="hidden md:flex ml-10 space-x-8">
              <Link
                to="/drivers"
                className={`px-3 py-2 text-sm font-medium ${
                  isActive("/drivers")
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Drivers
              </Link>
              <Link
                to="/drivers/add"
                className={`px-3 py-2 text-sm font-medium ${
                  isActive("/drivers/add")
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Add Driver
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/drivers/add"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Publish a ride
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/sign-in" className="text-gray-700 hover:text-blue-600">
                Sign in
              </Link>
              <Link
                to="/sign-up"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
