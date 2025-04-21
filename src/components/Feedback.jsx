import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Star, 
  Send, 
  ThumbsUp, 
  AlertCircle, 
  CheckCircle, 
  Info, 
  X,
  Heart,
  User,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SHEETDB_API_URL } from '../config';

const Feedback = ({ isDarkMode, glassmorphismClass, isAdmin }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [feedbackError, setFeedbackError] = useState('');
  
  // Text classes based on theme
  const textClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const secondaryTextClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const accentClass = isDarkMode ? 'text-purple-400' : 'text-purple-600';
  
  // Feedback categories
  const categories = [
    { id: 'general', name: 'General Feedback', color: isDarkMode ? 'bg-blue-600/30' : 'bg-blue-100' },
    { id: 'bug', name: 'Bug Report', color: isDarkMode ? 'bg-red-600/30' : 'bg-red-100' },
    { id: 'feature', name: 'Feature Request', color: isDarkMode ? 'bg-green-600/30' : 'bg-green-100' },
    { id: 'content', name: 'Content Suggestion', color: isDarkMode ? 'bg-amber-600/30' : 'bg-amber-100' }
  ];
  
  // Handle star rating
  const handleRating = (value) => {
    setRating(value);
  };
  
  // Function to submit data to SheetDB
  const submitToSheetDB = async (feedbackData) => {
    try {
      // Check if the API URL has been configured
      if (SHEETDB_API_URL === 'https://sheetdb.io/api/v1/your_sheetdb_api_id') {
        console.warn('SheetDB API URL not configured. Please update config.js with your SheetDB API URL.');
        // For development, we'll simulate success
        return { 
          success: true, 
          data: { created: true },
          warning: 'Using development mode. In production, configure SHEETDB_API_URL in config.js'
        };
      }
      
      const response = await fetch(SHEETDB_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [feedbackData]
        })
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response error (${response.status}): ${errorText}`);
      }
      
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error('Error submitting feedback:', error);
      return { 
        success: false, 
        error: error.message,
        errorType: error.name 
      };
    }
  };
  
  // Handle submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (rating === 0) {
      setFeedbackError('Please rate your experience before submitting!');
      return;
    }
    
    if (name.trim() === '') {
      setFeedbackError('Please enter your name!');
      return;
    }
    
    if (message.trim() === '') {
      setFeedbackError('Please provide some feedback message!');
      return;
    }
    
    // Clear any previous errors
    setFeedbackError('');
    
    // Start submission animation
    setIsSubmitting(true);
    
    // Prepare feedback data
    const feedbackData = {
      name,
      rating,
      category,
      message,
      email: email || 'Not provided',
      timestamp: new Date().toISOString()
    };
    
    // Submit data to SheetDB
    const result = await submitToSheetDB(feedbackData);
    
    if (result.success) {
      // Log warning if in development mode
      if (result.warning) {
        console.warn(result.warning);
      }
      
      // Reset form and show success message
      setRating(0);
      setName('');
      setMessage('');
      setEmail('');
      setCategory('general');
      setShowSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } else {
      // Show error message
      setFeedbackError('Failed to submit feedback. Please try again later.');
    }
    
    // End submission state
    setIsSubmitting(false);
  };
  
  // Animation variants for page transition
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };
  
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
      className={`container mx-auto px-4 py-8 ${textClass} relative`}
    >
      {/* Fixed persistent background gradients */}
      <div className="fixed top-0 left-0 w-full h-full -z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-500/40 blur-[100px] opacity-100"></div>
        <div className="absolute bottom-[20%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-blue-500/40 blur-[100px] opacity-100"></div>
        <div className="absolute top-[40%] right-[30%] w-[30vw] h-[30vw] rounded-full bg-pink-500/40 blur-[100px] opacity-100"></div>
      </div>
      
      {/* Page Header */}
      <div className="mb-8 text-center relative z-10">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center mb-2"
        >
          <MessageSquare className={`w-7 h-7 mr-2 ${accentClass}`} />
          <h1 className={`text-3xl font-bold ${textClass}`}>Your Feedback Matters!</h1>
        </motion.div>
        <p className={`text-lg max-w-3xl mx-auto ${secondaryTextClass}`}>
          Help us improve Gundagardi by sharing your thoughts and suggestions. Your input directly shapes our future updates!
        </p>
      </div>
      
      {/* Success Message */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={`mb-8 p-4 rounded-xl border ${isDarkMode ? 'bg-green-800/30 border-green-700/50' : 'bg-green-100 border-green-200'} flex items-start max-w-3xl mx-auto relative z-10`}
        >
          <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
          <div>
            <h3 className={`font-bold mb-1 ${isDarkMode ? 'text-green-400' : 'text-green-800'}`}>
              Feedback Submitted Successfully!
            </h3>
            <p className={isDarkMode ? 'text-green-300' : 'text-green-700'}>
              Thank you for your valuable feedback. We appreciate your time and will consider your suggestions for future updates.
            </p>
          </div>
          <button
            onClick={() => setShowSuccess(false)}
            className={`absolute top-4 right-4 rounded-full p-1 ${isDarkMode ? 'hover:bg-green-700/50' : 'hover:bg-green-200/80'} transition-colors`}
          >
            <X className={`w-4 h-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
          </button>
        </motion.div>
      )}
      
      {/* Error Message */}
      {feedbackError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`mb-8 p-4 rounded-xl border ${isDarkMode ? 'bg-red-800/30 border-red-700/50' : 'bg-red-100 border-red-200'} flex items-start max-w-3xl mx-auto relative z-10`}
        >
          <AlertCircle className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} />
          <div>
            <h3 className={`font-bold mb-1 ${isDarkMode ? 'text-red-400' : 'text-red-800'}`}>
              Oops! Something's Missing
            </h3>
            <p className={isDarkMode ? 'text-red-300' : 'text-red-700'}>
              {feedbackError}
            </p>
          </div>
          <button
            onClick={() => setFeedbackError('')}
            className={`absolute top-4 right-4 rounded-full p-1 ${isDarkMode ? 'hover:bg-red-700/50' : 'hover:bg-red-200/80'} transition-colors`}
          >
            <X className={`w-4 h-4 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} />
          </button>
        </motion.div>
      )}
      
      {/* Main Content */}
      <div className="max-w-3xl mx-auto">
        <div className={`${glassmorphismClass} rounded-xl shadow-xl border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} p-6 md:p-8 relative z-10`}>
          <form onSubmit={handleSubmit}>
            {/* Rating Section */}
            <div className="mb-6">
              <label className={`block font-medium mb-3 text-lg ${textClass}`}>
                How would you rate your experience?
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <motion.button
                    key={value}
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setHoverRating(value)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => handleRating(value)}
                    className="focus:outline-none transition-colors duration-200"
                  >
                    <Star
                      fill={(hoverRating || rating) >= value ? '#FFC107' : 'none'}
                      className={`w-8 h-8 ${
                        (hoverRating || rating) >= value
                          ? 'text-yellow-500'
                          : isDarkMode
                          ? 'text-gray-600'
                          : 'text-gray-400'
                      }`}
                    />
                  </motion.button>
                ))}
                <span className={`ml-3 ${secondaryTextClass}`}>
                  {rating > 0 ? `${rating}/5 stars` : 'Select a rating'}
                </span>
              </div>
            </div>
            
            {/* Name Field - New Required Field */}
            <div className="mb-6">
              <label className={`block font-medium mb-2 ${textClass}`}>
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className={`w-full rounded-lg border ${
                  isDarkMode
                    ? 'border-gray-700 bg-gray-800/50 placeholder-gray-500 text-white'
                    : 'border-gray-300 bg-white/70 placeholder-gray-400 text-gray-900'
                } p-3 focus:outline-none focus:ring-2 focus:ring-purple-500`}
                required
              />
            </div>
            
            {/* Category Selection */}
            <div className="mb-6">
              <label className={`block font-medium mb-2 ${textClass}`}>
                Feedback Category
              </label>
              <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      cat.id === category
                        ? `ring-2 ${isDarkMode ? 'ring-purple-500' : 'ring-purple-400'} ${cat.color}`
                        : `${cat.color} opacity-70 hover:opacity-100`
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Feedback Message */}
            <div className="mb-6">
              <label className={`block font-medium mb-2 ${textClass}`}>
                Your Feedback <span className="text-red-500">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you like, what needs improvement, or any new features you'd like to see..."
                className={`w-full rounded-lg border ${
                  isDarkMode
                    ? 'border-gray-700 bg-gray-800/50 placeholder-gray-500 text-white'
                    : 'border-gray-300 bg-white/70 placeholder-gray-400 text-gray-900'
                } p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[120px]`}
                required
              />
            </div>
            
            {/* Email (Optional) */}
            <div className="mb-6">
              <label className={`block font-medium mb-2 ${textClass}`}>
                Your Email <span className="text-gray-500 font-normal">(Optional - for follow-ups)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className={`w-full rounded-lg border ${
                  isDarkMode
                    ? 'border-gray-700 bg-gray-800/50 placeholder-gray-500 text-white'
                    : 'border-gray-300 bg-white/70 placeholder-gray-400 text-gray-900'
                } p-3 focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
            </div>
            
            {/* Submission Area */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-2">
              <p className={`text-sm ${secondaryTextClass} mb-4 md:mb-0`}>
                <Info className="w-4 h-4 inline mr-1" />
                Your feedback helps us make Gundagardi better for everyone!
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-lg font-bold 
                  ${isDarkMode ? 'bg-purple-700 hover:bg-purple-600' : 'bg-purple-600 hover:bg-purple-500'} 
                  text-white flex items-center shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed`}
                type="submit"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="mr-2"
                    >
                      <Send className="w-4 h-4" />
                    </motion.div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Feedback
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </div>
        
        {/* Thanks Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className={`${secondaryTextClass} flex items-center justify-center`}>
            <Heart className="w-4 h-4 mr-2 text-red-500" />
            Thank you for helping us improve Gundagardi!
          </p>
          
          {/* Admin Data Log Link - Only visible to admins */}
          {isAdmin && (
            <Link
              to="/data-log"
              className={`mt-8 inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium 
                ${isDarkMode ? 'bg-green-700/70 hover:bg-green-600/70 text-green-100' : 'bg-green-100 hover:bg-green-200 text-green-800'} 
                transition-colors`}
            >
              <Database className="w-4 h-4 mr-2" />
              View Feedback Data (Admin)
            </Link>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Feedback; 