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
import { MessageCircle, AlertCircle, Info, Server, Code, Globe, X, AlertTriangle, Bug, Laptop, ShieldAlert } from 'lucide-react'

// Version Notice Component
const VersionNotice = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    // Store the preference in local storage
    localStorage.setItem('hideVersionNotice', (!isVisible).toString());
  };

  // Check if notice was previously dismissed
  useEffect(() => {
    const hideNotice = localStorage.getItem('hideVersionNotice') === 'true';
    if (hideNotice) {
      setIsVisible(false);
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
              Version 2.69 <span className="text-xs py-0.5 px-1.5 rounded bg-green-100 text-green-800">Stable</span>
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
        document.body.style.backgroundColor = '#121212';
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
        document.body.style.backgroundColor = '#f9fafb';
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
            
            {/* Catch-all redirect to login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
      {location.pathname !== '/login' && <Footer isDarkMode={isDarkMode} isAdmin={isAdmin} glassmorphismClass={glassmorphismClass} />}
      <TechNote isDarkMode={isDarkMode} />
      <VersionNotice isDarkMode={isDarkMode} />
    </div>
  )
}

export default App 