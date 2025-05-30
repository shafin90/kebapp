import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="flex items-center">
            <Link 
              to="/" 
              className={`text-xl md:text-2xl font-bold transition-colors duration-500 ${
                isScrolled || isMenuOpen ? 'text-primary' : 'text-white'
              }`}
            >
              Sebastians Kebap
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-500 ${
              isScrolled || isMenuOpen ? 'text-text' : 'text-white'
            }`}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              isActive={location.pathname === "/"} 
              isScrolled={isScrolled || isMenuOpen}
            >
              Startseite
            </NavLink>
            <NavLink 
              to="/menu" 
              isActive={location.pathname === "/menu"} 
              isScrolled={isScrolled || isMenuOpen}
            >
              Speisekarte
            </NavLink>
            <NavLink 
              to="/about" 
              isActive={location.pathname === "/about"} 
              isScrolled={isScrolled || isMenuOpen}
            >
              Über uns
            </NavLink>
            <NavLink 
              to="/contact" 
              isActive={location.pathname === "/contact"} 
              isScrolled={isScrolled || isMenuOpen}
            >
              Kontakt
            </NavLink>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-lg p-4 border border-gray-100 shadow-lg">
            <div className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                isActive={location.pathname === "/"} 
                isScrolled={true}
              >
                Startseite
              </NavLink>
              <NavLink 
                to="/menu" 
                isActive={location.pathname === "/menu"} 
                isScrolled={true}
              >
                Speisekarte
              </NavLink>
              <NavLink 
                to="/about" 
                isActive={location.pathname === "/about"} 
                isScrolled={true}
              >
                Über uns
              </NavLink>
              <NavLink 
                to="/contact" 
                isActive={location.pathname === "/contact"} 
                isScrolled={true}
              >
                Kontakt
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

const NavLink = ({ 
  to, 
  children, 
  isActive, 
  isScrolled,
  className = "" 
}: {
  to: string
  children: React.ReactNode
  isActive: boolean
  isScrolled: boolean
  className?: string
}) => (
  <Link
    to={to}
    className={`transition-colors duration-500 ${
      className || (isActive
        ? isScrolled ? "text-primary font-medium" : "text-white font-medium"
        : isScrolled ? "text-text hover:text-primary" : "text-white/90 hover:text-white")
    }`}
  >
    {children}
  </Link>
)

export default Navbar 