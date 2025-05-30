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
    handleScroll()

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

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
            className={`md:hidden rounded-full p-2.5 transition-all duration-300 ${
              isScrolled || isMenuOpen 
                ? 'bg-primary/10 text-primary hover:bg-primary/20' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
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
        <div 
          className={`md:hidden fixed inset-x-0 top-[80px] bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 shadow-lg' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="space-y-0.5">
              <NavLink 
                to="/" 
                isActive={location.pathname === "/"} 
                isScrolled={true}
                className="block py-3.5 text-base font-medium hover:bg-gray-50 rounded-lg px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Startseite
              </NavLink>
              <NavLink 
                to="/menu" 
                isActive={location.pathname === "/menu"} 
                isScrolled={true}
                className="block py-3.5 text-base font-medium hover:bg-gray-50 rounded-lg px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Speisekarte
              </NavLink>
              <NavLink 
                to="/about" 
                isActive={location.pathname === "/about"} 
                isScrolled={true}
                className="block py-3.5 text-base font-medium hover:bg-gray-50 rounded-lg px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </NavLink>
              <NavLink 
                to="/contact" 
                isActive={location.pathname === "/contact"} 
                isScrolled={true}
                className="block py-3.5 text-base font-medium hover:bg-gray-50 rounded-lg px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ 
  to, 
  children, 
  isActive, 
  isScrolled,
  className = "",
  onClick
}: {
  to: string
  children: React.ReactNode
  isActive: boolean
  isScrolled: boolean
  className?: string
  onClick?: () => void
}) => (
  <Link
    to={to}
    className={`transition-colors duration-500 ${
      className || (isActive
        ? isScrolled ? "text-primary font-medium" : "text-white font-medium"
        : isScrolled ? "text-text hover:text-primary" : "text-white/90 hover:text-white")
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
)

export default Navbar 