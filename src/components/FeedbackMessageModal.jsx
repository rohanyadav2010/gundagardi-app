import React from 'react';
import { MessageSquare, X, Star, Copy, CheckCircle, Trash2 } from 'lucide-react';

const FeedbackMessageModal = ({ 
  isOpen, 
  onClose, 
  message, 
  isDarkMode, 
  textClass, 
  secondaryTextClass, 
  accentClass, 
  glassmorphismClass, 
  item,
  onDelete 
}) => {
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  if (!isOpen) return null;

  const copyEmailToClipboard = () => {
    if (item.email && item.email !== 'Not provided') {
      navigator.clipboard.writeText(item.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" 
      onClick={onClose}
      style={{ animation: 'fadeIn 0.2s ease-out' }}
    >
      <div 
        className={`relative rounded-xl shadow-2xl w-[95%] max-w-6xl h-[90vh] overflow-hidden border ${
          isDarkMode ? 'border-purple-700/50 bg-gray-900/95' : 'border-purple-200/50 bg-white/95'
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'scaleIn 0.3s ease-out' }}
      >
        {/* Header */}
        <div className={`flex justify-between items-center p-6 border-b ${
          isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'
        }`}>
          <h3 className={`font-bold text-2xl ${textClass} flex items-center`}>
            <MessageSquare className={`mr-3 ${accentClass} w-7 h-7`} />
            Feedback Message
          </h3>
          <div className="flex items-center space-x-2">
            {onDelete && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete();
                }}
                className={`p-2 rounded-full ${
                  isDarkMode 
                    ? 'hover:bg-red-900/50 text-gray-400 hover:text-red-300' 
                    : 'hover:bg-red-100 text-gray-500 hover:text-red-600'
                } transition-colors`}
                title="Delete feedback"
              >
                <Trash2 className="w-6 h-6" />
              </button>
            )}
            <button
              onClick={onClose}
              className={`p-2 rounded-full ${
                isDarkMode 
                  ? 'hover:bg-gray-700 text-gray-300 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
              } transition-colors`}
            >
              <X className="w-7 h-7" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex flex-col h-[calc(90vh-80px)]">
          {/* Main content area with scroll */}
          <div className="p-8 flex-1 overflow-hidden">
            <div className={`p-8 rounded-lg h-full overflow-y-auto ${
              isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-800'
            } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <p className="whitespace-pre-wrap break-words text-xl leading-relaxed">{message}</p>
            </div>
          </div>
          
          {/* Metadata Footer */}
          <div className={`p-8 pt-4 border-t ${
            isDarkMode ? 'border-gray-800' : 'border-gray-200'
          } bg-opacity-70 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`flex items-center ${secondaryTextClass}`}>
                <span className="font-medium mr-3 min-w-[100px] text-lg">From:</span> 
                <span className={`${textClass} text-lg bg-opacity-20 px-4 py-2 rounded ${
                  isDarkMode ? 'bg-purple-900' : 'bg-purple-100'
                }`}>
                  {item.name || 'Unknown'}
                </span>
              </div>
              <div className={`flex items-center ${secondaryTextClass}`}>
                <span className="font-medium mr-3 min-w-[100px] text-lg">Category:</span> 
                <span className={`px-4 py-2 rounded-full text-base ${
                  item.category === 'bug' 
                    ? isDarkMode ? 'bg-red-900/70 text-red-200' : 'bg-red-100 text-red-800'
                    : item.category === 'feature'
                    ? isDarkMode ? 'bg-green-900/70 text-green-200' : 'bg-green-100 text-green-800'
                    : item.category === 'content'
                    ? isDarkMode ? 'bg-amber-900/70 text-amber-200' : 'bg-amber-100 text-amber-800'
                    : isDarkMode ? 'bg-blue-900/70 text-blue-200' : 'bg-blue-100 text-blue-800'
                }`}>
                  {item.category || 'General'}
                </span>
              </div>
              <div className={`flex items-center ${secondaryTextClass}`}>
                <span className="font-medium mr-3 min-w-[100px] text-lg">Rating:</span> 
                <span className="flex items-center">
                  <span className="mr-2 text-xl">{item.rating || '0'}</span>
                  <Star className={`w-6 h-6 ${
                    parseInt(item.rating) >= 4 
                      ? 'text-yellow-500' 
                      : parseInt(item.rating) >= 3 
                      ? 'text-yellow-600' 
                      : 'text-gray-500'
                  }`} fill={parseInt(item.rating) >= 3 ? 'currentColor' : 'none'} />
                </span>
              </div>
              <div className={`flex items-center ${secondaryTextClass}`}>
                <span className="font-medium mr-3 min-w-[100px] text-lg">Date:</span> 
                <span className={`${textClass} text-lg`}>
                  {item.timestamp ? new Date(item.timestamp).toLocaleString() : 'Unknown'}
                </span>
              </div>

              {item.email && item.email !== 'Not provided' && (
                <div className={`mt-4 md:col-span-2 pt-4 border-t ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-200'
                } flex items-center ${secondaryTextClass}`}>
                  <span className="font-medium mr-3 min-w-[100px] text-lg">Email:</span>
                  <span className={`${textClass} mr-3 text-lg`}>{item.email}</span>
                  <button
                    onClick={copyEmailToClipboard}
                    className={`p-2 rounded-full ${
                      isDarkMode 
                        ? 'hover:bg-gray-700 text-gray-400 hover:text-white' 
                        : 'hover:bg-gray-200 text-gray-500 hover:text-gray-700'
                    } transition-colors ml-2`}
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <Copy className="w-6 h-6" />
                    )}
                  </button>
                  {copiedEmail && (
                    <span className="ml-3 text-base text-green-500 font-medium">
                      Email copied to clipboard!
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default FeedbackMessageModal; 