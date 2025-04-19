import { motion } from 'framer-motion';

const FeatureCard = ({ feature, isDarkMode }) => {
  const textClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const secondaryTextClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const cardClass = isDarkMode 
    ? 'bg-dark-bg-secondary/70 backdrop-blur-xl border-gray-700/40' 
    : 'bg-white/70 backdrop-blur-xl border-gray-200/60';
  
  // Create gradient background based on feature id
  const getGradientColor = (id) => {
    switch(id) {
      case 1: return 'from-blue-500/30 to-blue-700/30';
      case 2: return 'from-purple-500/30 to-purple-700/30';
      case 3: return 'from-pink-500/30 to-pink-700/30';
      default: return 'from-gray-500/30 to-gray-700/30';
    }
  };
  
  return (
    <motion.div
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
        borderColor: isDarkMode ? 'rgba(124, 58, 237, 0.5)' : 'rgba(124, 58, 237, 0.3)',
      }}
      transition={{ duration: 0.3 }}
      className={`p-8 rounded-xl ${cardClass} shadow-lg border transition-all duration-300 group relative overflow-hidden`}
    >
      {/* Persistent gradient background that doesn't fade on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradientColor(feature.id)} opacity-80 pointer-events-none z-0`}></div>
      
      <div className="relative z-10">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${isDarkMode ? 'bg-dark-bg-primary/40' : 'bg-gray-100/60'} shadow-md border ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/50'}`}>
          {feature.icon}
        </div>
        <h3 className={`text-xl font-bold mb-3 ${textClass} group-hover:text-primary-500 transition-colors`}>
          {feature.title}
        </h3>
        <p className={secondaryTextClass}>
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard; 