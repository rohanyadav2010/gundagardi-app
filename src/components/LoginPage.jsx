import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Key, Eye, EyeOff, BookOpen, Skull, MessageCircle, DollarSign, ArrowRight, ShieldAlert, Coffee, MoonStar, Sun, Sparkles, Rocket, Laugh, Laptop, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Simplified Motion Bubble Component
const MotionBubble = ({ icon, text, color }) => (
  <div className={`bg-gradient-to-br ${color} backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 shadow-md inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-300`}>
    {icon}
    <span className="text-white text-sm font-medium">{text}</span>
  </div>
);

const LoginPage = ({ onLogin, isDarkMode }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [showFunnyError, setShowFunnyError] = useState(false);
  const [showLoginHints, setShowLoginHints] = useState(false);
  const [timeGreeting, setTimeGreeting] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Ensure login page has its own background
  useEffect(() => {
    // Add login-page class when component mounts
    document.body.classList.add('login-page');
    
    // Clean up when component unmounts
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  // Update current time and greeting
  useEffect(() => {
    // Initial setting
    updateTimeGreeting(new Date());
    
    // Update every minute
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      updateTimeGreeting(now);
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Generate time-based greeting
  const updateTimeGreeting = (date) => {
    const hour = date.getHours();
    let greeting = '';
    
    if (hour >= 5 && hour < 12) {
      greeting = "Subah subah padhai? Waah bhai dedication!";
    } else if (hour >= 12 && hour < 17) {
      greeting = "Dopahar me login kar raha hai? Lunch break me bhi padhai!";
    } else if (hour >= 17 && hour < 22) {
      greeting = "Raat hone wali hai, jaldi padh le phir PUBG khelna hai na?";
    } else {
      greeting = "Itni raat ko padhai? Topper banega kya tu?";
    }
    
    setTimeGreeting(greeting);
  };

  const funnyErrors = [
    "Abey naam to sahi se likh le! Itna bhi dimag nahi hai kya?",
    "Password bhool gaya? Chinta mat kar, hum bhi bhool gaye!",
    "Tera username aur password dono galat hai, akal se paidal!",
    "Kitni baar try karega? Hindi padh le, login baad me kar lena!",
    "Lagta hai tune notes copy karne me bhi itni hi mehnat ki thi!",
    "Login nahi ho pa raha? Exam me bhi fail hoga tu pakka!"
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Mock validation
    if (username.trim() === '') {
      setError('Username bata bhai, telepathy se nahi pehchan sakte tujhe!');
      setShowFunnyError(true);
      setTimeout(() => setShowFunnyError(false), 3000);
      return;
    }
    
    if (password.trim() === '') {
      setError('Password daal de bhai, "khul ja sim sim" nahi bolega system!');
      setShowFunnyError(true);
      setTimeout(() => setShowFunnyError(false), 3000);
      return;
    }

    // Set loading state
    setIsLoading(true);
    
    // Simulate network delay for login
    setTimeout(() => {
      // Pass credentials to parent component for authentication
      // Always allow login as long as username and password are not empty
      onLogin({ username, password });
      
      // Reset loading state (though this won't be seen as we'll navigate away)
      setIsLoading(false);
    }, 1200);
  };

  // Toggle login hints
  const toggleLoginHints = () => {
    setShowLoginHints(!showLoginHints);
  };

  // Format time for display
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen overflow-auto py-8 flex items-center justify-center">
      {/* Fixed persistent background gradients - same as Home tab */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Background gradient blobs */}
        <div className="absolute top-[15%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-500/40 blur-[100px] opacity-100"></div>
        <div className="absolute bottom-[20%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-blue-500/40 blur-[100px] opacity-100"></div>
        <div className="absolute top-[40%] right-[30%] w-[30vw] h-[30vw] rounded-full bg-pink-500/40 blur-[100px] opacity-100"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Reduced number of floating elements */}
      <div className="absolute top-8 left-8 transform rotate-[-5deg] transition-transform duration-300 hover:rotate-0">
        <MotionBubble icon={<Coffee className="w-5 h-5 text-amber-400" />} text="Keep coding!" color="from-amber-500/30 to-amber-700/30" />
      </div>
      
      <div className="absolute bottom-16 right-8 transform rotate-[5deg] transition-transform duration-300 hover:rotate-0">
        <MotionBubble icon={<Rocket className="w-5 h-5 text-green-400" />} text="Study to the moon!" color="from-green-600/30 to-teal-700/30" />
      </div>
      
      {/* Time-based greeting with simplified styling */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-gray-900/60 backdrop-blur-sm p-3 rounded-xl border border-purple-700/30 shadow-md">
          <div className="flex items-center justify-center mb-1">
            {currentTime.getHours() >= 18 || currentTime.getHours() < 6 ? 
              <MoonStar className="w-4 h-4 mr-2 text-blue-400" /> : 
              <Sun className="w-4 h-4 mr-2 text-yellow-400" />
            }
            <p className="text-gray-300 text-sm">{formatTime(currentTime)}</p>
          </div>
          <p className="text-purple-300 text-sm flex items-center justify-center">
            <Laugh className="w-3 h-3 mr-1" />
            <span>{timeGreeting}</span>
          </p>
        </div>
      </div>
      
      <div className="w-full max-w-5xl px-4 md:px-0 relative z-10">
        {/* Simplified card with lighter effects */}
        <div className="rounded-xl shadow-xl bg-gray-900/80 backdrop-blur-md border border-gray-700/50 flex flex-col md:flex-row overflow-hidden transition-all duration-300 hover:shadow-purple-800/30">
          {/* Left Side - Login Form */}
          <div className="md:w-1/2">
            {/* Login Header with simplified styling */}
            <div className="p-6 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-sm text-white rounded-t-xl md:rounded-tr-none md:rounded-tl-xl relative overflow-hidden">
              <div className="flex items-center justify-center mb-2">
                <div className="relative">
                  <Skull className="w-10 h-10 mr-3" strokeWidth={2} />
                  <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold">Gundagardi Login</h1>
              </div>
              <p className="text-center text-white/90 text-sm">
                Padhai karne ke liye login kar le bhai!
              </p>
            </div>
            
            {/* Login Form with simplified styling */}
            <div className="p-6 bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-sm">
              {error && showFunnyError && (
                <div className="mb-4 p-3 rounded-lg border-l-4 bg-red-900/40 backdrop-blur-sm border-red-700 text-red-200 flex items-start">
                  <Skull className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="font-medium text-sm">{error}</p>
                </div>
              )}
              
              {/* Login Credentials Hint Box */}
              {showLoginHints && (
                <div className="mb-4 p-3 rounded-lg bg-blue-900/40 backdrop-blur-sm border border-blue-700/50 text-blue-200">
                  <div className="flex items-center mb-1">
                    <ShieldAlert className="w-4 h-4 mr-2 text-blue-400" />
                    <h3 className="font-bold text-sm">Login Credentials:</h3>
                  </div>
                  <div className="pl-6 space-y-1 text-xs">
                    <p><span className="font-medium">Admin:</span> username: <code className="bg-blue-900/70 px-1.5 py-0.5 rounded-md">admin</code> / password: <code className="bg-blue-900/70 px-1.5 py-0.5 rounded-md">admin</code></p>
                    <p><span className="font-medium">Student:</span> username: <code className="bg-blue-900/70 px-1.5 py-0.5 rounded-md">gunda</code> / password: <code className="bg-blue-900/70 px-1.5 py-0.5 rounded-md">gundagardi</code></p>
                    <p className="text-blue-300/80 italic">Or use any credentials to login directly</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Username <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center overflow-hidden border rounded-lg focus-within:ring-1 focus-within:border-transparent transition-all duration-200 border-gray-700/50 bg-gray-800/50 backdrop-blur-sm focus-within:ring-purple-500/50">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10">
                      <User className="h-4 w-4 text-gray-500" />
                    </div>
                    <input 
                      type="text" 
                      className="flex-grow h-10 px-2 py-2 focus:outline-none bg-transparent text-white placeholder-gray-500"
                      placeholder="Apna naam likh bhai..." 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">
                    Try "admin" or "gunda" (or click "Show Login Hints" below)
                  </span>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center overflow-hidden border rounded-lg focus-within:ring-1 focus-within:border-transparent transition-all duration-200 border-gray-700/50 bg-gray-800/50 backdrop-blur-sm focus-within:ring-purple-500/50">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10">
                      <Key className="h-4 w-4 text-gray-500" />
                    </div>
                    <input 
                      type={showPassword ? 'text' : 'password'} 
                      className="flex-grow h-10 px-2 py-2 focus:outline-none bg-transparent text-white placeholder-gray-500"
                      placeholder="Password daal, koi dekh nahi raha..." 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10">
                      <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)} 
                        className="text-gray-500 hover:text-purple-400 focus:outline-none transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {showPassword ? "Dhyaan se dekh password" : "Password chupaya hai, click eye to show"}
                  </span>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-purple-700/90 to-indigo-700/90 backdrop-blur-sm hover:from-purple-600/90 hover:to-indigo-600/90 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center mt-2 shadow-md transition-all duration-300 hover:shadow-lg ${isLoading ? 'opacity-80' : ''}`}
                >
                  {isLoading ? (
                    <motion.div 
                      className="flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      <span>Ghusne Ka Prayas...</span>
                    </motion.div>
                  ) : (
                    <>
                      <span className="mr-2">Ghus Ja Andar</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
                
                <div className="text-center text-gray-400 mt-2">
                  <p className="text-sm mb-2">
                    Password yaad nahi? <br />
                    <span className="font-bold text-red-500">Tere notes bhi yaad nahi honge exam mein!</span>
                  </p>
                  <button 
                    type="button" 
                    onClick={toggleLoginHints}
                    className="text-xs text-blue-400 hover:text-blue-300 underline focus:outline-none transition-colors"
                  >
                    {showLoginHints ? "Hide Login Hints" : "Show Login Hints"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Right Side - About and Support with simplified styling */}
          <div className="md:w-1/2 flex flex-col">
            {/* About Section */}
            <div className="p-6 bg-gray-800/80 backdrop-blur-sm flex-grow flex flex-col justify-center">
              <div className="bg-gray-900/60 backdrop-blur-sm p-5 rounded-xl border border-gray-700/50 relative shadow-md transition-transform duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                <div className="flex items-center mb-3">
                  <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
                  <h3 className="font-bold text-lg text-white">
                    GUNDAGARDI KAHAANI
                  </h3>
                </div>
                <p className="text-gray-300 text-sm rounded-lg">
                  Maine, Kunal Yadav, ye site apne dost Pranit (aka Peanut) ki wajah se banayi hai. Woh bhi ek Gunda hai! 
                  ShoutoLearn se Ad-free content mil sake isliye yeh site banayi.
                </p>

                <div className="mt-4">
                  <h4 className="font-bold text-base mb-1 text-gray-200">
                    WHY GUNDAGARDI?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    ICSE Hindi ke students ke liye ye ek tarah ka bhagwan ka uphaar hai. 
                    Exam me marks laana aur teachers ke notes padhna - dono hi mushkil kaam hai.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Support Section */}
            <div className="p-6 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm md:rounded-br-xl">
              <div className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700/50 flex items-center shadow-md transition-transform duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                <div className="mr-4 flex-shrink-0">
                  <div className="bg-yellow-500/20 w-12 h-12 rounded-full flex items-center justify-center shadow-md border border-yellow-500/20">
                    <DollarSign className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-base text-white mb-1">Gunda Movement Ko Support Karo</h3>
                  <p className="text-gray-300 mb-3 text-sm">
                    Main bahut gareeb hoon. Gundagardi movement ke liye WhatsApp pe support karo.
                  </p>
                  <a
                    href="https://wa.me/+919044472406?text=Gundagardi%20movement%20ko%20support%20karne%20ke%20liye%20paise%20bhejne%20hai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center py-2 px-4 rounded-lg bg-green-700/90 hover:bg-green-600/90 backdrop-blur-sm text-white transition-all duration-300 shadow-md text-sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-1.5" />
                    <span>WhatsApp Par Support Karo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Simplified footer */}
        <div className="text-center mt-4">
          <p className="text-xs font-medium text-gray-300 bg-black/40 backdrop-blur-sm p-2 rounded-lg inline-block border border-gray-800/30 shadow-md">
            &copy; 2025 Gundagardi - Future mein bhi tumko fail karayenge!
            <span className="inline-block ml-1 text-yellow-500">
              <Sparkles className="w-3 h-3 inline" />
            </span>
          </p>
        </div>
      </div>
      
      {/* Simplified version info */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <div className="bg-gray-900/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-green-700/30 shadow-md">
          <div className="flex items-center justify-center space-x-2 text-xs">
            <span className="text-green-400 font-medium">v3.00 Stable</span>
            <span className="h-2.5 w-px bg-gray-700"></span>
            <span className="text-white/70">First version of Gundagardi app</span>
          </div>
        </div>
      </div>
      
      {/* Simplified CSS */}
      <style jsx="true">{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.3; }
        }
        
        /* Override body background when login page is active */
        body.login-page {
          background: transparent !important;
        }
      `}</style>
    </div>
  );
};

export default LoginPage; 