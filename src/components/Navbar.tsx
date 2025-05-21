import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-white border-b border-gray-100 fixed w-full top-0 z-50">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              Sebastian‘s Gemüse Kebap
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text p-2"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" isActive={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/menu" isActive={location.pathname === "/menu"}>Menu</NavLink>
            <NavLink to="/about" isActive={location.pathname === "/about"}>About</NavLink>
            <NavLink to="/contact" isActive={location.pathname === "/contact"}>Contact</NavLink>
            <button className="btn-primary">
              Reserve a Table
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" isActive={location.pathname === "/"}>Home</NavLink>
              <NavLink to="/menu" isActive={location.pathname === "/menu"}>Menu</NavLink>
              <NavLink to="/about" isActive={location.pathname === "/about"}>About</NavLink>
              <NavLink to="/contact" isActive={location.pathname === "/contact"}>Contact</NavLink>
              <button className="btn-primary w-full">
                Reserve a Table
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

const NavLink = ({ to, children, isActive }: {
  to: string
  children: React.ReactNode
  isActive: boolean
}) => (
  <Link
    to={to}
    className={`transition-colors duration-300 ${isActive
        ? "text-primary font-medium"
        : "text-text hover:text-primary"
      }`}
  >
    {children}
  </Link>
)

export default Navbar 