import React, { useState, useEffect, useMemo } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import StoriesPage from './components/StoriesPage'
import PoemsPage from './components/PoemsPage'
import LoginPage from './components/LoginPage'
import Dictionary from './components/Dictionary'
import AppDownload from './components/AppDownload'
import StoryDetail from './components/StoryDetail'
import PoemDetail from './components/PoemDetail'
import Feedback from './components/Feedback'
import DataLog from './components/DataLog'
import { MessageCircle, AlertCircle, Info, Server, Code, Globe, X, AlertTriangle, Bug, Laptop, ShieldAlert, CheckCircle, DownloadCloud, Smartphone, Loader2, BookOpen, BookText, Home as HomeIcon, BookMarked, MessageSquare, Database } from 'lucide-react'

// Version Notice Component
const VersionNotice = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    // Store the preference in local storage
    localStorage.setItem('showVersionNotice', isVisible ? 'false' : 'true');
  };

  // Check if notice should be shown
  useEffect(() => {
    // Clear previous localStorage value that might be causing issues
    localStorage.removeItem('hideVersionNotice');
    
    // Set default to hidden
    const showNotice = localStorage.getItem('showVersionNotice');
    if (showNotice === 'true') {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      // Ensure the localStorage value is set correctly
      localStorage.setItem('showVersionNotice', 'false');
    }
  }, []);
  
  if (!isVisible) {
    return (
      <button 
        onClick={toggleVisibility}
        className={`fixed bottom-24 left-6 z-50 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 ${isDarkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
        title="Show version information"
      >
        <AlertTriangle className="w-5 h-5 text-white" />
      </button>
    );
  }
  
  return (
    <div className="fixed bottom-24 left-6 z-50">
      <motion.div
        initial={{ opacity: 0, x: -20, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`w-72 p-4 rounded-xl shadow-xl ${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md border ${isDarkMode ? 'border-green-700/50' : 'border-green-300/50'}`}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <Bug className={`flex-shrink-0 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
            <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Version 3.00 <span className="text-xs py-0.5 px-1.5 rounded bg-green-100 text-green-800">Stable</span>
            </h3>
          </div>
          <button 
            onClick={toggleVisibility}
            className={`p-1 rounded-lg hover:bg-gray-500/20`}
            aria-label="Close notice"
          >
            <X className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          </button>
        </div>
        
        <div className={`mt-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <p className="mb-2">
            This is the second version of the Gundagardi app. Any bugs you face, please report to the developer.
          </p>
          <div className="flex items-center mt-3 mb-2 space-x-2">
            <Laptop className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <p className="text-xs font-medium">For best experience, use on laptop or desktop</p>
          </div>
        </div>
        
        <div className={`mt-3 pt-3 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} text-xs text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <span>Built with ❤️ by Kunal Yadav</span>
        </div>
      </motion.div>
    </div>
  );
};

// Technology Note Component
const TechNote = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button 
        onClick={toggleVisibility}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'}`}
        title="About this app"
      >
        <Info className="w-6 h-6 text-white" />
      </button>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`absolute bottom-16 left-0 w-72 p-4 rounded-xl shadow-xl ${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
          >
            <div className="flex items-start space-x-3">
              <Code className={`flex-shrink-0 mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div>
                <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Tech Stack</h3>
                <ul className={`text-xs space-y-1.5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    React JavaScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Objective C
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    HTML
                  </li>
                </ul>
                
                <div className={`mt-3 pt-3 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center mb-1.5">
                    <Server className={`w-3 h-3 mr-1.5 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                    <p className={`text-xs font-medium ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                      Running on Raspberry Pi 5
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Globe className={`w-3 h-3 mr-1.5 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                    <p className={`text-xs font-medium ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                      Domain provided by Netlify
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={toggleVisibility}
              className={`w-full mt-3 text-xs py-1.5 rounded-lg ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Add enhanced glassmorphism styles with persistent gradients
const addGlassmorphismStyles = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    /* Enhanced Glassmorphism Effects */
    .glassmorphism {
      position: relative;
      z-index: 1;
    }
    
    .glassmorphism-light {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
    }
    
    .glassmorphism-dark {
      background: rgba(30, 30, 40, 0.7);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    }
    
    .glassmorphism-card-light {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
    }
    
    .glassmorphism-card-dark {
      background: rgba(25, 25, 35, 0.8);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
    }
    
    .glassmorphism-accent {
      position: relative;
      z-index: 2;
    }
    
    /* Fixed persistent background gradients */
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -5;
      pointer-events: none;
      background: 
        radial-gradient(circle at 10% 10%, rgba(120, 90, 255, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 90% 20%, rgba(90, 140, 255, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 50% 80%, rgba(255, 90, 200, 0.3) 0%, transparent 50%);
      opacity: 1;
    }
    
    /* Custom scrollbar for modern browsers */
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(240, 240, 255, 0.1);
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(136, 136, 157, 0.5);
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(136, 136, 157, 0.8);
    }
    
    /* Floating blur elements animation */
    .floating-blur-element {
      animation: float 8s ease-in-out infinite;
    }
    
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }
  `;
  document.head.appendChild(style);
};

// Protected Route component to ensure authentication
const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    // Redirect to login page if not logged in
    return <Navigate to="/login" />;
  }
  
  return children;
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showThemeMessage, setShowThemeMessage] = useState(false);
  const [themeMessage, setThemeMessage] = useState('');
  const [funnyMessage, setFunnyMessage] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [nextPageIcon, setNextPageIcon] = useState(null);

  // Add glassmorphism styles on mount
  useEffect(() => {
    addGlassmorphismStyles();
  }, []);

  // Check authentication status and redirect if needed
  useEffect(() => {
    // If not logged in and not on login page, redirect to login
    if (!isLoggedIn && location.pathname !== '/login') {
      navigate('/login');
    }
  }, [isLoggedIn, location.pathname, navigate]);

  // Array of funny messages
  const funnyMessages = [
    "Kitaab kholke dekh lo yaar, yaha se cheating karne se kya hoga?",
    "Exam me fail hoga tu pakka, phir pitega ghar pe pakka!",
    "Board exam me 2 mark ka answer likhne ke liye 20 page scroll kar raha hai?",
    "Padhai kar le, ye website band kar le!",
    "Screen pe ghoor raha hai? Notebook pe likh le kuch!",
    "Tera teacher dekhega to bolega 'Ye kaha se copy kiya?'"
  ];

  // Apply theme class based on state
  useEffect(() => {
    // Apply theme class based on state
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      
      // Only set background color for login page
      if (location.pathname === '/login') {
        document.body.style.backgroundColor = 'transparent';
        document.body.classList.add('login-page');
      } else {
        document.body.classList.remove('login-page');
        document.body.style.backgroundColor = '';  // let CSS handle it
      }
      document.body.style.color = '#ffffff'; // white text for dark mode
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      
      // Only set background color for login page
      if (location.pathname === '/login') {
        document.body.style.backgroundColor = 'transparent';
        document.body.classList.add('login-page');
      } else {
        document.body.classList.remove('login-page');
        document.body.style.backgroundColor = '';  // let CSS handle it
      }
      document.body.style.color = '#1f2937'; // gray-800
    }

    // Show a random funny message when loading a page
    const randomIndex = Math.floor(Math.random() * funnyMessages.length);
    setFunnyMessage(funnyMessages[randomIndex]);

    // Cleanup function to reset styles when component unmounts
    return () => {
      if (!isDarkMode) {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
      }
    };
  }, [location, isDarkMode]);

  // Theme toggle function
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    // Set funny alerts based on theme change
    if (newTheme) {
      setThemeMessage("Abey Andhere mein padhai kar! Aankhein kharab ho jayengi!");
    } else {
      setThemeMessage("Kitna chamkayega be? Dimaag fat jayega!");
    }
    
    setShowThemeMessage(true);
    
    // Hide theme message after 3 seconds
    setTimeout(() => {
      setShowThemeMessage(false);
    }, 3000);
  };

  // User authentication function
  const handleLogin = (credentials) => {
    const { username, password } = credentials;
    
    // Check for admin login
    if (username === 'admin' && password === 'admin') {
      setIsAdmin(true);
      setIsLoggedIn(true);
      setUserData({
        name: "Administrator",
        avatar: `https://api.dicebear.com/6.x/bottts/svg?seed=admin`,
        role: "System Administrator"
      });
      
      // Set welcome message for admin
      setThemeMessage("Welcome Administrator! Full system access granted.");
      setShowThemeMessage(true);
    } 
    // Check for regular user login
    else if (username === 'gunda' && password === 'gundagardi') {
      setIsAdmin(false);
      setIsLoggedIn(true);
      setUserData({
        name: "Gunda Student",
        avatar: `https://api.dicebear.com/6.x/avataaars/svg?seed=gunda`,
        role: "Padhai ka Maara"
      });
      
      // Set welcome message for regular user
      setThemeMessage(`Aa gaya tu Gunda Student! Ab padhai shuru kar jaldi!`);
      setShowThemeMessage(true);
    } 
    // Mock login for demo purposes - any other username/password
    else {
      setIsAdmin(false);
      setIsLoggedIn(true);
      setUserData({
        name: username || "Gunda Student",
        avatar: `https://api.dicebear.com/6.x/avataaars/svg?seed=${username}`,
        role: "Padhai ka Maara"
      });
      
      // Set welcome message for other users
      setThemeMessage(`Aa gaya tu ${username || "Bewakoof"}! Ab padhai shuru kar jaldi!`);
      setShowThemeMessage(true);
    }
    
    // Ensure dark mode is active after login
    setIsDarkMode(true);
    
    // Hide theme message after 3 seconds
    setTimeout(() => {
      setShowThemeMessage(false);
    }, 3000);
    
    // Redirect to home page
    navigate('/');
  };
  
  // Logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    setIsAdmin(false);
    
    // Show logout message
    setThemeMessage("Bhag gaya? Padhai se darr lagta hai kya?");
    setShowThemeMessage(true);
    
    setTimeout(() => {
      setShowThemeMessage(false);
    }, 3000);
    
    // Redirect to login page
    navigate('/login');
  };

  const glassmorphismClass = isDarkMode ? 'glassmorphism-dark' : 'glassmorphism-light';

  // Get notification styles based on theme
  const getNotificationStyle = () => {
    return isDarkMode 
      ? "bg-red-900/90 border border-red-700 text-white" 
      : "bg-red-600 border border-red-400 text-white";
  };

  // Get icon for current route
  const getPageIcon = (pathname) => {
    switch (pathname) {
      case '/':
        return <HomeIcon className="w-8 h-8 text-white" />;
      case '/stories':
        return <BookOpen className="w-8 h-8 text-white" />;
      case '/poems':
        return <BookMarked className="w-8 h-8 text-white" />;
      case '/dictionary':
        return <BookText className="w-8 h-8 text-white" />;
      case '/app-download':
        return <DownloadCloud className="w-8 h-8 text-white" />;
      case '/feedback':
        return <MessageSquare className="w-8 h-8 text-white" />;
      case '/data-log':
        return <Database className="w-8 h-8 text-white" />;
      default:
        return <HomeIcon className="w-8 h-8 text-white" />;
    }
  };

  // Listen for route changes to show loading animations
  useEffect(() => {
    // Don't show animation for login page or when not logged in
    if (location.pathname === '/login' || !isLoggedIn) return;
    
    // Set the icon for the page we're navigating to
    setNextPageIcon(getPageIcon(location.pathname));
    
    // Show loading state
    setPageLoading(true);
    
    // Simulate page loading
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [location.pathname, isLoggedIn]);

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-dark-bg-primary' : 'bg-gray-50'}`}>
      {location.pathname !== '/login' && 
        <Header 
          isLoggedIn={isLoggedIn} 
          userData={userData} 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme}
          isAdmin={isAdmin}
          onLogout={handleLogout}
        />
      }
      
      {/* Fixed WhatsApp Icon */}
      {location.pathname !== '/login' && (
        <a 
          href="https://wa.me/+1234567890?text=Mujhe%20Gundagardi%20movement%20join%20karna%20hai" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 ${glassmorphismClass}`}
          title="Join Gundagardi WhatsApp Group"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
      )}
      
      {/* Notification Container - Positioned in the middle of the page below header */}
      <div 
        className="fixed left-0 right-0 pt-20 z-50 flex justify-center items-start pointer-events-none"
        style={{top: '3rem'}}
      >
        {/* Theme Message - Centered notification with animation */}
        <AnimatePresence>
          {showThemeMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="max-w-md w-full mx-auto px-4 pointer-events-auto"
            >
              <div className={`${getNotificationStyle()} backdrop-blur-md px-6 py-4 rounded-xl shadow-xl text-center flex items-center justify-center space-x-3 border-2 border-opacity-50`}>
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="font-bold text-white">{themeMessage}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Login success animation - 60fps smooth animation */}
      <AnimatePresence>
        {isLoggedIn && location.pathname === '/' && (
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
            style={{ 
              background: isDarkMode ? 
                'radial-gradient(circle, rgba(91,33,182,0.8) 0%, rgba(13,13,30,0) 70%)' : 
                'radial-gradient(circle, rgba(124,58,237,0.5) 0%, rgba(255,255,255,0) 70%)'
            }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ 
                scale: [0.7, 1.2, 1],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 1.2, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
              className="flex flex-col items-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0, 1.3, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  times: [0, 0.6, 1]
                }}
                className={`mb-3 w-20 h-20 rounded-full flex items-center justify-center 
                  ${isDarkMode ? 'bg-purple-600' : 'bg-purple-500'} shadow-2xl`}
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-purple-800'}`}
              >
                Gundagardi Mode Activated! 
              </motion.div>
            </motion.div>
            
            {/* Particles animation for added flair */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    opacity: 0.8,
                    scale: Math.random() * 0.5 + 0.5
                  }}
                  animate={{ 
                    x: (Math.random() - 0.5) * window.innerWidth * 0.7, 
                    y: (Math.random() - 0.5) * window.innerHeight * 0.7,
                    opacity: 0,
                    scale: Math.random() * 1.5 + 1
                  }}
                  transition={{ 
                    duration: Math.random() * 1 + 0.8, 
                    ease: "easeOut" 
                  }}
                  className={`absolute w-4 h-4 rounded-full ${
                    i % 3 === 0 ? 'bg-purple-500' : i % 3 === 1 ? 'bg-pink-500' : 'bg-indigo-500'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/login" element={<LoginPage onLogin={handleLogin} isDarkMode={isDarkMode} />} />
            
            {/* Protected routes - require authentication */}
            <Route path="/" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Home isDarkMode={isDarkMode} isAdmin={isAdmin} glassmorphismClass={glassmorphismClass} />
              </ProtectedRoute>
            } />
            
            <Route path="/stories" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <StoriesPage isDarkMode={isDarkMode} isAdmin={isAdmin} glassmorphismClass={glassmorphismClass} />
              </ProtectedRoute>
            } />
            
            <Route path="/stories/:storyId" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <StoryDetail isDarkMode={isDarkMode} glassmorphismClass={glassmorphismClass} />
              </ProtectedRoute>
            } />
            
            <Route path="/poems" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <PoemsPage isDarkMode={isDarkMode} isAdmin={isAdmin} glassmorphismClass={glassmorphismClass} />
              </ProtectedRoute>
            } />
            
            <Route path="/poems/:poemId" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <PoemDetail isDarkMode={isDarkMode} glassmorphismClass={glassmorphismClass} />
              </ProtectedRoute>
            } />
            
            <Route path="/dictionary" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dictionary isDarkMode={isDarkMode} isAdmin={isAdmin} glassmorphismClass={glassmorphismClass} />
              </ProtectedRoute>
            } />
            
            <Route path="/app-download" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <AppDownload isDarkMode={isDarkMode} isAdmin={isAdmin} glassmorphismClass={glassmorphismClass} />
              </ProtectedRoute>
            } />
            
            <Route path="/feedback" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Feedback isDarkMode={isDarkMode} glassmorphismClass={glassmorphismClass} isAdmin={isAdmin} />
              </ProtectedRoute>
            } />
            
            <Route path="/data-log" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                {isAdmin ? (
                  <DataLog isDarkMode={isDarkMode} glassmorphismClass={glassmorphismClass} isAdmin={isAdmin} />
                ) : (
                  <Navigate to="/" replace />
                )}
              </ProtectedRoute>
            } />
            
            {/* Catch-all redirect to login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* App Download page transition animation - 60fps smooth animation */}
      <AnimatePresence>
        {isLoggedIn && location.pathname === '/app-download' && (
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
            style={{ 
              background: isDarkMode ? 
                'radial-gradient(circle, rgba(55,48,163,0.7) 0%, rgba(13,13,30,0) 70%)' : 
                'radial-gradient(circle, rgba(79,70,229,0.4) 0%, rgba(255,255,255,0) 70%)'
            }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ 
                scale: [0.7, 1.2, 1],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 1.5, 
                ease: "easeInOut",
                times: [0, 0.4, 1]
              }}
              className="flex flex-col items-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ 
                  scale: [0, 1.2, 1],
                  rotate: [-30, 10, 0]
                }}
                transition={{ 
                  duration: 0.9, 
                  ease: "easeOut",
                  times: [0, 0.6, 1]
                }}
                className={`mb-4 w-24 h-24 rounded-2xl flex items-center justify-center 
                  ${isDarkMode ? 'bg-indigo-600' : 'bg-indigo-500'} shadow-2xl`}
              >
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    repeat: 1,
                    duration: 0.7, 
                    ease: "easeInOut"
                  }}
                >
                  <DownloadCloud className="w-12 h-12 text-white" />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-indigo-800'}`}
              >
                Download Experience Loaded!
              </motion.div>
            </motion.div>
            
            {/* Apps floating down animation */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: (Math.random() - 0.5) * 200, 
                    y: -100 - Math.random() * 100, 
                    opacity: 0,
                    rotate: Math.random() * 20 - 10
                  }}
                  animate={{ 
                    x: (Math.random() - 0.5) * 300, 
                    y: window.innerHeight + 100,
                    opacity: [0, 0.7, 0],
                    rotate: [Math.random() * 20 - 10, Math.random() * 40 - 20]
                  }}
                  transition={{ 
                    duration: Math.random() * 1.5 + 2, 
                    ease: "easeIn",
                    delay: Math.random() * 0.5
                  }}
                  className="absolute"
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${
                    i % 4 === 0 ? 'bg-indigo-500' : 
                    i % 4 === 1 ? 'bg-blue-500' : 
                    i % 4 === 2 ? 'bg-green-500' : 'bg-purple-500'
                  }`}>
                    {i % 3 === 0 ? <Smartphone className="w-8 h-8 text-white" /> : 
                     i % 3 === 1 ? <Laptop className="w-8 h-8 text-white" /> : 
                     <Globe className="w-8 h-8 text-white" />}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Page Navigation Loading Animation */}
      <AnimatePresence>
        {pageLoading && isLoggedIn && location.pathname !== '/login' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] backdrop-blur-sm bg-black/20 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={`${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} p-8 rounded-2xl flex flex-col items-center shadow-2xl border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
            >
              <div className="relative mb-4">
                <motion.div
                  className={`w-16 h-16 rounded-xl ${isDarkMode ? 'bg-indigo-600' : 'bg-indigo-500'} flex items-center justify-center`}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 2,
                    ease: "linear",
                    repeat: Infinity
                  }}
                >
                  {nextPageIcon}
                </motion.div>
                <motion.div 
                  className="absolute inset-0 rounded-xl"
                  initial={{ borderWidth: 2, borderColor: "rgba(99, 102, 241, 0.2)" }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.2, 1],
                    borderColor: ["rgba(99, 102, 241, 0.2)", "rgba(99, 102, 241, 0.8)", "rgba(99, 102, 241, 0.2)"]
                  }}
                  transition={{ 
                    duration: 1.8,
                    ease: "easeInOut",
                    repeat: Infinity
                  }}
                  style={{
                    borderStyle: "solid"
                  }}
                />
              </div>
              <p className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Gundagardi Loading...
              </p>
              <div className="flex items-center gap-1.5">
                <motion.div 
                  className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-indigo-500' : 'bg-indigo-600'}`}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.2 }}
                />
                <motion.div 
                  className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-pink-500' : 'bg-pink-600'}`}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.3, delay: 0.1 }}
                />
                <motion.div 
                  className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-purple-500' : 'bg-purple-600'}`}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.4, delay: 0.2 }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {location.pathname !== '/login' && <Footer isDarkMode={isDarkMode} isAdmin={isAdmin} glassmorphismClass={glassmorphismClass} />}
      <TechNote isDarkMode={isDarkMode} />
      <VersionNotice isDarkMode={isDarkMode} />
    </div>
  )
}

export default App 