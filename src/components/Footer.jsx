import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiGithub, FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { Heart, Github, Twitter, Coffee, Mail, Skull, DollarSign, MessageCircle, Star, Laptop } from 'lucide-react'

function Footer({ isDarkMode }) {
  const textClass = isDarkMode ? 'text-dark-text-secondary' : 'text-gray-600';
  const bgClass = isDarkMode ? 'bg-dark-bg-secondary/80 backdrop-blur-md' : 'bg-white/70 backdrop-blur-md';
  const borderClass = isDarkMode ? 'border-dark-bg-tertiary' : 'border-gray-200';

  const currentYear = new Date().getFullYear()
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }
  
  return (
    <footer className={`${bgClass} transition-colors duration-300`}>
      <div className="content-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Skull className="w-6 h-6 text-red-600 mr-2" strokeWidth={2.5} />
              <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Gundagardi</span>
            </div>
            <p className={`${textClass} mb-4`}>
              Your ultimate resource for ICSE Hindi literature. Curated answers, comprehensive analyses, and simplified explanations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`${textClass} hover:text-primary-500 transition-colors`}>
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className={`${textClass} hover:text-primary-500 transition-colors`}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className={`${textClass} hover:text-primary-500 transition-colors`}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Stories', 'Poems', 'Dictionary'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className={`${textClass} hover:text-primary-500 transition-colors`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Stories</h3>
            <ul className="space-y-2">
              {[
                'Baat Athanni Ki', 
                'Kaki', 
                'Maha Yagya Ka Puruskar', 
                'Netaji Ka Chasma', 
                'Apna Apna Bhagya'
              ].map((item) => (
                <li key={item}>
                  <Link to={`/stories/${item.toLowerCase().replace(/\s+/g, '-')}`} className={`${textClass} hover:text-primary-500 transition-colors`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className={`font-semibold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Poems</h3>
            <ul className="space-y-2">
              {[
                'Manushyata', 
                'Parvat Pradesh Ke Vasant', 
                'Madhur Madhur Mere Deepak Jal', 
                'Asadhya Veena', 
                'Yeh Danturit Muskan'
              ].map((item) => (
                <li key={item}>
                  <Link to={`/poems/${item.toLowerCase().replace(/\s+/g, '-')}`} className={`${textClass} hover:text-primary-500 transition-colors`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Gundagardi Origin Story */}
        <div className={`mt-8 p-6 rounded-lg ${isDarkMode ? 'bg-dark-bg-tertiary/90 backdrop-blur-md' : 'bg-yellow-50/90 backdrop-blur-md'} border ${isDarkMode ? 'border-gray-700' : 'border-yellow-200'}`}>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Star className={`h-8 w-8 ${isDarkMode ? 'text-yellow-500' : 'text-yellow-600'}`} />
              </motion.div>
            </div>
            <div>
              <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>The Gundagardi Origin Story</h3>
              <p className={`${textClass} mb-3`}>
                Maine, <span className="font-bold">Kunal Yadav</span>, ye site apne dost <span className="font-bold text-green-500">Pranit (aka Peanut)</span> ki wajah se banayi hai, jo ek 
                mahatwapurn Gunda hai! ShoutoLearn se ad-free content mil sake isliye yeh site banayi taki saare Gundas yahan se 
                asaani se cheating kar sake! No ads, direct answers!
              </p>
              <div className="flex items-center">
                <DollarSign className={`h-5 w-5 mr-2 ${isDarkMode ? 'text-yellow-500' : 'text-yellow-600'}`} />
                <p className={`text-sm ${textClass}`}>
                  Main bahut gareeb hoon. Gundagardi movement ko support karne ke liye WhatsApp pe ₹0.5-₹1 bhej do.
                </p>
                <a 
                  href="https://wa.me/+919044472406?text=Gundagardi%20movement%20ko%20support%20karne%20ke%20liye%20paise%20bhejne%20hai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex items-center text-xs font-medium bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded"
                >
                  <MessageCircle className="w-3 h-3 mr-1" />
                  <span>Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Creator Credit with funny warning */}
      <div className="w-full bg-red-600 py-2 text-white relative overflow-hidden">
        <div className="content-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-sm font-bold">
              <span className="inline-block animate-pulse">⚠️</span> Created by Kunal Yadav, The OG Gunda | Copy nahi karna warna pitoge <span className="inline-block animate-pulse">⚠️</span>
            </p>
            <div className="flex items-center mt-2 md:mt-0">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-xs bg-yellow-500 text-gray-900 px-2 py-1 rounded-full font-bold ml-2"
              >
                Plagiarism = Pitai
              </motion.div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-red-700 rounded-full opacity-30 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-10 w-8 h-8 bg-red-500 rounded-full opacity-40 translate-y-1/2"></div>
      </div>
      
      <div className={`py-4 ${bgClass} border-t ${borderClass}`}>
        <div className="content-container">
          <p className={`text-center text-sm ${textClass}`}>
            &copy; {currentYear} Gundagardi - Passing ICSE Hindi since 2023. Made with 
            <Heart className="w-4 h-4 inline mx-1 text-red-500 fill-current" /> and 
            <Coffee className="w-4 h-4 inline mx-1 text-amber-700" />
          </p>
          <div className="flex items-center justify-center mt-2">
            <p className={`text-center text-xs ${textClass}`}>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs">Chetavni:</span> Agar fail ho gaye to humari zimmedari nahi hai!
            </p>
            <span className={`ml-3 text-xs py-0.5 px-2 rounded ${isDarkMode ? 'bg-green-700/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
              v2.69 Stable
            </span>
          </div>
          <p className={`text-center text-xs mt-2 ${textClass} italic`}>
            This is the second version of the app. For best experience, use on laptop or desktop.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 