import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, LogOut, Sun, Moon, Skull, ShieldCheck, Laptop } from 'lucide-react'

function Header({ isLoggedIn, userData, isDarkMode, toggleTheme, isAdmin, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showFunnyMsg, setShowFunnyMsg] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  
  // Funny messages for hover
  const funnyMessages = [
    "Abe padhai kar le yaar!",
    "Notes lena bhool gaya kya?",
    "Hindi padhne se tere marks nahi badhenge",
    "Exam mein fail hoga tu pakka",
    "Baad mein mat bolna site ne nahi bataya"
  ]
  
  // Random funny message
  const [funnyMsg, setFunnyMsg] = useState(funnyMessages[0])

  // Default user if userData is not provided
  const defaultUser = {
    name: "Bewakoof Student",
    avatar: "https://via.placeholder.com/100",
    role: "Padhai ka Maara"
  }

  // Use provided userData or default if not available
  const user = userData || defaultUser

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Random funny message when hovering over logo
  const showRandomFunnyMsg = () => {
    const randomIndex = Math.floor(Math.random() * funnyMessages.length)
    setFunnyMsg(funnyMessages[randomIndex])
    setShowFunnyMsg(true)
    
    // Hide after 2 seconds
    setTimeout(() => {
      setShowFunnyMsg(false)
    }, 2000)
  }

  const handleLogin = () => {
    navigate('/login')
  }
  
  // Handle logout click
  const handleLogout = () => {
    if (onLogout) {
      onLogout()
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Stories', path: '/stories' },
    { name: 'Poems', path: '/poems' },
    { name: 'Dictionary', path: '/dictionary' },
    { name: 'App Download', path: '/app-download' }
  ]

  // Glassmorphism header background
  const headerBgClass = isDarkMode 
    ? (scrolled ? 'glassmorphism-dark shadow-xl' : 'bg-transparent') 
    : (scrolled ? 'glassmorphism-light shadow-xl' : 'bg-transparent');

  const textClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const secondaryTextClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const activeNavClass = isDarkMode ? 'text-purple-400 font-medium' : 'text-purple-600 font-medium';
  const buttonBgClass = isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm' : 'bg-white/50 backdrop-blur-sm';
  const hoverBgClass = isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100/70';
  const mobileMenuBgClass = isDarkMode ? 'bg-gray-900/95 backdrop-blur-lg border-l border-gray-800' : 'bg-white/95 backdrop-blur-lg border-l border-gray-200';
  const borderClass = isDarkMode ? 'border-gray-700' : 'border-gray-200';
  const dropdownBgClass = isDarkMode ? 'glassmorphism-dark' : 'glassmorphism-light';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass} ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="content-container flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 relative"
          onMouseEnter={showRandomFunnyMsg}
        >
          <div className="relative">
            <Skull className="w-8 h-8 text-red-600" strokeWidth={2.5} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold ${textClass}`}>Gundagardi</span>
            <div className="flex items-center">
              <span className="text-xs bg-red-600/80 backdrop-blur-sm text-white px-2 py-0.5 rounded-full">House of Gundas</span>
              <span className={`ml-1 text-xs ${isDarkMode ? 'bg-green-700/50' : 'bg-green-200/90'} ${isDarkMode ? 'text-green-300' : 'text-green-800'} px-1.5 py-0.5 rounded-full`}>v2.69</span>
            </div>
          </div>
          
          {/* Funny message tooltip */}
          {showFunnyMsg && (
            <div className="absolute -bottom-10 left-0 bg-red-600/80 backdrop-blur-sm text-white text-sm p-2 rounded-lg shadow-lg whitespace-nowrap z-50 animate-bounce">
              {funnyMsg}
            </div>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${secondaryTextClass} hover:text-purple-500 transition-colors duration-200 ${location.pathname === link.path ? activeNavClass : ''}`}
            >
              {link.name}
              {(link.path === '/dictionary' || link.path === '/app-download') && (
                <span className="ml-1 text-xs bg-yellow-500/80 backdrop-blur-sm text-white px-1.5 py-0.5 rounded-full animate-pulse">
                  New!
                </span>
              )}
            </Link>
          ))}
          
          {isAdmin && (
            <span className="flex items-center text-green-400 font-medium bg-green-900/30 px-2 py-1 rounded-full backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 mr-1" />
              Admin Panel
            </span>
          )}
        </nav>

        {/* Right Side - User Profile or Login Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full ${buttonBgClass} ${secondaryTextClass} transition-colors ${hoverBgClass}`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          {isLoggedIn ? (
            <div className="relative group">
              <button className={`flex items-center space-x-2 ${buttonBgClass} rounded-full pr-3 pl-1 py-1 ${hoverBgClass} transition-colors`}>
                <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full ring-2 ring-purple-500/50" />
                <span className={`text-sm ${textClass}`}>{user.name}</span>
                {isAdmin && (
                  <ShieldCheck className="w-4 h-4 text-green-400 ml-1" />
                )}
              </button>
              
              <div className={`absolute right-0 mt-2 w-48 ${dropdownBgClass} rounded-xl shadow-xl overflow-hidden z-10 opacity-0 scale-95 transform transition-all duration-200 origin-top-right invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible ${borderClass} border`}>
                <div className="py-2">
                  <div className={`px-4 py-3 border-b ${borderClass}`}>
                    <p className={`text-sm font-medium ${textClass} flex items-center`}>
                      {user.name}
                      {isAdmin && (
                        <ShieldCheck className="w-4 h-4 text-green-400 ml-1" />
                      )}
                    </p>
                    <p className={`text-xs ${secondaryTextClass} truncate`}>{user.role}</p>
                  </div>
                  <Link to="/profile" className={`flex items-center px-4 py-2 text-sm ${secondaryTextClass} ${hoverBgClass} hover:text-purple-400 transition-colors`}>
                    <User className="w-4 h-4 mr-2" /> Your Profile
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className={`flex items-center px-4 py-2 text-sm w-full text-left ${secondaryTextClass} ${hoverBgClass} hover:text-red-400 transition-colors`}
                  >
                    <LogOut className="w-4 h-4 mr-2" /> Nikal Yahan Se
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login" className="glassmorphism flex items-center space-x-2 bg-purple-600/80 hover:bg-purple-700/80 text-white px-4 py-2 rounded-full transition-all duration-200 hover:shadow-lg">
              <User className="w-4 h-4" />
              <span>Ghus Ja Andar</span>
            </Link>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${textClass} p-2.5 rounded-full ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-md shadow-md transition-transform hover:scale-105`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={`fixed inset-0 z-50 ${isDarkMode ? 'glassmorphism-dark' : 'glassmorphism-light'} border-l ${borderClass}`}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="content-container flex flex-col h-full py-6">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                  <div className="relative">
                    <Skull className="w-8 h-8 text-red-600" strokeWidth={2.5} />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-xl font-bold ${textClass}`}>Gundagardi</span>
                    <div className="flex items-center">
                      <span className="text-xs bg-red-600/80 backdrop-blur-sm text-white px-2 py-0.5 rounded-full">House of Gundas</span>
                      <span className={`ml-1 text-xs ${isDarkMode ? 'bg-green-700/50' : 'bg-green-200/90'} ${isDarkMode ? 'text-green-300' : 'text-green-800'} px-1.5 py-0.5 rounded-full`}>v2.69</span>
                    </div>
                  </div>
                </Link>
                <button 
                  className={`${textClass} p-2.5 rounded-full ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-md shadow-md transition-transform hover:scale-105`}
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <nav className="flex flex-col space-y-6 mt-8">
                {/* User profile for mobile */}
                {isLoggedIn && (
                  <div className={`flex items-center p-4 ${isDarkMode ? 'bg-gray-800/70' : 'bg-white/70'} backdrop-blur-md rounded-xl mb-4 shadow-lg`}>
                    <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full ring-2 ring-purple-500/50 mr-3" />
                    <div>
                      <p className={`font-medium ${textClass} flex items-center`}>
                        {user.name}
                        {isAdmin && (
                          <ShieldCheck className="w-4 h-4 text-green-400 ml-1" />
                        )}
                      </p>
                      <p className={`text-xs ${secondaryTextClass}`}>{user.role}</p>
                    </div>
                  </div>
                )}
                
                {/* Navigation links */}
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`${textClass} text-lg font-medium ${location.pathname === link.path ? activeNavClass : ''} ${location.pathname === link.path ? `${isDarkMode ? 'bg-purple-900/40' : 'bg-purple-100/70'} backdrop-blur-sm px-3 py-2 rounded-lg shadow-md` : 'px-3 py-2'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                    {(link.path === '/dictionary' || link.path === '/app-download') && (
                      <span className="ml-1 text-xs bg-yellow-500/80 backdrop-blur-sm text-white px-1.5 py-0.5 rounded-full animate-pulse">
                        New!
                      </span>
                    )}
                  </Link>
                ))}
                
                {/* Theme toggle for mobile */}
                <button 
                  onClick={toggleTheme} 
                  className={`flex items-center space-x-3 ${textClass} text-lg font-medium ${isDarkMode ? 'bg-gray-800/60' : 'bg-white/60'} backdrop-blur-md px-3 py-2 rounded-xl shadow-md`}
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="w-5 h-5 text-yellow-400" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 text-blue-400" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
                
                {/* Login/Logout for mobile */}
                {isLoggedIn ? (
                  <button 
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 text-red-400 text-lg font-medium ${isDarkMode ? 'bg-red-900/30' : 'bg-red-100/70'} backdrop-blur-md px-3 py-2 rounded-xl shadow-md`}
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Nikal Yahan Se</span>
                  </button>
                ) : (
                  <Link 
                    to="/login" 
                    className={`flex items-center space-x-3 text-purple-400 text-lg font-medium ${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-100/70'} backdrop-blur-md px-3 py-2 rounded-xl shadow-md`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-5 h-5" />
                    <span>Ghus Ja Andar</span>
                  </Link>
                )}
              </nav>
              
              <div className="mt-auto">
                <div className={`text-center ${secondaryTextClass} ${isDarkMode ? 'bg-gray-800/60' : 'bg-white/60'} backdrop-blur-md p-3 rounded-xl shadow-md space-y-2`}>
                  <p className="text-sm">
                    &copy; 2025 Gundagardi<br />
                    <span className="text-xs">Tum log fail ho jao, hamari kya galti?</span>
                  </p>
                  <div className="flex items-center justify-center pt-2 border-t border-gray-700/30">
                    <span className={`text-xs px-2 py-0.5 rounded ${isDarkMode ? 'bg-green-700/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
                      v2.69 Stable
                    </span>
                    <span className="mx-2 text-xs text-gray-500">|</span>
                    <span className="text-xs italic flex items-center">
                      <Laptop className="w-3 h-3 mr-1" />
                      Best on desktop
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header 