import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Filter, ArrowUpRight, Heart, Clock, Music } from 'lucide-react';

function PoemsPage({ isDarkMode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  // Update theme classes for enhanced glassmorphism
  const bgClass = ''; // Removed bg class to let app background show through
  const textClass = isDarkMode ? 'text-dark-text-primary' : 'text-gray-800';
  const secondaryTextClass = isDarkMode ? 'text-dark-text-secondary' : 'text-gray-600';
  const borderClass = isDarkMode ? 'border-dark-bg-tertiary' : 'border-gray-200';
  const hoverClass = isDarkMode ? 'hover:bg-dark-bg-tertiary/80' : 'hover:bg-gray-100/80';
  const cardClass = isDarkMode 
    ? 'bg-dark-bg-secondary/70 backdrop-blur-xl border-gray-700/40 hover:border-purple-700/50' 
    : 'bg-white/70 backdrop-blur-xl border-gray-200/60 hover:border-purple-300/70';
  
  // Updated poems from the user's image
  const poems = [
    { 
      id: 1, 
      title: "साखी", 
      author: "कबीर दास",
      preview: "माला फेरत जुग भया, फिरा न मन का फेर। कर का मनका डारि दे, मन का मनका फेर॥",
      category: "भक्ति",
      readTime: "10 min",
      likes: 342,
      hasQA: true,
      hasSummary: true
    },
    { 
      id: 2, 
      title: "गिरिधर की कुंडलिया", 
      author: "गिरिधर कवि राय",
      preview: "तरुवर फल नहिं खात है, सरवर पियत न पान। कहि गिरिधर कविराय यों, परमारथ के दान॥",
      category: "नीति",
      readTime: "12 min",
      likes: 305,
      hasQA: true,
      hasSummary: true
    },
    { 
      id: 3, 
      title: "स्वर्ग बना सकते है", 
      author: "रामधारी सिंह दिनकर",
      preview: "धरती जो अपना खून पचा सकती है वह अपने वक्ष पर स्वर्ग बना सकती है।",
      category: "राष्ट्रीय",
      readTime: "15 min",
      likes: 426,
      hasQA: true,
      hasSummary: true
    },
    { 
      id: 4, 
      title: "वह जन्मभूमि मेरी", 
      author: "सोहनलाल द्विवेदी",
      preview: "वह जन्मभूमि मेरी! वह जन्मभूमि मेरी! पहचानती न जिसको हो आज दुनिया सारी।",
      category: "देशभक्ति",
      readTime: "14 min",
      likes: 389,
      hasQA: true,
      hasSummary: true
    },
    { 
      id: 5, 
      title: "मेघ आए", 
      author: "सर्वेश्वर दयाल सक्सेना",
      preview: "मेघ आए बड़े बन-ठन के सँवर के, आँगन में बिखराये हैं रितु के पाहुन से...",
      category: "प्रकृति",
      readTime: "11 min",
      likes: 312,
      hasQA: true,
      hasSummary: true
    },
    { 
      id: 6, 
      title: "सूर के पद", 
      author: "सूरदास",
      preview: "मैया मोरी, मैं नहिं माखन खायो। ख्याल परै यह मुख दधि लपटायो॥",
      category: "भक्ति",
      readTime: "13 min",
      likes: 356,
      hasQA: true,
      hasSummary: true
    },
    { 
      id: 7, 
      title: "विनय के पद", 
      author: "तुलसीदास",
      preview: "विनय न मानत जानकी, जदपि कही बहु बात। तेहि अवसर चलि आइगे, पवनसुत बलि जात॥",
      category: "भक्ति",
      readTime: "10 min",
      likes: 298,
      hasQA: true,
      hasSummary: true
    },
    { 
      id: 8, 
      title: "भिक्षुक", 
      author: "सूर्यकांत त्रिपाठी 'निराला'",
      preview: "वह आता, दो टूक कलेजे के करता पछताता पथ पर आता।",
      category: "सामाजिक",
      readTime: "12 min",
      likes: 267,
      hasQA: true,
      hasSummary: true
    },
    { 
      id: 9, 
      title: "बचपन हमारा कम है", 
      author: "शिवमंगल सिंह 'सुमन'",
      preview: "हम बाल बाल हैं, हम बचपन के चंदा हैं, महान हम हैं, हम समुंदर से भी गहरे हैं।",
      category: "बाल",
      readTime: "9 min",
      likes: 325,
      hasQA: true,
      hasSummary: true
    },
    { 
      id: 10, 
      title: "माता मंदिर की ओर", 
      author: "सुभद्रा कुमारी चौहान",
      preview: "बालक को उठा कर निज वक्ष से लगाए हुए, माता बढ़ी चली जाती मंदिर की ओर।",
      category: "पारिवारिक",
      readTime: "11 min",
      likes: 352,
      hasQA: true,
      hasSummary: true
    }
  ];
  
  // Updated categories based on the new poems
  const categories = [
    { id: 'all', name: 'सभी कविताएँ' },
    { id: 'भक्ति', name: 'भक्ति' },
    { id: 'नीति', name: 'नीति' },
    { id: 'राष्ट्रीय', name: 'राष्ट्रीय' },
    { id: 'देशभक्ति', name: 'देशभक्ति' },
    { id: 'प्रकृति', name: 'प्रकृति' },
    { id: 'सामाजिक', name: 'सामाजिक' },
    { id: 'बाल', name: 'बाल' },
    { id: 'पारिवारिक', name: 'पारिवारिक' }
  ];
  
  // Filter poems based on search query and category
  const filteredPoems = poems.filter(poem => {
    const matchesSearch = poem.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         poem.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         poem.preview.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedFilter === 'all' || poem.category === selectedFilter;
    
    return matchesSearch && matchesCategory;
  });

  // Get background gradient based on poem category
  const getCategoryGradient = (category) => {
    switch(category) {
      case 'भक्ति':
        return 'from-orange-500 to-yellow-600';
      case 'नीति':
        return 'from-indigo-500 to-blue-600';
      case 'राष्ट्रीय':
        return 'from-red-500 to-rose-600';
      case 'देशभक्ति':
        return 'from-orange-500 to-red-600';
      case 'प्रकृति':
        return 'from-green-500 to-emerald-600';
      case 'सामाजिक':
        return 'from-purple-500 to-violet-600';
      case 'बाल':
        return 'from-yellow-500 to-amber-600';
      case 'पारिवारिक':
        return 'from-pink-500 to-rose-600';
      default:
        return 'from-primary-500 to-primary-700';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`pt-20 min-h-screen ${bgClass} relative`}
    >
      {/* Fixed persistent background gradients */}
      <div className="fixed top-0 left-0 w-full h-full -z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-orange-500/40 blur-[100px] opacity-100"></div>
        <div className="absolute bottom-[30%] right-[15%] w-[30vw] h-[30vw] rounded-full bg-purple-500/40 blur-[100px] opacity-100"></div>
        <div className="absolute top-[50%] right-[25%] w-[25vw] h-[25vw] rounded-full bg-indigo-500/40 blur-[100px] opacity-100"></div>
      </div>

      <div className="content-container py-8 relative z-10">
        {/* Page Header - enhanced with glassmorphism */}
        <div className="text-center mb-16 relative z-20">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-2 rounded-full bg-primary-500/30 backdrop-blur-xl text-primary-500 text-sm font-medium inline-block mb-4 shadow-md border border-primary-500/20"
          >
            ICSE Class 10 Hindi
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-3xl md:text-5xl font-bold mb-4 ${textClass} drop-shadow-sm`}
          >
            कविता संग्रह
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`${secondaryTextClass} max-w-3xl mx-auto text-lg backdrop-blur-md bg-gradient-to-r ${
              isDarkMode ? 'from-gray-900/30 to-gray-800/30' : 'from-white/40 to-gray-100/40'
            } p-4 rounded-xl border ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/50'} shadow-md`}
          >
            ICSE Class 10 के पाठ्यक्रम में शामिल सभी कविताएँ - व्याख्या, प्रश्न-उत्तर और सारांश के साथ।
          </motion.p>
        </div>
        
        {/* Search and Filter - enhanced with glassmorphism */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4 relative z-20">
          <div className={`relative w-full md:w-auto flex-grow max-w-md border rounded-xl ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/70'} overflow-hidden backdrop-blur-xl ${isDarkMode ? 'bg-dark-bg-secondary/60' : 'bg-white/60'} shadow-md`}>
            <input
              type="text"
              placeholder="कविता या कवि का नाम खोजें..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`py-3 px-12 w-full outline-none bg-transparent ${textClass}`}
            />
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${secondaryTextClass} w-5 h-5`} />
          </div>
          
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
            <div className={`flex items-center p-2 rounded-xl backdrop-blur-xl ${isDarkMode ? 'bg-dark-bg-secondary/50 border-gray-700/40' : 'bg-white/50 border-gray-200/60'} border shadow-md`}>
              <Filter className={`${secondaryTextClass} w-4 h-4 mr-2`} />
              <span className={`${secondaryTextClass} text-sm mr-2`}>वर्गीकरण:</span>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedFilter(category.id)}
                  className={`px-3 py-1 text-sm rounded-full whitespace-nowrap transition-all duration-300 backdrop-blur-lg shadow-sm mx-1
                    ${selectedFilter === category.id 
                      ? `bg-primary-500/80 text-white ${isDarkMode ? 'shadow-primary-800/30' : 'shadow-primary-600/20'} border border-primary-500/30` 
                      : `${secondaryTextClass} border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/70'} ${isDarkMode ? 'bg-dark-bg-secondary/50' : 'bg-white/50'} ${hoverClass}`
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Poems Grid - enhanced with glassmorphism */}
        {filteredPoems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {filteredPoems.map(poem => (
              <motion.div
                key={poem.id}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
                transition={{ duration: 0.3 }}
                className={`${cardClass} rounded-xl shadow-md overflow-hidden border flex flex-col transition-all duration-300 hover:shadow-lg group relative`}
              >
                {/* Enhanced persistent glassmorphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/30 via-purple-500/30 to-gray-500/30 pointer-events-none z-0 opacity-100"></div>
                
                <div className={`h-16 bg-gradient-to-r ${getCategoryGradient(poem.category)} relative z-10`}>
                  <div className="absolute inset-0 opacity-90 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]"></div>
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <span className="bg-white/40 backdrop-blur-xl text-white text-xs px-3 py-1 rounded-full shadow-md border border-white/20">
                      {poem.category}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-4 text-white text-lg font-bold tracking-wide drop-shadow-md">
                    {poem.id.toString().padStart(2, '0')}
                  </div>
                </div>
                
                <div className="p-5 flex-grow flex flex-col z-10 relative">
                  <div className="mb-3">
                    <h3 className={`text-xl font-bold ${textClass} group-hover:text-primary-500 transition-colors`}>
                      {poem.title}
                    </h3>
                    <p className={`text-sm ${secondaryTextClass}`}>
                      कवि: <span className="font-medium">{poem.author}</span>
                    </p>
                  </div>
                  
                  <div className={`${isDarkMode ? 'bg-dark-bg-tertiary/30' : 'bg-gray-100/50'} backdrop-blur-md p-3 rounded-lg mb-4 border ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/40'}`}>
                    <p className={`${secondaryTextClass} text-sm italic`}>
                      "{poem.preview}"
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center space-x-3">
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-md backdrop-blur-md ${isDarkMode ? 'bg-dark-bg-tertiary/40' : 'bg-gray-100/40'} border ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/40'}`}>
                        <Heart className={`h-3.5 w-3.5 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
                        <span className="text-xs font-medium">{poem.likes}</span>
                      </div>
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-md backdrop-blur-md ${isDarkMode ? 'bg-dark-bg-tertiary/40' : 'bg-gray-100/40'} border ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/40'}`}>
                        <Clock className={`h-3.5 w-3.5 ${secondaryTextClass}`} />
                        <span className="text-xs font-medium">{poem.readTime}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/poems/${poem.id}`} 
                      className="flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors bg-gradient-to-r from-primary-500/10 to-transparent px-3 py-1 rounded-full hover:from-primary-500/20 backdrop-blur-md"
                    >
                      <span>पढ़ें</span>
                      <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
                
                <div className="px-5 py-3 border-t border-dashed border-gray-200/50 dark:border-gray-700/30 flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-2">
                    {poem.hasQA && (
                      <span className={`px-2 py-0.5 text-xs rounded ${isDarkMode ? 'bg-purple-900/40 text-purple-300' : 'bg-purple-100 text-purple-700'} backdrop-blur-md border ${isDarkMode ? 'border-purple-700/30' : 'border-purple-200'}`}>
                        प्रश्न-उत्तर
                      </span>
                    )}
                    {poem.hasSummary && (
                      <span className={`px-2 py-0.5 text-xs rounded ${isDarkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-700'} backdrop-blur-md border ${isDarkMode ? 'border-blue-700/30' : 'border-blue-200'}`}>
                        सारांश
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center">
                    <Music className={`w-4 h-4 ${isDarkMode ? 'text-amber-400/70' : 'text-amber-500/70'} animate-pulse`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className={`text-center py-12 ${cardClass} rounded-xl shadow-lg border ${borderClass} p-8 relative overflow-hidden`}>
            {/* Enhanced persistent empty state background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/40 to-purple-500/40 pointer-events-none z-0 opacity-100"></div>
            
            <BookOpen className={`w-16 h-16 mx-auto ${secondaryTextClass} mb-4 opacity-30 relative z-10`} />
            <h3 className={`text-xl font-bold ${textClass} mb-2 relative z-10`}>कोई कविता नहीं मिली</h3>
            <p className={`${secondaryTextClass} relative z-10`}>
              अपनी खोज या फ़िल्टर को समायोजित करके देखें।
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedFilter('all'); }}
              className="mt-4 px-6 py-2 bg-primary-500/90 hover:bg-primary-600/90 text-white rounded-full backdrop-blur-xl transition-all duration-300 shadow-md hover:shadow-lg border border-primary-500/30 relative z-10"
            >
              फिल्टर रीसेट करें
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default PoemsPage; 