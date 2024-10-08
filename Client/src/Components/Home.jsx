import React from "react";
import { Button } from "./Buttons/Button";
import { Input } from "./Buttons/Input";
import { CalendarIcon, MapPinIcon, UserIcon, MenuIcon } from "lucide-react";

export default function Component() {
  return (
    <div className="bg-[url('./assets/bg.png')] h-screen bg-cover bg-center">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              className="h-8 w-8 text-blue-600"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <path d="M9 17h6" />
              <circle cx="17" cy="17" r="2" />
            </svg>
            <span className="text-xl font-bold text-gray-900">CAR POOL</span>
          </div>
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <a
              className="text-sm lg:text-base text-gray-600 hover:text-gray-900"
              href="#"
            >
              Publish a ride
            </a>
            <a
              className="text-sm lg:text-base text-gray-600 hover:text-gray-900"
              href="#"
            >
              About us
            </a>
            <a
              className="text-sm lg:text-base text-gray-600 hover:text-gray-900"
              href="#"
            >
              How it works
            </a>
            <a
              className="text-sm lg:text-base text-gray-600 hover:text-gray-900"
              href="#"
            >
              Why to choose us
            </a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-sm lg:text-base">
              Sign in
            </Button>
            <Button size="sm" className="text-sm lg:text-base">
              Sign up
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Find, book and
              <br />
              travel <span className="text-blue-600 underline">Easily</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Get a car wherever and whenever you need, from your phone.
            </p>
            <p className="text-lg sm:text-xl text-gray-800 font-semibold mb-6 sm:mb-8">
              Your pick of rides at low prices!
            </p>
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2 border rounded-md p-2">
                  <MapPinIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <Input
                    className="border-0 focus:ring-0"
                    placeholder="Leaving From"
                    type="text"
                  />
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-2">
                  <MapPinIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <Input
                    className="border-0 focus:ring-0"
                    placeholder="Going To"
                    type="text"
                  />
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-2">
                  <CalendarIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <Input
                    className="border-0 focus:ring-0"
                    placeholder="Date"
                    type="date"
                  />
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-2">
                  <UserIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <Input
                    className="border-0 focus:ring-0"
                    placeholder="Passengers"
                    type="number"
                  />
                </div>
              </div>
              <Button className="w-full mt-4" size="lg">
                Search
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            {/* <img
              alt="Blue sports car"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              height="400"
              src="/placeholder.svg?height=400&width=600"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            /> */}
          </div>
        </div>
      </main>
    </div>
);
}
