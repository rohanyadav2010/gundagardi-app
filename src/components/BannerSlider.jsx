import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, Bookmark, BookMarked, Book } from 'lucide-react';

const banners = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Discover Literary Worlds',
    subtitle: 'Dive into captivating stories and poems',
    icon: <Book className="w-8 h-8" />
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Explore Classic Poetry',
    subtitle: 'Experience emotions through beautiful verses',
    icon: <BookOpen className="w-8 h-8" />
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Immerse in Stories',
    subtitle: 'From ancient tales to modern narratives',
    icon: <Bookmark className="w-8 h-8" />
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Literary Masterpieces',
    subtitle: 'Explore the greatest works of literature',
    icon: <BookMarked className="w-8 h-8" />
  }
];

function BannerSlider() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const goToPreviousBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      <AnimatePresence mode="wait">
        {banners.map((banner, index) => (
          index === currentBanner && (
            <motion.div
              key={banner.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${banner.imageUrl})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-dark-bg-primary/90 via-dark-bg-primary/70 to-transparent">
                  <div className="flex flex-col justify-center h-full max-w-2xl px-8 md:px-16">
                    <motion.div
                      className="inline-flex items-center space-x-2 bg-primary-600/20 backdrop-blur-sm p-2 rounded-lg mb-4 w-fit"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      {banner.icon}
                      <span className="text-white/90 font-medium">Sahitya Sagar</span>
                    </motion.div>
                    <motion.h1 
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      {banner.title}
                    </motion.h1>
                    <motion.p 
                      className="text-xl text-white/80 max-w-lg"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      {banner.subtitle}
                    </motion.p>
                    <motion.button 
                      className="btn btn-primary mt-8 w-fit"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      Explore Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      {/* Navigation buttons */}
      <button 
        onClick={goToPreviousBanner}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark-bg-primary/30 hover:bg-dark-bg-primary/60 backdrop-blur-sm text-white p-2 rounded-full z-10 transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={goToNextBanner}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark-bg-primary/30 hover:bg-dark-bg-primary/60 backdrop-blur-sm text-white p-2 rounded-full z-10 transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((banner, index) => (
          <button
            key={banner.id}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBanner ? 'bg-primary-500 w-6' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentBanner(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default BannerSlider; 