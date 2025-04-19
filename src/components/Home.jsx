import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  BookOpen, BookMarked, Users, BookText, ArrowRight, LogIn, Skull, 
  MessageCircle, Share2, UserPlus, Heart, Coffee, Code, AlertCircle, 
  Construction, CheckCircle2, Crown, Clock, Zap, Brain, Timer, Gamepad2,
  Flame, Award, CalendarClock, ShieldAlert
} from 'lucide-react'
import BannerSlider from './BannerSlider'
import FeatureCard from './FeatureCard'

const Home = ({ isDarkMode }) => {
  const features = [
    {
      id: 1,
      title: 'Curated Stories',
      description: 'Discover handpicked stories across various genres and cultures',
      icon: <BookText className="w-8 h-8" />
    },
    {
      id: 2,
      title: 'Poetic Expressions',
      description: 'Explore emotions through rhythmic verses and poetic brilliance',
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: 3,
      title: 'Literary Community',
      description: 'Connect with fellow literature enthusiasts and share your thoughts',
      icon: <Users className="w-8 h-8" />
    }
  ];
  
  // Define classes based on theme - updated for compatibility with the new app background
  const bgClass = isDarkMode ? '' : ''; // Removed bg classes to let app background show through
  const sectionBgClass = isDarkMode ? 'bg-dark-bg-secondary/70 backdrop-blur-md' : 'bg-white/30 backdrop-blur-md'; // Added transparency and backdrop blur
  const textClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const secondaryTextClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`container mx-auto px-4 py-8 ${textClass} relative`}
    >
      {/* Fixed persistent background gradients - same as StoriesPage and PoemsPage */}
      <div className="fixed top-0 left-0 w-full h-full -z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-500/40 blur-[100px] opacity-100"></div>
        <div className="absolute bottom-[20%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-blue-500/40 blur-[100px] opacity-100"></div>
        <div className="absolute top-[40%] right-[30%] w-[30vw] h-[30vw] rounded-full bg-pink-500/40 blur-[100px] opacity-100"></div>
      </div>

      {/* Fun Random Quote Generator with glassmorphism */}
      <motion.div 
        className={`mb-8 p-5 rounded-lg ${isDarkMode ? 'glassmorphism-dark' : 'glassmorphism-light'} border ${isDarkMode ? 'border-yellow-700/30' : 'border-yellow-200/60'} shadow-lg relative z-10`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-start">
          <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-yellow-700' : 'bg-yellow-400'} flex items-center justify-center flex-shrink-0 mr-4`}>
            <Skull className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-700'}`}>Today's Gundagardi Advice</h3>
            <p className={`${isDarkMode ? 'text-yellow-300' : 'text-yellow-800'} italic text-lg mb-2`}>
              "Jaldi se notes complete kar le, nahi toh exam mein royal wala L lag jayega!"
            </p>
            <div className="flex justify-end">
              <motion.button 
                className={`text-sm px-3 py-1 rounded-full ${isDarkMode ? 'bg-yellow-800 hover:bg-yellow-700 text-yellow-300' : 'bg-yellow-300 hover:bg-yellow-400 text-yellow-900'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Another Advice
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Legal Disclaimer */}
      <div className={`mb-8 p-5 rounded-lg ${isDarkMode ? 'bg-amber-900/30' : 'bg-amber-50'} border ${isDarkMode ? 'border-amber-700/30' : 'border-amber-200'} shadow-lg relative z-10`}>
        <div className="flex items-start">
          <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-amber-800/70' : 'bg-amber-100'} flex items-center justify-center flex-shrink-0 mr-4 shadow-md`}>
            <ShieldAlert className={`w-6 h-6 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
          </div>
          <div>
            <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-amber-400' : 'text-amber-700'}`}>Legal Disclaimer</h3>
            <p className={`${isDarkMode ? 'text-amber-300' : 'text-amber-800'} text-base mb-2`}>
              The data displayed on this website is entirely fictional and provided for entertainment purposes only. 
              None of the information should be considered real, factual, or used for academic purposes.
            </p>
            <p className={`${isDarkMode ? 'text-amber-300/80' : 'text-amber-700/80'} text-sm italic`}>
              This website is a creative project and not intended to be a reliable source for study or reference.
              Using this content for actual academic work is at your own risk and not recommended.
            </p>
          </div>
        </div>
      </div>

      

      {/* Disclaimer Alert with glassmorphism */}
      <div className={`mb-8 p-4 rounded-lg border-l-4 ${isDarkMode ? 'glassmorphism-dark border-blue-500/70' : 'glassmorphism-light border-blue-500/70'} flex items-start shadow-md relative z-10`}>
        <AlertCircle className={`w-6 h-6 mr-3 flex-shrink-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
        <div>
          <h3 className={`font-bold ${isDarkMode ? 'text-blue-300' : 'text-blue-700'} mb-1`}>IMPORTANT NOTICE</h3>
          <p className={`${isDarkMode ? 'text-blue-200' : 'text-blue-700'} mb-2`}>
            No one should be offended by the humorous elements on this website. They are meant for entertainment only, please don't take them seriously.
          </p>
          <p className={`${isDarkMode ? 'text-blue-200' : 'text-blue-700'} mb-2`}>
            I created this app specifically to provide answers in a productive way. It is a study aid for ICSE Hindi students. - by Kunal Yadav
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <div className="flex items-center">
              <Construction className={`w-4 h-4 mr-1 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
              <span className={`text-xs ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>Some features are under development and coming soon</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className={`w-4 h-4 mr-1 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              <span className={`text-xs ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>Poems and Stories are now available</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`glassmorphism-card ${isDarkMode ? 'glassmorphism-dark' : 'glassmorphism-light'} rounded-xl shadow-xl p-8 mb-10 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} relative z-10`}>
        <div className="flex items-center justify-center mb-6">
          <Skull size={48} className={`${isDarkMode ? 'text-red-500' : 'text-red-600'} mr-4`} strokeWidth={2.5} />
          <h1 className={`text-4xl font-extrabold ${isDarkMode ? 'text-red-500' : 'text-red-600'}`}>
            GUNDAGARDI
          </h1>
        </div>
        
        <h2 className={`text-2xl font-bold text-center mb-6 ${isDarkMode ? 'text-yellow-400' : 'text-amber-600'}`}>
          ICSE Class 10 Hindi Ka Sabse Dabbang Collection
        </h2>
        
        <p className={`text-xl mb-6 ${secondaryTextClass}`}>
          <span className="font-bold text-2xl">Abe Padhai Kar Le Bewakoof!</span> Yaha se mil jayega tere ICSE Class 10 Hindi ke poems aur stories ke saare sawaal jawab. 
          Ab exam mein fail hone ka bahana nahi chahiye!
        </p>
        
        {/* WhatsApp Group Join Section with glassmorphism */}
        <div className={`mb-8 p-4 rounded-lg border-2 ${isDarkMode ? 'glassmorphism-dark border-green-600/50' : 'glassmorphism-light border-green-500/30'} shadow-lg`}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-600/80 backdrop-blur-sm flex items-center justify-center mr-3 shadow-md">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Join the Gundagardi Movement!</h3>
              </div>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Join our WhatsApp group to connect with fellow Gundas! Share notes, last-minute tips, and support each other.
              </p>
              <ul className="mt-2 space-y-1">
                <li className="flex items-center">
                  <Share2 className={`w-4 h-4 mr-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                  <span className={`text-sm ${secondaryTextClass}`}>Share answers and summaries</span>
                </li>
                <li className="flex items-center">
                  <BookText className={`w-4 h-4 mr-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                  <span className={`text-sm ${secondaryTextClass}`}>Access exclusive exam tips</span>
                </li>
                <li className="flex items-center">
                  <UserPlus className={`w-4 h-4 mr-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                  <span className={`text-sm ${secondaryTextClass}`}>Connect with other Gundas</span>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="https://chat.whatsapp.com/GwbCqZJTIKbKKY4tugMOqw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block py-3 px-6 rounded-lg font-bold text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 flex items-center`}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Pe Join Karo
                </a>
              </motion.div>
              <p className="text-center mt-2 text-xs text-gray-500">Already 500+ Gundas!</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'glassmorphism-dark border border-gray-700/30' : 'glassmorphism-light border border-gray-200/50'}`}>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>
              Poems Collections
            </h3>
            <p className={`mb-4 ${secondaryTextClass}`}>
              Kavita samjhna mushkil hai? Tension na le, humne tere liye sab tod ke rakh diya hai. 
              Ab bas padh aur pass ho ja!
            </p>
            <Link 
              to="/poems" 
              className={`inline-block py-2 px-4 rounded-lg font-medium ${
                isDarkMode 
                  ? 'bg-pink-600/90 hover:bg-pink-700/90 text-white backdrop-blur-sm' 
                  : 'bg-pink-500/90 hover:bg-pink-600/90 text-white backdrop-blur-sm'
              } transition-colors duration-300 shadow-md`}
            >
              Poems Dekh Le Jaldi
            </Link>
          </div>
          
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'glassmorphism-dark border border-gray-700/30' : 'glassmorphism-light border border-gray-200/50'}`}>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Stories Collections
            </h3>
            <p className={`mb-4 ${secondaryTextClass}`}>
              Stories mein atka hua hai? Chinta mat kar, 
              humne sab kuch point-to-point explain kar diya hai.
            </p>
            <Link 
              to="/stories" 
              className={`inline-block py-2 px-4 rounded-lg font-medium ${
                isDarkMode 
                  ? 'bg-blue-600/90 hover:bg-blue-700/90 text-white backdrop-blur-sm' 
                  : 'bg-blue-500/90 hover:bg-blue-600/90 text-white backdrop-blur-sm'
              } transition-colors duration-300 shadow-md`}
            >
              Stories Par Chal
            </Link>
          </div>
        </div>
        
        <div className={`p-6 rounded-lg ${isDarkMode ? 'glassmorphism-dark border-red-700/30' : 'glassmorphism-light border-red-300/50'} border shadow-lg`}>
          <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`}>
            ⚠️ CHETAVNI ⚠️
          </h3>
          <p className={`${secondaryTextClass} font-medium`}>
            Agar tune ye material use karke bhi exam mein fail ho gaya, to samajh le teri kismat hi kharab hai. 
            Phir bhi apne teacher ko mat bolna ki "Gundagardi" site se cheating ki thi.
            Baad mein pitega to hum zimmedar nahi!
          </p>
        </div>
      </div>
      
      {/* Exam Countdown Timer with glassmorphism */}
      <motion.div 
        className={`mb-10 p-6 rounded-xl shadow-lg ${isDarkMode ? 'glassmorphism-dark border-red-800/30' : 'glassmorphism-light border-red-300/50'} border`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className={`text-2xl font-bold mb-4 text-center ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
          <span className="inline-block animate-pulse"><CalendarClock className="w-6 h-6 inline-block mr-2" /></span> Exam Panic Counter
        </h3>
        <div className="flex justify-center space-x-4 mb-6">
          <div className={`w-20 h-20 rounded-lg flex flex-col items-center justify-center shadow-md backdrop-blur-sm ${isDarkMode ? 'bg-red-900/20 border border-red-800/30' : 'bg-red-100/80 border border-red-200/50'}`}>
            <span className={`text-2xl font-bold ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>29</span>
            <span className={`text-xs ${isDarkMode ? 'text-red-500' : 'text-red-700'}`}>Days</span>
          </div>
          <div className={`w-20 h-20 rounded-lg flex flex-col items-center justify-center shadow-md backdrop-blur-sm ${isDarkMode ? 'bg-orange-900/20 border border-orange-800/30' : 'bg-orange-100/80 border border-orange-200/50'}`}>
            <span className={`text-2xl font-bold ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>12</span>
            <span className={`text-xs ${isDarkMode ? 'text-orange-500' : 'text-orange-700'}`}>Hours</span>
          </div>
          <div className={`w-20 h-20 rounded-lg flex flex-col items-center justify-center shadow-md backdrop-blur-sm ${isDarkMode ? 'bg-yellow-900/20 border border-yellow-800/30' : 'bg-yellow-100/80 border border-yellow-200/50'}`}>
            <span className={`text-2xl font-bold ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>45</span>
            <span className={`text-xs ${isDarkMode ? 'text-yellow-500' : 'text-yellow-700'}`}>Minutes</span>
          </div>
        </div>
        <div className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
          <p className="text-lg font-medium">Time left until your Hindi board exam</p>
          <p className="text-sm italic">Ab toh tension hoga na? <Skull className="w-4 h-4 inline-block" /></p>
        </div>
        <div className="flex justify-center">
          <motion.button 
            className={`px-4 py-2 rounded-lg font-medium ${isDarkMode ? 'bg-red-700 hover:bg-red-600 text-white' : 'bg-red-600 hover:bg-red-700 text-white'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Studying Now!
          </motion.button>
        </div>
      </motion.div>
      
      {/* Student Achievement Section with glassmorphism */}
      <motion.div 
        className={`mb-10 p-6 rounded-xl ${isDarkMode ? 'glassmorphism-dark' : 'glassmorphism-light'} shadow-lg border ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/50'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h3 className={`text-2xl font-bold mb-6 text-center ${textClass}`}>
          Gunda Students' Success Stories <Award className="w-6 h-6 inline-block ml-1" />
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'glassmorphism-dark border border-gray-700/20' : 'glassmorphism-light border border-gray-200/30'}`}>
            <div className="flex items-center mb-3">
              <img src="https://api.dicebear.com/6.x/avataaars/svg?seed=Ram" alt="Student" className={`w-12 h-12 rounded-full mr-4 border-2 ${isDarkMode ? 'border-purple-700/30' : 'border-purple-300/50'}`} />
              <div>
                <h4 className={`font-semibold ${textClass}`}>Ram Kumar</h4>
                <p className={`text-xs ${secondaryTextClass}`}>ICSE Student, Delhi</p>
              </div>
            </div>
            <p className={`${secondaryTextClass} text-sm italic`}>
              "Gundagardi se phele mujhe Hindi me D grade milta tha, ab A+ aata hai! Mere teacher ko shak hua ki main cheating karta hoon!"
            </p>
            <div className="mt-2 flex">
              <span className="text-yellow-500">★★★★★</span>
            </div>
          </div>
          
          <div className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'glassmorphism-dark border border-gray-700/20' : 'glassmorphism-light border border-gray-200/30'}`}>
            <div className="flex items-center mb-3">
              <img src="https://api.dicebear.com/6.x/avataaars/svg?seed=Priya" alt="Student" className={`w-12 h-12 rounded-full mr-4 border-2 ${isDarkMode ? 'border-purple-700/30' : 'border-purple-300/50'}`} />
              <div>
                <h4 className={`font-semibold ${textClass}`}>Priya Singh</h4>
                <p className={`text-xs ${secondaryTextClass}`}>ICSE Student, Mumbai</p>
              </div>
            </div>
            <p className={`${secondaryTextClass} text-sm italic`}>
              "Mujhe Hindi grammatically likhna nahi aata tha. Is site ke wajah se meri Hindi ki preparation ekdum top level ho gayi!"
            </p>
            <div className="mt-2 flex">
              <span className="text-yellow-500">★★★★★</span>
            </div>
          </div>
          
          <div className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'glassmorphism-dark border border-gray-700/20' : 'glassmorphism-light border border-gray-200/30'}`}>
            <div className="flex items-center mb-3">
              <img src="https://api.dicebear.com/6.x/avataaars/svg?seed=Abhi" alt="Student" className={`w-12 h-12 rounded-full mr-4 border-2 ${isDarkMode ? 'border-purple-700/30' : 'border-purple-300/50'}`} />
              <div>
                <h4 className={`font-semibold ${textClass}`}>Abhi Sharma</h4>
                <p className={`text-xs ${secondaryTextClass}`}>ICSE Student, Bangalore</p>
              </div>
            </div>
            <p className={`${secondaryTextClass} text-sm italic`}>
              "WhatsApp group se mujhe last minute questions mile, exactly wahi paper mein aaye! Ab main school ka topper ban gaya hoon!"
            </p>
            <div className="mt-2 flex">
              <span className="text-yellow-500">★★★★★</span>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <motion.p 
            className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} font-medium`}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            You could be our next success story! <Zap className="w-4 h-4 inline-block" />
          </motion.p>
        </div>
      </motion.div>
      
      <BannerSlider />
      
      <section className={`content-container py-20 ${bgClass}`}>
        <div className="text-center mb-16">
          <span className="px-4 py-2 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4 inline-block">Welcome to Sahitya Sagar</span>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${textClass}`}>Explore the World of Literature</h2>
          <p className={`${secondaryTextClass} max-w-3xl mx-auto text-lg`}>
            Immerse yourself in the ocean of literature, where stories flow and poetry breathes.
            Explore the depth of human emotions through carefully curated literary works.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map(feature => (
            <FeatureCard key={feature.id} feature={feature} isDarkMode={isDarkMode} />
          ))}
        </div>
      </section>
      
      <section className={`py-24 ${sectionBgClass}`}>
        <div className="content-container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <img 
                src="https://mixedidioms.co.uk/wp-content/uploads/2020/05/mockup-f2f171b3.jpg" 
                alt="Reading corner" 
                className="rounded-xl shadow-2xl transform md:rotate-2 transition-all duration-500 hover:rotate-0"
              />
            </div>
            <div className="md:w-1/2 md:pl-16">
              <span className="px-4 py-2 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4 inline-block">New Perspectives</span>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${textClass}`}>Discover Literary Treasures</h2>
              <p className={`${secondaryTextClass} mb-8 text-lg`}>
                Literature opens doors to new worlds and perspectives. At Sahitya Sagar, 
                we bring you stories and poems that challenge your thinking and broaden your horizons.
              </p>
              <button className="btn btn-primary flex items-center space-x-2">
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Add new Poems Section before the Short Stories Section */}
      <section className={`py-20 ${bgClass}`}>
        <div className="content-container">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4 inline-block">ICSE Class 10 कविताएँ</span>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textClass}`}>प्रसिद्ध कवियों की मशहूर कविताएँ</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, title: "साखी - कबीर दास" },
              { id: 2, title: "गिरिधर की कुंडलिया - गिरिधर कवि राय" },
              { id: 3, title: "स्वर्ग बना सकते है - रामधारी सिंह दिनकर" },
              { id: 4, title: "वह जन्मभूमि मेरी - सोहनलाल द्विवेदी" },
              { id: 5, title: "मेघ आए - सर्वेश्वर दयाल सक्सेना" },
              { id: 6, title: "सूर के पद - सूरदास" }
            ].map((poem) => (
              <motion.div 
                key={poem.id}
                className={`card ${isDarkMode ? 'bg-dark-bg-secondary' : 'bg-white'} hover:border-primary-500 relative overflow-hidden`}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
                  borderColor: isDarkMode ? 'rgba(124, 58, 237, 0.5)' : 'rgba(124, 58, 237, 0.3)'
                }}
              >
                {/* Add a persistent background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  isDarkMode 
                    ? 'from-amber-700/30 to-red-700/30' 
                    : 'from-amber-500/20 to-red-500/20'
                } opacity-80 pointer-events-none z-0`}></div>
                
                <div className="flex justify-between items-start relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-red-600 text-white text-xl font-bold mr-4 shadow-lg">
                    {poem.id}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold ${textClass} mb-3`}>{poem.title}</h3>
                    <Link to={`/poems/${poem.id}/qa`} className={`${isDarkMode ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-700'} inline-flex items-center space-x-1`}>
                      <span>प्रश्न-उत्तर देखें</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/poems" className="btn btn-primary flex items-center space-x-2 mx-auto w-fit">
              <BookText className="w-5 h-5" />
              <span>सभी कविताएँ देखें</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Short Stories Section - Updated with Hindi titles */}
      <section className={`py-20 ${bgClass}`}>
        <div className="content-container">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4 inline-block">ICSE Class 10 कहानियाँ</span>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textClass}`}>प्रसिद्ध कहानीकारों की मशहूर कहानियाँ</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, title: "बात अठन्नी की - सुदर्शन" },
              { id: 2, title: "काकी - सियाराम शरण गुप्ता" },
              { id: 3, title: "महायज्ञ का पुरस्कार - यशपाल" },
              { id: 4, title: "नेता जी का चश्मा - स्वयं प्रकाश" },
              { id: 5, title: "अपना अपना भाग्य - जैनेंद्र कुमार" },
              { id: 6, title: "बड़े घर की बेटी - प्रेमचंद" }
            ].map((story) => (
              <motion.div 
                key={story.id}
                className={`card ${isDarkMode ? 'bg-dark-bg-secondary' : 'bg-white'} hover:border-primary-500 relative overflow-hidden`}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
                  borderColor: isDarkMode ? 'rgba(124, 58, 237, 0.5)' : 'rgba(124, 58, 237, 0.3)'
                }}
              >
                {/* Add a persistent background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  isDarkMode 
                    ? 'from-blue-700/30 to-purple-700/30' 
                    : 'from-blue-500/20 to-purple-500/20'
                } opacity-80 pointer-events-none z-0`}></div>
                
                <div className="flex justify-between items-start relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-800 text-white text-xl font-bold mr-4 shadow-lg">
                    {story.id}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold ${textClass} mb-3`}>{story.title}</h3>
                    <Link to={`/stories/${story.id}`} className={`${isDarkMode ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-700'} inline-flex items-center space-x-1`}>
                      <span>प्रश्न-उत्तर देखें</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/stories" className="btn btn-primary flex items-center space-x-2 mx-auto w-fit">
              <BookText className="w-5 h-5" />
              <span>सभी कहानियाँ देखें</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with WhatsApp Join */}
      <section className="py-24 bg-dark-bg-secondary/70 backdrop-blur-md relative overflow-hidden">
        <div className="content-container relative z-10">
          <div className={`${isDarkMode ? 'glassmorphism-dark' : 'glassmorphism-light'} p-10 md:p-16 rounded-2xl shadow-2xl border ${isDarkMode ? 'border-purple-700/30' : 'border-purple-200/60'}`}>
            <div className="text-center mb-10">
              <span className={`inline-block ${isDarkMode ? 'bg-white/10 text-white' : 'bg-primary-500/10 text-primary-600'} text-sm font-medium px-4 py-2 rounded-full mb-6`}>Join Us Today</span>
              <h2 className={`text-3xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-6`}>Ready to enhance your literary journey?</h2>
              <p className={`${isDarkMode ? 'text-white' : 'text-gray-700'} mb-10 max-w-2xl mx-auto text-lg`}>
                Join our community of literature enthusiasts and get access to exclusive content, discussions, and more.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link to="/login" className="btn bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center space-x-2">
                  <LogIn className="w-5 h-5" />
                  <span>Sign Up Now</span>
                </Link>
                <Link to="/poems" className={`btn ${isDarkMode ? 'bg-dark-bg-tertiary hover:bg-dark-bg-primary text-white' : 'bg-amber-100 hover:bg-amber-200 text-amber-900'} flex items-center justify-center space-x-2`}>
                  <BookOpen className="w-5 h-5" />
                  <span>Explore Poems</span>
                </Link>
              </div>
            </div>

            {/* WhatsApp Group Banner with glassmorphism */}
            <div className={`mt-8 p-6 rounded-xl ${isDarkMode ? 'glassmorphism-dark border-green-700/40' : 'glassmorphism-light border-green-500/40'} border shadow-lg backdrop-blur-md`}>
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 mb-6 md:mb-0">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 rounded-full bg-green-600/70 backdrop-blur-sm p-3 mr-4 shadow-md">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-green-800'} mb-1`}>Join the Gundagardi WhatsApp Group</h3>
                      <p className={`${isDarkMode ? 'text-white' : 'text-green-700'}`}>Connect with fellow gundas for notes, answers, and last-minute tips!</p>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://chat.whatsapp.com/GwbCqZJTIKbKKY4tugMOqw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600/90 hover:bg-green-700/90 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition-all shadow-md backdrop-blur-sm"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    <span>Join Now on WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </section>

      {/* Gundagardi Facts Section - Fun Element */}
      <section className={`py-16 ${bgClass}`}>
        {/* Developer Card */}
        <div className={`mb-10 p-7 rounded-xl ${isDarkMode ? 'glassmorphism-dark bg-gray-800/40' : 'glassmorphism-light bg-white/80'} relative overflow-hidden shadow-lg border ${isDarkMode ? 'border-purple-700/30' : 'border-purple-300/50'} z-10`}>
          <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full ${isDarkMode ? 'bg-purple-900/20' : 'bg-purple-500/10'}`}></div>
          <div className={`absolute -bottom-8 -left-8 w-32 h-32 rounded-full ${isDarkMode ? 'bg-blue-900/20' : 'bg-blue-500/10'}`}></div>
          <div className={`absolute top-10 right-24 text-xl ${isDarkMode ? 'text-purple-600/40' : 'text-purple-500/40'}`}>&lt;/&gt;</div>
          <div className={`absolute bottom-10 left-24 text-xl ${isDarkMode ? 'text-blue-600/40' : 'text-blue-500/40'}`}></div>
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
              <div className="mr-0 md:mr-6 mb-4 md:mb-0 relative">
                <div className="relative bg-gradient-to-br from-purple-500 to-indigo-600 p-3 rounded-xl shadow-lg">
                  <div>
                    <Code className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    Pro
                  </div>
                </div>
                
                <div className="flex -space-x-1 mt-2 justify-center">
                  <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center" title="Gold Developer">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center" title="UI Wizard">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center" title="Fast Coder">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} flex items-center`}>
                  <span>Developed by Kunal Yadav</span>
                  <div className="inline-block ml-2">
                    <Crown className="w-6 h-6 text-yellow-500" />
                  </div>
                </h3>
                
                <div className="flex items-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <p className="text-sm text-green-500">Currently online & available for projects</p>
                </div>
                
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
                  Made with <Heart className="w-4 h-4 inline mx-1 text-red-500 fill-current" /> and 
                  <Coffee className="w-4 h-4 inline mx-1 text-amber-700" /> passion for learning
                </p>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className={`text-xs inline-block px-2 py-0.5 rounded-full ${isDarkMode ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-600'}`}>#ReactJS</span>
                  <span className={`text-xs inline-block px-2 py-0.5 rounded-full ${isDarkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>#TailwindCSS</span>
                  <span className={`text-xs inline-block px-2 py-0.5 rounded-full ${isDarkMode ? 'bg-purple-900/50 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>#FramerMotion</span>
                  <span className={`text-xs inline-block px-2 py-0.5 rounded-full ${isDarkMode ? 'bg-yellow-900/50 text-yellow-400' : 'bg-yellow-100 text-yellow-600'}`}>#MERN Stack</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-3">
              <div tabindex="0">
                <a 
                  href="https://wa.me/+919044472406?text=Mujhe%20Gundagardi%20ke%20developer%20se%20baat%20karni%20hai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="py-2 px-4 rounded-lg text-sm flex items-center justify-center bg-green-600 hover:bg-green-500 text-white transition-all hover:shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Developer
                </a>
              </div>
              
              <div tabindex="0">
                <a 
                  href="https://github.com/rohanyadav2010/gundagardi-app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`py-2 px-4 rounded-lg text-sm flex items-center justify-center ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'} text-white transition-all hover:shadow-lg`}
                >
                  <Code className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </div>
              
              <div className={`text-xs text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mt-2`}>
                <div className="flex justify-center">
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <span>Rated 5.0 by 100+ students</span>
              </div>
            </div>
          </div>
          
          <div className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <div className="flex justify-between mb-1">
              <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Development Experience</span>
              <span className={`text-xs font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>98%</span>
            </div>
            <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
              <motion.div 
                className="bg-blue-600 h-2 rounded-full" 
                initial={{ width: "0%" }}
                animate={{ width: "98%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
{/* Source Code GitHub Note */}
<div className={`mb-8 p-5 rounded-lg ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'} border ${isDarkMode ? 'border-blue-700/30' : 'border-blue-200'} shadow-lg relative z-10`}>
        <div className="flex items-start">
          <div className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-blue-800/70' : 'bg-blue-100'} flex items-center justify-center flex-shrink-0 mr-4 shadow-md`}>
            <Code className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          <div>
            <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>Source Code Available</h3>
            <p className={`${isDarkMode ? 'text-blue-300' : 'text-blue-800'} text-base mb-2`}>
              The complete source code for this app developed by me will be available on my GitHub page.
              Feel free to check it out, star the repository, or contribute to its development!
            </p>
            <div className="mt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a 
                  href="https://github.com/rohanyadav2010" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`py-2 px-4 rounded-lg text-sm flex items-center ${isDarkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-all hover:shadow-lg`}
                >
                  <Code className="w-4 h-4 mr-2" />
                  Visit GitHub Repository
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
        <div className="content-container">
          <div className="text-center mb-10">
            <span className={`inline-block px-4 py-1 rounded-full ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'} text-sm font-medium mb-4`}>
              Did You Know?
            </span>
            <h2 className={`text-3xl font-bold ${textClass}`}>Gundagardi Facts</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className={`p-5 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} relative overflow-hidden`}
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                borderColor: isDarkMode ? 'rgba(239, 68, 68, 0.5)' : 'rgba(239, 68, 68, 0.3)'
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Persistent gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                isDarkMode ? 'from-red-900/20 to-red-800/20' : 'from-red-100/60 to-red-50/60'
              } opacity-90 pointer-events-none z-0`}></div>
              
              <div className="flex items-start relative z-10">
                <div className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-red-900/50' : 'bg-red-100'} flex items-center justify-center mr-4`}>
                  <Flame className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className={`font-bold mb-2 ${textClass}`}>Fact #1: ICSE Hindi ka Raaz</h3>
                  <p className={`${secondaryTextClass}`}>
                    95% of Gundagardi users improve their Hindi grades by at least two levels. Our WhatsApp group has over 500+ active members helping each other!
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className={`p-5 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} relative overflow-hidden`}
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                borderColor: isDarkMode ? 'rgba(16, 185, 129, 0.5)' : 'rgba(16, 185, 129, 0.3)'
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Persistent gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                isDarkMode ? 'from-green-900/20 to-green-800/20' : 'from-green-100/60 to-green-50/60'
              } opacity-90 pointer-events-none z-0`}></div>
              
              <div className="flex items-start relative z-10">
                <div className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-green-900/50' : 'bg-green-100'} flex items-center justify-center mr-4`}>
                  <Brain className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className={`font-bold mb-2 ${textClass}`}>Fact #2: Memory Trick</h3>
                  <p className={`${secondaryTextClass}`}>
                    Students who read our poem explanations remember 3x more content during exams. Our funny hindi phrases help lock information in your brain!
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className={`p-5 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} relative overflow-hidden`}
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                borderColor: isDarkMode ? 'rgba(124, 58, 237, 0.5)' : 'rgba(124, 58, 237, 0.3)'
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Persistent gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                isDarkMode ? 'from-purple-900/20 to-purple-800/20' : 'from-purple-100/60 to-purple-50/60'
              } opacity-90 pointer-events-none z-0`}></div>
              
              <div className="flex items-start relative z-10">
                <div className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-purple-900/50' : 'bg-purple-100'} flex items-center justify-center mr-4`}>
                  <Timer className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className={`font-bold mb-2 ${textClass}`}>Fact #3: Time Saver</h3>
                  <p className={`${secondaryTextClass}`}>
                    Students save an average of 10 hours of study time per week by using our pre-written answers and notes. More time for games, less stress for exams!
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className={`p-5 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} relative overflow-hidden`}
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                borderColor: isDarkMode ? 'rgba(245, 158, 11, 0.5)' : 'rgba(245, 158, 11, 0.3)'
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Persistent gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                isDarkMode ? 'from-yellow-900/20 to-yellow-800/20' : 'from-yellow-100/60 to-yellow-50/60'
              } opacity-90 pointer-events-none z-0`}></div>
              
              <div className="flex items-start relative z-10">
                <div className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-yellow-900/50' : 'bg-yellow-100'} flex items-center justify-center mr-4`}>
                  <Gamepad2 className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className={`font-bold mb-2 ${textClass}`}>Fact #4: Gaming Connection</h3>
                  <p className={`${secondaryTextClass}`}>
                    Did you know? The creator of Gundagardi is also a professional gamer! That's why our study materials are designed to be fun and engaging like games.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className={`mt-10 p-4 rounded-lg ${isDarkMode ? 'bg-purple-900/20' : 'bg-purple-50'} text-center`}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className={`${isDarkMode ? 'text-purple-300' : 'text-purple-700'} font-medium`}>
              Kya hua? Ab convince ho gaya na ki Gundagardi join karne ka time aa gaya hai? <Award className="w-5 h-5 inline-block" />
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home; 