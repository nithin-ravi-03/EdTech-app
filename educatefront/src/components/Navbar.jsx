import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX, FiUser, FiBook, FiUsers, FiAward, FiHome } from 'react-icons/fi'
import LoginModal from './LoginModal'

const Navbar = ({ isLoggedIn, onLogin, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const openLoginModal = () => {
    setIsLoginModalOpen(true)
  }
  
  const closeLoginModal = () => {
    setIsLoginModalOpen(false)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Auro.edu
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600">
              <FiHome className="mr-1" /> Home
            </Link>
            <Link to="/courses" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600">
              <FiBook className="mr-1" /> Courses
            </Link>
            <Link to="/community" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600">
              <FiUsers className="mr-1" /> Community
            </Link>
            <Link to="/certificates" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600">
              <FiAward className="mr-1" /> Certificates
            </Link>
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <Link to="/profile" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600">
                  <FiUser className="mr-1" /> Profile
                </Link>
                <button 
                  onClick={onLogout}
                  className="btn btn-primary"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={openLoginModal}
                className="btn btn-primary"
              >
                Login
              </button>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
              <FiHome className="mr-2" /> Home
            </Link>
            <Link to="/courses" className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
              <FiBook className="mr-2" /> Courses
            </Link>
            <Link to="/community" className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
              <FiUsers className="mr-2" /> Community
            </Link>
            <Link to="/certificates" className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
              <FiAward className="mr-2" /> Certificates
            </Link>
            
            {isLoggedIn ? (
              <div className="space-y-2">
                <Link to="/profile" className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                  <FiUser className="mr-2" /> Profile
                </Link>
                <button 
                  onClick={onLogout}
                  className="w-full btn btn-primary"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={openLoginModal}
                className="w-full btn btn-primary"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
      
      {/* Login Modal */}
      {isLoginModalOpen && (
        <LoginModal onClose={closeLoginModal} onLogin={onLogin} />
      )}
    </nav>
  )
}

export default Navbar