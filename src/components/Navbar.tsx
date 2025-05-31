import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon, HomeIcon, BookOpenIcon, UserGroupIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

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

  const menuItems = [
    { to: "/", label: "Startseite", icon: <HomeIcon className="w-5 h-5" /> },
    { to: "/menu", label: "Speisekarte", icon: <BookOpenIcon className="w-5 h-5" /> },
    { to: "/about", label: "Über uns", icon: <UserGroupIcon className="w-5 h-5" /> },
    { to: "/contact", label: "Kontakt", icon: <EnvelopeIcon className="w-5 h-5" /> }
  ]

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          <div className="flex items-center">
            <Link 
              to="/" 
              className={`text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-500 ${
                isScrolled || isMenuOpen ? 'text-primary' : 'text-white'
              }`}
            >
              Sebastians Kebap
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden rounded-full p-2 transition-all duration-300 ${
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
            {menuItems.map((item) => (
              <NavLink 
                key={item.to}
                to={item.to} 
                isActive={location.pathname === item.to} 
                isScrolled={isScrolled || isMenuOpen}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-x-0 top-[64px] sm:top-[80px] bg-white border-b border-gray-100 shadow-md"
            >
              <div className="container mx-auto px-4 sm:px-6 py-2">
                <div className="grid grid-cols-2 gap-2 py-2">
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <NavLink 
                        to={item.to} 
                        isActive={location.pathname === item.to} 
                        isScrolled={true}
                        className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className={`p-2 rounded-lg ${
                          location.pathname === item.to 
                            ? 'bg-primary text-white' 
                            : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                        }`}>
                          {item.icon}
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-primary">
                          {item.label}
                        </span>
                      </NavLink>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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