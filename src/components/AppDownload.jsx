import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Laptop, 
  MonitorDown, 
  Timer,
  Sparkles, 
  Download, 
  CheckCircle2, 
  Clock, 
  Zap, 
  ChevronRight,
  Globe,
  Construction,
  Code,
  DownloadCloud,
  Apple,
  Package,
  ShoppingBag,
  Store
} from 'lucide-react';

const AppDownload = ({ isDarkMode, glassmorphismClass }) => {
  const textClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const secondaryTextClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const accentClass = isDarkMode ? 'text-purple-400' : 'text-purple-600';
  
  // Platform status - only web is available currently
  const platformStatus = {
    web: 'available',
    ios: 'coming-soon',
    android: 'coming-soon',
    macos: 'coming-soon',
    windows: 'coming-soon',
    linux: 'coming-soon'
  };
  
  // Store icons based on platform
  const getStoreIcon = (platform) => {
    switch(platform) {
      case 'ios':
        return <Apple className="w-4 h-4 mr-1" />;
      case 'android':
        return <ShoppingBag className="w-4 h-4 mr-1" />;
      case 'macos':
        return <Apple className="w-4 h-4 mr-1" />;
      case 'windows':
        return <Store className="w-4 h-4 mr-1" />;
      case 'linux':
        return <Package className="w-4 h-4 mr-1" />;
      default:
        return <Globe className="w-4 h-4 mr-1" />;
    }
  };
  
  // Store names based on platform
  const getStoreName = (platform) => {
    switch(platform) {
      case 'ios':
        return 'App Store';
      case 'android':
        return 'Google Play';
      case 'macos':
        return 'Mac App Store';
      case 'windows':
        return 'Microsoft Store';
      case 'linux':
        return 'Ubuntu Store';
      default:
        return 'Web Version';
    }
  };
  
  // Platform info
  const platforms = [
    {
      id: 'ios',
      name: 'iOS',
      icon: <Smartphone className="w-6 h-6" />,
      color: isDarkMode ? 'from-blue-800/30 to-blue-700/30' : 'from-blue-100 to-blue-50',
      textColor: isDarkMode ? 'text-blue-400' : 'text-blue-600',
      borderColor: isDarkMode ? 'border-blue-700/40' : 'border-blue-200',
      status: platformStatus.ios
    },
    {
      id: 'android',
      name: 'Android',
      icon: <Smartphone className="w-6 h-6" />,
      color: isDarkMode ? 'from-green-800/30 to-green-700/30' : 'from-green-100 to-green-50',
      textColor: isDarkMode ? 'text-green-400' : 'text-green-600',
      borderColor: isDarkMode ? 'border-green-700/40' : 'border-green-200',
      status: platformStatus.android
    },
    {
      id: 'macos',
      name: 'macOS',
      icon: <Laptop className="w-6 h-6" />,
      color: isDarkMode ? 'from-gray-800/30 to-gray-700/30' : 'from-gray-100 to-gray-50',
      textColor: isDarkMode ? 'text-gray-400' : 'text-gray-600',
      borderColor: isDarkMode ? 'border-gray-700/40' : 'border-gray-200',
      status: platformStatus.macos
    },
    {
      id: 'windows',
      name: 'Windows',
      icon: <MonitorDown className="w-6 h-6" />,
      color: isDarkMode ? 'from-blue-800/30 to-blue-700/30' : 'from-blue-100 to-blue-50',
      textColor: isDarkMode ? 'text-blue-400' : 'text-blue-600',
      borderColor: isDarkMode ? 'border-blue-700/40' : 'border-blue-200',
      status: platformStatus.windows
    },
    {
      id: 'linux',
      name: 'Linux',
      icon: <Code className="w-6 h-6" />,
      color: isDarkMode ? 'from-orange-800/30 to-orange-700/30' : 'from-orange-100 to-orange-50',
      textColor: isDarkMode ? 'text-orange-400' : 'text-orange-600',
      borderColor: isDarkMode ? 'border-orange-700/40' : 'border-orange-200',
      status: platformStatus.linux
    },
    {
      id: 'web',
      name: 'Web Version',
      icon: <Globe className="w-6 h-6" />,
      color: isDarkMode ? 'from-purple-800/50 to-purple-700/50' : 'from-purple-100 to-purple-50',
      textColor: isDarkMode ? 'text-purple-400' : 'text-purple-600',
      borderColor: isDarkMode ? 'border-purple-700/40' : 'border-purple-200',
      status: platformStatus.web
    }
  ];

  // Platform Card Component
  const PlatformCard = ({ platform }) => {
    const isAvailable = platform.status === 'available';
    const storeName = getStoreName(platform.id);
    const storeIcon = getStoreIcon(platform.id);
    
    return (
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`relative overflow-hidden rounded-xl p-6 shadow-lg border ${platform.borderColor} ${glassmorphismClass}`}
      >
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-50 -z-1`}></div>
        
        {/* Platform Icon and Name */}
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 rounded-full ${platform.textColor} bg-opacity-20 flex items-center justify-center mr-4 ${isDarkMode ? 'bg-black/20' : 'bg-white/60'}`}>
            {platform.icon}
          </div>
          <div>
            <h3 className={`text-xl font-bold ${platform.textColor}`}>{platform.name}</h3>
            <div className="flex items-center mt-1">
              {isAvailable ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">Available now</span>
                </>
              ) : (
                <>
                  <Clock className="w-4 h-4 text-amber-500 mr-1" />
                  <span className="text-sm text-amber-500">Coming soon</span>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Store Badge */}
        {platform.id !== 'web' && (
          <div className={`flex items-center px-3 py-1.5 rounded-lg mb-3 bg-opacity-20 ${isDarkMode ? 'bg-black/20' : 'bg-white/60'} ${platform.textColor}`}>
            {storeIcon}
            <span className="text-sm">Available on {storeName}</span>
          </div>
        )}
        
        {/* Download Button or Coming Soon */}
        <div className="mt-4">
          {isAvailable ? (
            <a 
              href="/" 
              className={`flex items-center justify-center py-2 px-4 rounded-lg ${platform.textColor} bg-opacity-20 font-medium hover:bg-opacity-30 transition-all ${isDarkMode ? 'bg-black/20 hover:bg-black/30' : 'bg-white/60 hover:bg-white/80'}`}
            >
              <DownloadCloud className="w-4 h-4 mr-2" /> 
              Use Web Version
            </a>
          ) : (
            <button 
              disabled
              className={`flex items-center justify-center py-2 px-4 rounded-lg opacity-70 cursor-not-allowed ${secondaryTextClass} bg-opacity-10 font-medium ${isDarkMode ? 'bg-gray-700/30' : 'bg-gray-200/50'}`}
            >
              <Timer className="w-4 h-4 mr-2" /> 
              Coming Soon
            </button>
          )}
        </div>
        
        {/* Feature tag for available platforms */}
        {isAvailable && (
          <div className="absolute top-3 right-3">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${isDarkMode ? 'bg-green-900/40 text-green-400' : 'bg-green-100 text-green-700'}`}>
              <Zap className="w-3 h-3 mr-1" /> Active
            </span>
          </div>
        )}
        
        {/* Construction tag for coming soon platforms */}
        {!isAvailable && (
          <div className="absolute top-3 right-3">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${isDarkMode ? 'bg-amber-900/40 text-amber-400' : 'bg-amber-100 text-amber-700'}`}>
              <Construction className="w-3 h-3 mr-1" /> In Development
            </span>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-12"
    >
      {/* Fixed persistent background gradients */}
      <div className="fixed top-0 left-0 w-full h-full -z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-500/40 blur-[100px] opacity-100"></div>
        <div className="absolute bottom-[20%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-blue-500/40 blur-[100px] opacity-100"></div>
        <div className="absolute top-[40%] right-[30%] w-[30vw] h-[30vw] rounded-full bg-pink-500/40 blur-[100px] opacity-100"></div>
      </div>
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <motion.h1 
          className={`text-3xl md:text-5xl font-bold mb-6 ${textClass}`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Gundagardi App <span className={accentClass}>Downloads</span>
        </motion.h1>
        <motion.p 
          className={`text-lg md:text-xl ${secondaryTextClass} max-w-3xl mx-auto`}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Access Gundagardi on all your devices. Get ready for native apps coming soon for all major platforms!
        </motion.p>
      </div>
      
      {/* App Download Information */}
      <motion.div
        className={`mb-16 p-8 rounded-xl ${glassmorphismClass} border ${isDarkMode ? 'border-purple-700/30' : 'border-purple-200/60'} shadow-lg relative z-10`}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
            <div className="relative">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${isDarkMode ? 'from-purple-700 to-blue-700' : 'from-purple-500 to-blue-500'} flex items-center justify-center shadow-lg`}>
                <Download className="w-10 h-10 text-white" />
                <motion.div 
                  className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </motion.div>
              </div>
              
              <motion.div 
                className="absolute -z-1 w-20 h-20 rounded-2xl bg-purple-500 blur-lg opacity-40"
                animate={{ 
                  opacity: [0.4, 0.6, 0.4],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </div>
          
          <div>
            <h2 className={`text-2xl font-bold mb-3 ${textClass}`}>Choose Your Platform</h2>
            <p className={`${secondaryTextClass} mb-4`}>
              The Gundagardi application is currently available as a web version, with native applications for various platforms coming soon. 
              Our team is working hard to bring you the best experience across all your devices.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <div className={`flex items-center text-sm ${isDarkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-700'} px-3 py-1 rounded-full`}>
                <Globe className="w-4 h-4 mr-1" /> Web Version Available
              </div>
              <div className={`flex items-center text-sm ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'} px-3 py-1 rounded-full`}>
                <Smartphone className="w-4 h-4 mr-1" /> Mobile Apps Coming Soon
              </div>
              <div className={`flex items-center text-sm ${isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'} px-3 py-1 rounded-full`}>
                <Laptop className="w-4 h-4 mr-1" /> Desktop Apps Coming Soon
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Platform Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {platforms.map((platform) => (
          <PlatformCard key={platform.id} platform={platform} />
        ))}
      </div>
      
      {/* Development Timeline */}
      <motion.div 
        className={`mb-16 p-8 rounded-xl ${glassmorphismClass} border ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/60'} shadow-lg relative`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className={`text-2xl font-bold mb-6 ${textClass} flex items-center`}>
          <Timer className={`w-6 h-6 mr-2 ${accentClass}`} />
          Development Timeline
        </h2>
        
        <div className="space-y-4">
          <div className={`relative pl-8 pb-4 border-l-2 ${isDarkMode ? 'border-green-600' : 'border-green-500'}`}>
            <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${isDarkMode ? 'bg-green-600' : 'bg-green-500'}`}></div>
            <h3 className={`text-lg font-semibold ${textClass}`}>Q2 2025: Web Version</h3>
            <p className={`${secondaryTextClass}`}>Initial release of the web application with core functionality. <span className="text-green-500 font-medium">Available Now!</span></p>
          </div>
          
          <div className={`relative pl-8 pb-4 border-l-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${isDarkMode ? 'bg-gray-700' : 'border-2 border-gray-400 bg-white'}`}></div>
            <h3 className={`text-lg font-semibold ${textClass}`}>Q3 2025: Mobile Applications</h3>
            <p className={`${secondaryTextClass}`}>
              Release of iOS and Android applications with offline functionality and mobile-optimized interface.
              <div className="mt-2 flex flex-wrap gap-2">
                <div className={`flex items-center text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                  <Apple className="w-3 h-3 mr-1" /> App Store
                </div>
                <div className={`flex items-center text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'}`}>
                  <ShoppingBag className="w-3 h-3 mr-1" /> Google Play
                </div>
              </div>
            </p>
          </div>
          
          <div className={`relative pl-8 pb-4 border-l-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${isDarkMode ? 'bg-gray-700' : 'border-2 border-gray-400 bg-white'}`}></div>
            <h3 className={`text-lg font-semibold ${textClass}`}>Q4 2025: Desktop Applications</h3>
            <p className={`${secondaryTextClass}`}>
              Release of macOS, Windows, and Linux desktop applications with enhanced features and full offline support.
              <div className="mt-2 flex flex-wrap gap-2">
                <div className={`flex items-center text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-800/40 text-gray-400' : 'bg-gray-100 text-gray-700'}`}>
                  <Apple className="w-3 h-3 mr-1" /> Mac App Store
                </div>
                <div className={`flex items-center text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                  <Store className="w-3 h-3 mr-1" /> Microsoft Store
                </div>
                <div className={`flex items-center text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-700'}`}>
                  <Package className="w-3 h-3 mr-1" /> Ubuntu Store
                </div>
              </div>
            </p>
          </div>
          
          <div className={`relative pl-8 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${isDarkMode ? 'bg-gray-700' : 'border-2 border-gray-400 bg-white'}`}></div>
            <h3 className={`text-lg font-semibold ${textClass}`}>Q1 2026: Cross-Platform Sync</h3>
            <p className={`${secondaryTextClass}`}>Implementation of seamless synchronization across all platforms and devices with unified login and data backup.</p>
          </div>
        </div>
      </motion.div>
      
      {/* Call to Action */}
      <motion.div
        className={`text-center p-8 rounded-xl shadow-lg relative overflow-hidden ${glassmorphismClass} border ${isDarkMode ? 'border-purple-700/30' : 'border-purple-200/60'}`}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className={`absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-r ${isDarkMode ? 'from-purple-900/20 to-blue-900/20' : 'from-purple-500/10 to-blue-500/10'} blur-3xl`}></div>
          <div className={`absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gradient-to-r ${isDarkMode ? 'from-pink-900/20 to-purple-900/20' : 'from-pink-500/10 to-purple-500/10'} blur-3xl`}></div>
        </motion.div>
        
        <div className="relative z-10">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${textClass}`}>
            Start using Gundagardi today!
          </h2>
          <p className={`text-lg mb-6 ${secondaryTextClass} max-w-2xl mx-auto`}>
            Access the web version now and be the first to know when we launch on App Store, Google Play, Microsoft Store, and Ubuntu Store!
          </p>
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center px-6 py-3 rounded-lg font-medium ${isDarkMode ? 'bg-purple-700 hover:bg-purple-600 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white'} shadow-lg`}
          >
            <Globe className="w-5 h-5 mr-2" />
            Open Web Version
            <ChevronRight className="w-5 h-5 ml-1" />
          </motion.a>
          
          <div className="mt-6 flex justify-center flex-wrap gap-3">
            <div className={`flex items-center text-sm ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'} px-3 py-1 rounded-full`}>
              <Apple className="w-4 h-4 mr-1" /> Coming to App Store
            </div>
            <div className={`flex items-center text-sm ${isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'} px-3 py-1 rounded-full`}>
              <ShoppingBag className="w-4 h-4 mr-1" /> Coming to Google Play
            </div>
            <div className={`flex items-center text-sm ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'} px-3 py-1 rounded-full`}>
              <Store className="w-4 h-4 mr-1" /> Coming to Microsoft Store
            </div>
            <div className={`flex items-center text-sm ${isDarkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-700'} px-3 py-1 rounded-full`}>
              <Package className="w-4 h-4 mr-1" /> Coming to Ubuntu Store
            </div>
          </div>
          
          <div className="mt-6 text-sm flex justify-center items-center text-purple-400">
            <Sparkles className="w-4 h-4 mr-1" />
            <span>Be notified when new platforms launch - sign in to enable notifications</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AppDownload; 