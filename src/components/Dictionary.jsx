import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Volume2, Star, MessageCircle, Sparkles, Zap, ExternalLink } from 'lucide-react';

const Dictionary = ({ isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  // Enhanced theme classes for better glassmorphism
  const bgClass = ''; // Removed bg class to let app background show through
  const cardBgClass = isDarkMode 
    ? 'bg-dark-bg-secondary/60 backdrop-blur-xl border-gray-700/30 hover:border-purple-700/40' 
    : 'bg-white/60 backdrop-blur-xl border-gray-200/50 hover:border-purple-300/60';
  const inputBgClass = isDarkMode 
    ? 'bg-dark-bg-tertiary/70 border-gray-700/50 focus:border-purple-500/70' 
    : 'bg-white/70 border-gray-300/60 focus:border-purple-500/70';
  const textClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const secondaryTextClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  // Animation variants for floating elements
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }
  };

  useEffect(() => {
    // Load recent searches from localStorage on component mount
    const savedSearches = localStorage.getItem('recentDictionarySearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  const saveToRecentSearches = (term, definition) => {
    const newSearch = {
      term,
      timestamp: new Date().toISOString(),
      snippet: definition.slice(0, 100) + '...'
    };
    
    const updatedSearches = [newSearch, ...recentSearches.filter(s => s.term !== term)].slice(0, 5);
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentDictionarySearches', JSON.stringify(updatedSearches));
  };

  const searchDictionary = async () => {
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
      
      if (!response.ok) {
        throw new Error(response.status === 404 
          ? `"${searchTerm}" ka matlab nahi mila. Spelling sahi se likh bhai!"` 
          : 'Failed to fetch definition');
      }
      
      const data = await response.json();
      setSearchResults(data);
      
      // Save successful search to recent searches
      if (data[0] && data[0].meanings && data[0].meanings[0]) {
        const definition = data[0].meanings[0].definitions[0]?.definition || 'No definition found';
        saveToRecentSearches(searchTerm, definition);
      }
    } catch (err) {
      setError(err.message);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchDictionary();
  };

  const handleRecentSearchClick = (term) => {
    setSearchTerm(term);
    // Trigger search immediately when clicking a recent search
    setTimeout(() => {
      searchDictionary();
    }, 100);
  };

  const funnyNoResults = [
    "Abe yaar, dhang se type kar! English aati hai ya nahi?",
    "Kya likha hai tune? Samajh nahi aa raha!",
    "Dictionary me dhang se dekh, ye kya bakwas likha hai?",
    "Spelling galat hai, class 2 wali spelling mistake mat kar!",
    "Itna bhi nahi aata? Exam me fail ho jayega pakka!",
    "Aajkal ke bacche, basic words bhi nahi aate!"
  ];

  const getRandomFunnyMessage = () => {
    const randomIndex = Math.floor(Math.random() * funnyNoResults.length);
    return funnyNoResults[randomIndex];
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`${bgClass} min-h-screen pb-16 glassmorphism`}
    >
      {/* Enhanced glassmorphism background elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[40vw] h-[40vw] rounded-full bg-purple-500/10 blur-[120px] floating-blur-element"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-blue-500/10 blur-[120px] floating-blur-element"></div>
        <div className="absolute top-[40%] right-[30%] w-[25vw] h-[25vw] rounded-full bg-indigo-500/10 blur-[120px] floating-blur-element"></div>
      </div>

      {/* Floating decorative elements with enhanced blur */}
      <div className="relative w-full mx-auto max-w-6xl">
        <motion.div 
          className="absolute -top-10 right-10 opacity-15 z-0 blur-[2px]"
          variants={floatingVariants}
          animate="animate"
        >
          <BookOpen className="w-32 h-32 text-purple-500" />
        </motion.div>
        <motion.div 
          className="absolute bottom-0 left-10 opacity-15 z-0 blur-[2px]"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <Star className="w-24 h-24 text-yellow-500" />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto p-6 relative z-10">
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-bold mb-3 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'} drop-shadow-sm flex items-center justify-center`}>
            <Sparkles className="w-8 h-8 mr-2 text-yellow-500 animate-pulse" />
            Gundagardi Dictionary
            <Sparkles className="w-8 h-8 ml-2 text-yellow-500 animate-pulse" />
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-lg ${secondaryTextClass} backdrop-blur-xl py-2 px-4 rounded-full inline-block bg-gradient-to-r ${isDarkMode ? 'from-purple-900/30 to-blue-900/30' : 'from-purple-100/70 to-blue-100/70'} shadow-md border ${isDarkMode ? 'border-purple-800/30' : 'border-purple-200/70'} glassmorphism-accent`}
          >
            Exam me English word ka matalab nahi aata? Yaha se dekh le jaldi!
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`mb-10 ${cardBgClass} rounded-xl shadow-xl p-8 border transition-all duration-300 hover:shadow-2xl relative overflow-hidden ${isDarkMode ? 'glassmorphism-dark' : 'glassmorphism-light'}`}
        >
          {/* Subtle gradient background for glassmorphism effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-purple-500/5 pointer-events-none"></div>
          
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 relative z-10">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className={`h-5 w-5 ${secondaryTextClass}`} />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="English word type kar, jaldi bata denge..."
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${inputBgClass} ${textClass} shadow-md transition-all duration-300`}
              />
            </div>
            <button
              type="submit"
              className={`bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center ${isLoading ? 'opacity-75' : ''} shadow-lg hover:shadow-xl border border-purple-500/20`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white mr-2"></div>
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  <span>Search</span>
                </>
              )}
            </button>
          </form>

          {/* Recent searches with enhanced glassmorphism */}
          {recentSearches.length > 0 && (
            <div className="mt-5 relative z-10">
              <p className={`text-sm ${secondaryTextClass} mb-2`}>Recent searches:</p>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleRecentSearchClick(search.term)}
                    className={`text-sm ${isDarkMode ? 'bg-gray-800/70 hover:bg-gray-700/70' : 'bg-gray-100/70 hover:bg-gray-200/70'} px-3 py-1 rounded-full ${textClass} transition-all duration-200 backdrop-blur-xl border ${isDarkMode ? 'border-gray-700/30' : 'border-gray-300/30'} hover:shadow-md group`}
                  >
                    <span className="mr-1">{search.term}</span>
                    <span className={`inline-block transition-transform group-hover:translate-x-0.5 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>&rarr;</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Results section with enhanced glassmorphism */}
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${isDarkMode ? 'bg-red-900/60 border-red-800/50 text-red-200' : 'bg-red-100/60 border-red-500/50 text-red-700'} border-l-4 p-4 mb-6 rounded-xl backdrop-blur-xl shadow-lg relative overflow-hidden`}
          >
            {/* Error background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-red-500/5 pointer-events-none"></div>
            
            <div className="flex items-start relative z-10">
              <p className="font-medium">{error}</p>
            </div>
            <p className="mt-2 text-sm italic bg-gradient-to-r from-white/10 to-transparent px-3 py-1 rounded-full inline-block">{getRandomFunnyMessage()}</p>
          </motion.div>
        )}

        {searchResults.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${cardBgClass} rounded-xl shadow-xl p-8 mt-4 border transition-all duration-300 hover:shadow-2xl relative overflow-hidden ${isDarkMode ? 'glassmorphism-card-dark' : 'glassmorphism-card-light'}`}
          >
            {/* Results background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-blue-500/5 pointer-events-none"></div>
            
            {searchResults.map((result, resultIndex) => (
              <div key={resultIndex} className={`${resultIndex > 0 ? `mt-8 pt-8 border-t ${isDarkMode ? 'border-gray-700/40' : 'border-gray-200/60'}` : ""} relative z-10`}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className={`text-2xl font-bold ${textClass} bg-gradient-to-r ${isDarkMode ? 'from-purple-400 to-indigo-400' : 'from-purple-600 to-indigo-600'} bg-clip-text text-transparent flex items-center`}>
                    {result.word}
                    <Zap className="w-5 h-5 ml-2 text-yellow-500" />
                  </h2>
                  {result.phonetics && result.phonetics[0] && result.phonetics[0].text && (
                    <span className={`${secondaryTextClass} backdrop-blur-xl px-2 py-0.5 rounded-full ${isDarkMode ? 'bg-gray-800/70' : 'bg-gray-100/70'} border ${isDarkMode ? 'border-gray-700/40' : 'border-gray-200/50'} shadow-sm`}>{result.phonetics[0].text}</span>
                  )}
                  {result.phonetics && result.phonetics.some(p => p.audio) && (
                    <button 
                      onClick={() => {
                        const audio = result.phonetics.find(p => p.audio).audio;
                        new Audio(audio).play();
                      }}
                      className={`flex items-center justify-center w-8 h-8 rounded-full ${isDarkMode ? 'bg-purple-700/70 hover:bg-purple-600/70' : 'bg-purple-100/70 hover:bg-purple-200/70'} transition-all duration-200 shadow-md hover:shadow-lg border ${isDarkMode ? 'border-purple-600/30' : 'border-purple-300/50'}`}
                    >
                      <Volume2 className={`h-4 w-4 ${isDarkMode ? 'text-purple-200' : 'text-purple-700'}`} />
                    </button>
                  )}
                </div>

                {result.meanings.map((meaning, meaningIndex) => (
                  <div key={meaningIndex} className="mb-6">
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'} mb-3 px-3 py-1 rounded-lg inline-block ${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-100/60'} backdrop-blur-xl shadow-sm border ${isDarkMode ? 'border-purple-800/30' : 'border-purple-200/60'}`}>
                      {meaning.partOfSpeech}
                    </h3>
                    
                    <div className={`pl-4 border-l-2 ${isDarkMode ? 'border-gray-700/60' : 'border-gray-200/60'} ml-2`}>
                      {meaning.definitions.map((definition, definitionIndex) => (
                        <div key={definitionIndex} className={`mb-4 ${definitionIndex > 0 ? 'mt-4' : ''} ${definitionIndex > 0 ? `pt-4 border-t ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/60'}` : ''}`}>
                          <div className={`${cardBgClass} p-4 rounded-lg shadow-md`}>
                            <p className={`${textClass} mb-2`}>
                              <span className="font-medium text-sm text-gray-500 mr-2">{definitionIndex + 1}.</span> 
                              {definition.definition}
                            </p>
                            
                            {definition.example && (
                              <p className={`${secondaryTextClass} text-sm italic pl-6 border-l-2 ${isDarkMode ? 'border-purple-700/40' : 'border-purple-300/60'} bg-gradient-to-r ${isDarkMode ? 'from-purple-900/20 to-transparent' : 'from-purple-100/40 to-transparent'} py-1 px-2 rounded-r-md`}>
                                "{definition.example}"
                              </p>
                            )}
                          </div>
                          
                          {definition.synonyms && definition.synonyms.length > 0 && (
                            <div className="mt-2 pl-4">
                              <p className={`text-xs ${secondaryTextClass} mb-1`}>Synonyms:</p>
                              <div className="flex flex-wrap gap-1">
                                {definition.synonyms.slice(0, 5).map((synonym, synIndex) => (
                                  <span 
                                    key={synIndex} 
                                    className={`text-xs ${isDarkMode ? 'bg-indigo-900/40 text-indigo-300' : 'bg-indigo-100/60 text-indigo-700'} rounded px-2 py-0.5 backdrop-blur-sm border ${isDarkMode ? 'border-indigo-800/30' : 'border-indigo-200/60'}`}
                                  >
                                    {synonym}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {definition.antonyms && definition.antonyms.length > 0 && (
                            <div className="mt-2 pl-4">
                              <p className={`text-xs ${secondaryTextClass} mb-1`}>Antonyms:</p>
                              <div className="flex flex-wrap gap-1">
                                {definition.antonyms.slice(0, 5).map((antonym, antIndex) => (
                                  <span 
                                    key={antIndex} 
                                    className={`text-xs ${isDarkMode ? 'bg-rose-900/40 text-rose-300' : 'bg-rose-100/60 text-rose-700'} rounded px-2 py-0.5 backdrop-blur-sm border ${isDarkMode ? 'border-rose-800/30' : 'border-rose-200/60'}`}
                                  >
                                    {antonym}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
                {result.sourceUrls && result.sourceUrls.length > 0 && (
                  <div className={`text-xs ${secondaryTextClass} mt-6 pt-4 border-t ${isDarkMode ? 'border-gray-700/40' : 'border-gray-200/60'}`}>
                    <div className="flex items-center">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      <span>Source:</span>
                    </div>
                    {result.sourceUrls.map((url, urlIndex) => (
                      <a 
                        key={urlIndex}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block mt-1 hover:underline ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                      >
                        {url}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Fun message at the bottom */}
            <div className={`text-center mt-8 pt-4 border-t ${isDarkMode ? 'border-gray-700/30' : 'border-gray-200/60'}`}>
              <p className={`text-sm ${secondaryTextClass} italic`}>
                Aur dictionary dekhta rahega ki padhai bhi karega? Ja exam ki preparation kar!
              </p>
            </div>
          </motion.div>
        )}
        
        {/* Empty state when no search has been done yet */}
        {!searchResults.length && !error && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`text-center py-12 ${cardBgClass} rounded-xl shadow-lg p-8 relative overflow-hidden ${isDarkMode ? 'glassmorphism-card-dark' : 'glassmorphism-card-light'}`}
          >
            {/* Empty state background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl flex items-center justify-center mb-4 border border-purple-500/20 shadow-lg">
                <BookOpen className={`w-10 h-10 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              </div>
              
              <h3 className={`text-xl font-bold ${textClass} mb-2`}>शब्द खोजें</h3>
              <p className={`${secondaryTextClass} max-w-md mx-auto`}>
                ऊपर दिए गए सर्च बॉक्स में कोई अंग्रेजी शब्द टाइप करें और उसका अर्थ जानें। 
                हम आपको अंग्रेजी-हिंदी परीक्षा के लिए तैयार करेंगे!
              </p>
              
              <div className="mt-6 flex justify-center space-x-2">
                <button
                  onClick={() => { 
                    setSearchTerm("knowledge"); 
                    setTimeout(() => searchDictionary(), 100);
                  }}
                  className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-purple-900/50 hover:bg-purple-800/50 text-purple-300' : 'bg-purple-100 hover:bg-purple-200 text-purple-700'} backdrop-blur-xl transition-colors border ${isDarkMode ? 'border-purple-800/40' : 'border-purple-300/60'}`}
                >
                  knowledge
                </button>
                <button
                  onClick={() => { 
                    setSearchTerm("examination"); 
                    setTimeout(() => searchDictionary(), 100);
                  }}
                  className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-indigo-900/50 hover:bg-indigo-800/50 text-indigo-300' : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700'} backdrop-blur-xl transition-colors border ${isDarkMode ? 'border-indigo-800/40' : 'border-indigo-300/60'}`}
                >
                  examination
                </button>
                <button
                  onClick={() => { 
                    setSearchTerm("education"); 
                    setTimeout(() => searchDictionary(), 100);
                  }}
                  className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-blue-900/50 hover:bg-blue-800/50 text-blue-300' : 'bg-blue-100 hover:bg-blue-200 text-blue-700'} backdrop-blur-xl transition-colors border ${isDarkMode ? 'border-blue-800/40' : 'border-blue-300/60'}`}
                >
                  education
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Legal disclaimer */}
      <div className={`mt-8 p-4 rounded-lg text-sm ${
        isDarkMode ? 'bg-gray-800/40 text-gray-400 border-gray-700' : 'bg-gray-100/70 text-gray-600 border-gray-200'
      } border`}>
        <p className="flex items-center">
          <span className="mr-2">⚠️</span>
          <span>
            Word definitions are provided by the Free Dictionary API. The accuracy and completeness 
            of definitions cannot be guaranteed. For academic or professional use, please consult official dictionaries.
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default Dictionary; 