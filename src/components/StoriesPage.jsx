import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Book, Search, Filter, ArrowUpRight } from 'lucide-react';

function StoriesPage({ isDarkMode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const bgClass = '';
  const textClass = isDarkMode ? 'text-dark-text-primary' : 'text-gray-800';
  const secondaryTextClass = isDarkMode ? 'text-dark-text-secondary' : 'text-gray-600';
  const borderClass = isDarkMode ? 'border-dark-bg-tertiary' : 'border-gray-200';
  const hoverClass = isDarkMode ? 'hover:bg-dark-bg-tertiary/80' : 'hover:bg-gray-100/80';
  const cardClass = isDarkMode 
    ? 'bg-dark-bg-secondary/70 backdrop-blur-xl border-gray-700/40 hover:border-purple-700/50' 
    : 'bg-white/70 backdrop-blur-xl border-gray-200/60 hover:border-purple-300/70';
  
  const stories = [
    { 
      id: 1, 
      title: "बात अठन्नी की", 
      author: "सुदर्शन",
      excerpt: "ईमानदारी और कठिन परिस्थितियों में भी वचन का पालन करने के मूल्य के बारे में एक शक्तिशाली कहानी।",
      category: "social",
      readTime: "18 min",
      coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    { 
      id: 2, 
      title: "काकी", 
      author: "सियाराम शरण गुप्ता",
      excerpt: "एक मार्मिक कहानी जो पारिवारिक संबंधों और परंपरागत घरों में बुजुर्ग महिलाओं के साथ व्यवहार की पड़ताल करती है।",
      category: "family",
      readTime: "22 min",
      coverImage: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    { 
      id: 3, 
      title: "महायज्ञ का पुरस्कार", 
      author: "यशपाल",
      excerpt: "धार्मिक समारोहों और सामाजिक प्रथाओं के भीतर विरोधाभासों पर एक व्यंग्यात्मक दृष्टिकोण।",
      category: "satire",
      readTime: "15 min",
      coverImage: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    { 
      id: 4, 
      title: "नेता जी का चश्मा", 
      author: "स्वयं प्रकाश",
      excerpt: "एक नम्र दुकानदार और एक राष्ट्रीय नायक के साथ उसके अनूठे संबंध के बारे में एक छूने वाली कहानी।",
      category: "patriotic",
      readTime: "12 min",
      coverImage: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    { 
      id: 5, 
      title: "अपना अपना भाग्य", 
      author: "जैनेंद्र कुमार",
      excerpt: "भाग्य की दार्शनिक खोज और लोगों के भाग्य कैसे अप्रत्याशित तरीकों से जुड़े होते हैं।",
      category: "philosophical",
      readTime: "20 min",
      coverImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    { 
      id: 6, 
      title: "बड़े घर की बेटी", 
      author: "प्रेमचंद",
      excerpt: "वर्ग भेद और पारंपरिक समाज में महिलाओं द्वारा सामना किए जाने वाले संघर्षों की जांच करती एक क्लासिक कहानी।",
      category: "social",
      readTime: "25 min",
      coverImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    { 
      id: 7, 
      title: "सन्देह", 
      author: "जयशंकर प्रसाद",
      excerpt: "मानवीय संबंधों और विश्वास की भावना पर एक सूक्ष्म कहानी जो पाठकों को सोचने पर मजबूर करती है।",
      category: "psychological",
      readTime: "16 min",
      coverImage: "https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    { 
      id: 8, 
      title: "भोला में खोया आदमी", 
      author: "शीलाधर शर्मा 'पद्मदीप'",
      excerpt: "आधुनिक समाज में व्यक्ति की पहचान और अस्तित्व की खोज पर एक मनोवैज्ञानिक कहानी।",
      category: "contemporary",
      readTime: "14 min",
      coverImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    { 
      id: 9, 
      title: "भेद और प्रभेद", 
      author: "हरि शंकर परसाई",
      excerpt: "समाज के विभिन्न वर्गों और उनके बीच के अंतर पर तीखा व्यंग्य करती एक मार्मिक कहानी।",
      category: "satire",
      readTime: "18 min",
      coverImage: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    { 
      id: 10, 
      title: "दो कलाकार", 
      author: "मन्नू भंडारी",
      excerpt: "कला, सृजन और कलाकारों के आंतरिक संघर्ष पर प्रकाश डालती एक प्रेरणादायक कहानी।",
      category: "artistic",
      readTime: "20 min",
      coverImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];
  
  const categories = [
    { id: 'all', name: 'सभी कहानियाँ' },
    { id: 'social', name: 'सामाजिक' },
    { id: 'family', name: 'पारिवारिक' },
    { id: 'satire', name: 'व्यंग्य' },
    { id: 'patriotic', name: 'देशभक्ति' },
    { id: 'philosophical', name: 'दार्शनिक' },
    { id: 'psychological', name: 'मनोवैज्ञानिक' },
    { id: 'contemporary', name: 'समकालीन' },
    { id: 'artistic', name: 'कलात्मक' }
  ];
  
  // Filter stories based on search query and category
  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         story.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedFilter === 'all' || story.category === selectedFilter;
    
    return matchesSearch && matchesCategory;
  });

  // Get category color class for glassmorphism effect
  const getCategoryColor = (category) => {
    switch(category) {
      case 'social': return 'from-blue-500/50 to-blue-700/50';
      case 'family': return 'from-green-500/50 to-green-700/50';
      case 'satire': return 'from-yellow-500/50 to-yellow-700/50';
      case 'patriotic': return 'from-red-500/50 to-red-700/50';
      case 'philosophical': return 'from-purple-500/50 to-purple-700/50';
      case 'psychological': return 'from-indigo-500/50 to-indigo-700/50';
      case 'contemporary': return 'from-pink-500/50 to-pink-700/50';
      case 'artistic': return 'from-orange-500/50 to-orange-700/50';
      default: return 'from-gray-500/50 to-gray-700/50';
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
        <div className="absolute top-[10%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-blue-500/40 blur-[80px] opacity-100"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-purple-500/40 blur-[80px] opacity-100"></div>
        <div className="absolute top-[40%] right-[20%] w-[20vw] h-[20vw] rounded-full bg-pink-500/40 blur-[80px] opacity-100"></div>
      </div>

      <div className="content-container py-8 relative z-10">
        {/* Page Header with enhanced glassmorphism */}
        <div className="text-center mb-16 relative z-20">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-2 rounded-full bg-primary-500/30 backdrop-blur-xl text-primary-500 text-sm font-medium inline-block mb-4 shadow-sm border border-primary-500/30"
          >
            ICSE Class 10 Hindi
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-3xl md:text-5xl font-bold mb-4 ${textClass} drop-shadow-sm`}
          >
            कहानी संग्रह
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`${secondaryTextClass} max-w-3xl mx-auto text-lg backdrop-blur-md bg-gradient-to-r ${
              isDarkMode ? 'from-gray-900/30 to-gray-800/30' : 'from-white/40 to-gray-100/40'
            } p-4 rounded-xl border ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/50'} shadow-sm`}
          >
            ICSE Class 10 के पाठ्यक्रम में शामिल सभी कहानियां - व्याख्या, प्रश्न-उत्तर और सारांश के साथ।
          </motion.p>
        </div>
        
        {/* Search and Filter with enhanced glassmorphism */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className={`relative w-full md:w-auto flex-grow max-w-md border rounded-xl ${isDarkMode ? 'border-gray-700/40' : 'border-gray-200/60'} overflow-hidden shadow-md backdrop-blur-xl ${isDarkMode ? 'bg-dark-bg-secondary/50' : 'bg-white/50'}`}>
            <input
              type="text"
              placeholder="कहानी या लेखक का नाम खोजें..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`py-3 px-12 w-full outline-none bg-transparent ${textClass}`}
            />
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${secondaryTextClass} w-5 h-5`} />
          </div>
          
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
            <div className={`flex items-center p-2 rounded-xl backdrop-blur-xl ${isDarkMode ? 'bg-dark-bg-secondary/50 border-gray-700/40' : 'bg-white/50 border-gray-200/60'} border shadow-sm`}>
              <Filter className={`${secondaryTextClass} w-4 h-4 mr-2`} />
              <span className={`${secondaryTextClass} text-sm mr-2`}>वर्गीकरण:</span>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedFilter(category.id)}
                  className={`px-3 py-1 text-sm rounded-full whitespace-nowrap transition-all duration-300 backdrop-blur-xl mx-1
                    ${selectedFilter === category.id 
                      ? 'bg-primary-500/80 text-white shadow-md' 
                      : `${secondaryTextClass} border ${isDarkMode ? 'border-gray-700/40 bg-dark-bg-secondary/40' : 'border-gray-200/60 bg-white/40'} hover:shadow-md ${hoverClass}`
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Stories Grid with enhanced glassmorphism */}
        {filteredStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map(story => (
              <motion.div
                key={story.id}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
                transition={{ duration: 0.3 }}
                className={`card group ${cardClass} p-4 rounded-xl shadow-md border transition-all duration-300 overflow-hidden relative`}
              >
                {/* Persistent category background gradient with higher opacity */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(story.category)} opacity-80 pointer-events-none z-0`}></div>
                
                <div className="relative z-10 h-48 mb-6 overflow-hidden rounded-lg shadow-inner">
                  <img 
                    src={story.coverImage} 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <span className="text-white text-sm backdrop-blur-md bg-black/30 px-2 py-1 rounded-full shadow-sm border border-white/10">{story.readTime} पढ़ने का समय</span>
                  </div>
                </div>
                <div className="mb-4 relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-xl font-bold ${textClass} group-hover:text-primary-500 transition-colors`}>
                      {story.title}
                    </h3>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-500/30 backdrop-blur-xl text-primary-500 border border-primary-500/20 shadow-sm">
                      {story.id}
                    </span>
                  </div>
                  <p className={`text-sm ${secondaryTextClass} mb-3`}>
                    लेखक: <span className="font-medium">{story.author}</span>
                  </p>
                  <p className={`${secondaryTextClass} line-clamp-3`}>
                    {story.excerpt}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-dashed border-gray-200/50 dark:border-gray-700/30 relative z-10">
                  <Link 
                    to={`/stories/${story.id}`} 
                    className="flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors bg-gradient-to-r from-primary-500/10 to-transparent px-3 py-1 rounded-full hover:from-primary-500/20 hover:to-primary-500/5"
                  >
                    <span>पूरी कहानी पढ़ें</span>
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className={`text-center py-12 ${cardClass} rounded-xl shadow-lg border ${borderClass} p-8 relative overflow-hidden`}>
            {/* Enhanced persistent empty state background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/40 to-purple-500/40 pointer-events-none z-0"></div>
            
            <Book className={`w-16 h-16 mx-auto ${secondaryTextClass} mb-4 opacity-30 relative z-10`} />
            <h3 className={`text-xl font-bold ${textClass} mb-2 relative z-10`}>कोई कहानी नहीं मिली</h3>
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

export default StoriesPage; 