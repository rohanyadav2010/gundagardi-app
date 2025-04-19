import { useState } from 'react';
import { FiCode, FiHeart, FiGithub, FiLinkedin, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const CreditBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeBanner = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 bg-dark-bg-secondary border border-dark-bg-tertiary p-4 rounded-lg shadow-lg max-w-xs"
        >
          <button 
            onClick={closeBanner}
            className="absolute top-2 right-2 text-dark-text-secondary hover:text-primary-400 transition-colors duration-200"
          >
            <FiX />
          </button>
          
          <div className="flex items-center mb-2">
            <div className="icon-container mr-3 bg-primary-600 flex-shrink-0">
              <FiCode className="text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-dark-text-primary">Developed by Kunal Yadav</h4>
              <p className="text-xs text-dark-text-secondary mt-1">Made with <FiHeart className="inline text-red-500" /> and passion for learning</p>
            </div>
          </div>
          
          <div className="flex space-x-2 mt-3">
            <a 
              href="https://github.com/kunalyadav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-text-secondary hover:text-primary-400 transition-colors duration-200"
            >
              <FiGithub />
            </a>
            <a 
              href="https://linkedin.com/in/kunalyadav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-text-secondary hover:text-primary-400 transition-colors duration-200"
            >
              <FiLinkedin />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CreditBanner; 