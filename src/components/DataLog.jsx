import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Lock, 
  Eye, 
  EyeOff, 
  RefreshCw, 
  AlertCircle, 
  LogOut,
  Download,
  Search,
  SortAsc,
  SortDesc,
  Filter,
  Star,
  ShieldAlert,
  X,
  Copy,
  CheckCircle,
  MessageSquare,
  Trash2,
  AlertTriangle
} from 'lucide-react';
import { SHEETDB_API_URL } from '../config';
import { Navigate } from 'react-router-dom';
import FeedbackMessageModal from './FeedbackMessageModal';

const DataLog = ({ isDarkMode, glassmorphismClass, isAdmin }) => {
  // Check if user is admin, show unauthorized screen if not
  if (typeof isAdmin !== 'undefined' && !isAdmin) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`container mx-auto px-4 py-12 ${isDarkMode ? 'text-white' : 'text-gray-800'} min-h-[80vh] flex items-center justify-center`}
      >
        <div className={`${glassmorphismClass} rounded-xl shadow-xl border max-w-md w-full mx-auto p-8 relative z-10 ${isDarkMode ? 'border-red-700/50' : 'border-red-200/50'}`}>
          <div className="text-center mb-6">
            <ShieldAlert className={`w-16 h-16 mx-auto mb-3 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-2`}>Unauthorized Access</h1>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              You don't have permission to view this page. This area is restricted to administrators only.
            </p>
          </div>
          <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-red-900/30' : 'bg-red-50'} text-sm ${isDarkMode ? 'text-red-200' : 'text-red-800'}`}>
            <p className="flex items-start">
              <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
              If you believe you should have access to this page, please contact the system administrator.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }
  
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  
  // Data states
  const [feedbackData, setFeedbackData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedMessage, setExpandedMessage] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(null);
  
  // Filtering and sorting
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('timestamp');
  const [sortDirection, setSortDirection] = useState('desc');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  // Delete confirmation state
  const [deleteConfirmItem, setDeleteConfirmItem] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  
  // Text classes based on theme
  const textClass = isDarkMode ? 'text-white' : 'text-gray-800';
  const secondaryTextClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const accentClass = isDarkMode ? 'text-purple-400' : 'text-purple-600';
  const bgClass = isDarkMode ? 'bg-gray-800' : 'bg-white';
  
  // Authentication function
  const handleAuthentication = (e) => {
    e.preventDefault();
    
    // Check password - note: in a real app, this should be done server-side
    if (password === 'Kunal@5185') {
      setIsAuthenticated(true);
      setAuthError('');
      fetchFeedbackData();
    } else {
      setAuthError('Incorrect password. Please try again.');
    }
  };
  
  // Function to fetch data from SheetDB
  const fetchFeedbackData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Check if SheetDB URL is configured
      if (SHEETDB_API_URL === 'https://sheetdb.io/api/v1/your_sheetdb_api_id') {
        // In development, create mock data
        const mockData = Array.from({ length: 10 }, (_, i) => ({
          name: `Test User ${i + 1}`,
          rating: Math.floor(Math.random() * 5) + 1,
          category: ['general', 'bug', 'feature', 'content'][Math.floor(Math.random() * 4)],
          message: `This is a sample feedback message ${i + 1}. It's just for testing purposes.`,
          email: i % 3 === 0 ? `user${i + 1}@example.com` : 'Not provided',
          timestamp: new Date(Date.now() - (i * 86400000)).toISOString()
        }));
        
        setFeedbackData(mockData);
        setIsLoading(false);
        console.warn('Using mock data. Configure SheetDB API URL for real data.');
        return;
      }
      
      const response = await fetch(`${SHEETDB_API_URL}?sheet=Sheet1`);
      
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      
      const data = await response.json();
      setFeedbackData(data);
    } catch (err) {
      console.error('Failed to fetch feedback data:', err);
      setError('Failed to load feedback data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Filter and sort data
  const getFilteredAndSortedData = () => {
    return feedbackData
      .filter(item => {
        // Apply category filter
        if (categoryFilter !== 'all' && item.category !== categoryFilter) {
          return false;
        }
        
        // Apply search term filter
        if (searchTerm) {
          const searchLower = searchTerm.toLowerCase();
          return (
            item.name?.toLowerCase().includes(searchLower) ||
            item.message?.toLowerCase().includes(searchLower) ||
            item.email?.toLowerCase().includes(searchLower)
          );
        }
        
        return true;
      })
      .sort((a, b) => {
        if (!a[sortField] || !b[sortField]) return 0;
        
        // Sort by the selected field
        if (sortDirection === 'asc') {
          return a[sortField].toString().localeCompare(b[sortField].toString());
        } else {
          return b[sortField].toString().localeCompare(a[sortField].toString());
        }
      });
  };
  
  // Export data as CSV
  const exportCSV = () => {
    const filteredData = getFilteredAndSortedData();
    
    if (filteredData.length === 0) {
      return;
    }
    
    // Create CSV headers
    const headers = Object.keys(filteredData[0]).join(',');
    
    // Create CSV rows
    const rows = filteredData.map(item => 
      Object.values(item)
        .map(value => `"${value?.toString().replace(/"/g, '""') || ''}"`)
        .join(',')
    );
    
    // Combine headers and rows
    const csv = [headers, ...rows].join('\n');
    
    // Create download link
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.setAttribute('href', url);
    link.setAttribute('download', `feedback_data_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Function to delete entry
  const handleDeleteEntry = async (index) => {
    const itemToDelete = filteredData[index];
    setIsDeleting(true);
    setDeleteError(null);
    
    try {
      // Check if SheetDB URL is configured
      if (SHEETDB_API_URL === 'https://sheetdb.io/api/v1/your_sheetdb_api_id') {
        // In development, just remove from local state
        const newData = feedbackData.filter(item => 
          !(item.name === itemToDelete.name && 
            item.message === itemToDelete.message && 
            item.timestamp === itemToDelete.timestamp)
        );
        setFeedbackData(newData);
        setDeleteSuccess(true);
        setTimeout(() => setDeleteSuccess(false), 3000);
        console.warn('Using mock deletion. Configure SheetDB API URL for real deletion.');
      } else {
        // In production, use SheetDB API to delete
        console.log("Attempting to delete entry:", itemToDelete);
        
        // According to SheetDB documentation, we need to use the /column/value format
        // Choose a unique identifying column - timestamp is usually a good identifier
        // Make sure to construct the URL correctly as per documentation
        const deleteUrl = `${SHEETDB_API_URL}/timestamp/${encodeURIComponent(itemToDelete.timestamp)}`;
        
        console.log("Delete URL:", deleteUrl);
        
        const response = await fetch(deleteUrl, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        console.log("Delete response status:", response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Delete API error:", errorText);
          throw new Error(`Error deleting entry: ${response.status} - ${errorText}`);
        }
        
        const result = await response.json();
        console.log("Delete result:", result);
        
        // If successful, refresh data
        await fetchFeedbackData();
        setDeleteSuccess(true);
        setTimeout(() => setDeleteSuccess(false), 3000);
      }
    } catch (err) {
      console.error('Failed to delete entry:', err);
      setDeleteError(`Failed to delete entry: ${err.message}. Please try again later.`);
    } finally {
      setIsDeleting(false);
      setDeleteConfirmItem(null);
    }
  };
  
  // Page animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };
  
  // Render the login form if not authenticated
  if (!isAuthenticated) {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.3 }}
        className={`container mx-auto px-4 py-12 ${textClass} min-h-[80vh] flex items-center justify-center`}
      >
        <div className={`${glassmorphismClass} rounded-xl shadow-xl border max-w-md w-full mx-auto p-8 relative z-10 ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
          <div className="text-center mb-6">
            <Database className={`w-12 h-12 mx-auto mb-2 ${accentClass}`} />
            <h1 className={`text-2xl font-bold ${textClass}`}>Developer Access</h1>
            <p className={`${secondaryTextClass}`}>Enter password to view feedback data</p>
          </div>
          
          {authError && (
            <div className={`mb-6 p-3 rounded-lg text-sm ${isDarkMode ? 'bg-red-900/50 text-red-200' : 'bg-red-100 text-red-800'} flex items-center`}>
              <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
              {authError}
            </div>
          )}
          
          <form onSubmit={handleAuthentication}>
            <div className="mb-4">
              <label className={`block font-medium mb-2 ${textClass}`}>Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className={`h-5 w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full rounded-lg border pl-10 pr-10 py-2 ${
                    isDarkMode
                      ? 'border-gray-700 bg-gray-800/50 text-white placeholder-gray-500'
                      : 'border-gray-300 bg-white/70 text-gray-900 placeholder-gray-400'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="Enter developer password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showPassword ? (
                    <EyeOff className={`h-5 w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  ) : (
                    <Eye className={`h-5 w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  )}
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-lg font-medium 
                ${isDarkMode ? 'bg-purple-700 hover:bg-purple-600' : 'bg-purple-600 hover:bg-purple-500'} 
                text-white flex items-center justify-center shadow-md transition-all`}
            >
              <Lock className="w-4 h-4 mr-2" />
              Access Data Log
            </button>
          </form>
        </div>
      </motion.div>
    );
  }
  
  // Get filtered and sorted data
  const filteredData = getFilteredAndSortedData();
  
  // Render data log if authenticated
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
      className={`container mx-auto px-4 py-8 ${textClass} relative`}
    >
      {/* Background gradients */}
      <div className="fixed top-0 left-0 w-full h-full -z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-500/40 blur-[100px] opacity-100"></div>
        <div className="absolute bottom-[20%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-blue-500/40 blur-[100px] opacity-100"></div>
        <div className="absolute top-[40%] right-[30%] w-[30vw] h-[30vw] rounded-full bg-pink-500/40 blur-[100px] opacity-100"></div>
      </div>
      
      {/* Page header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between relative z-10">
        <div>
          <h1 className={`text-2xl font-bold ${textClass} flex items-center`}>
            <Database className={`w-6 h-6 mr-2 ${accentClass}`} />
            Feedback Data Log
          </h1>
          <p className={`${secondaryTextClass} mt-1`}>
            Viewing feedback submissions for Gundagardi application
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex space-x-2">
          <button
            onClick={() => fetchFeedbackData()}
            className={`p-2 rounded-lg flex items-center text-sm font-medium 
              ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} 
              transition-colors`}
          >
            <RefreshCw className="w-4 h-4 mr-1" />
            Refresh
          </button>
          
          <button
            onClick={exportCSV}
            className={`p-2 rounded-lg flex items-center text-sm font-medium 
              ${isDarkMode ? 'bg-blue-700/70 hover:bg-blue-600/70' : 'bg-blue-100 hover:bg-blue-200'} 
              ${isDarkMode ? 'text-blue-100' : 'text-blue-800'}
              transition-colors`}
          >
            <Download className="w-4 h-4 mr-1" />
            Export CSV
          </button>
          
          <button
            onClick={() => setIsAuthenticated(false)}
            className={`p-2 rounded-lg flex items-center text-sm font-medium 
              ${isDarkMode ? 'bg-red-700/70 hover:bg-red-600/70' : 'bg-red-100 hover:bg-red-200'} 
              ${isDarkMode ? 'text-red-100' : 'text-red-800'}
              transition-colors`}
          >
            <LogOut className="w-4 h-4 mr-1" />
            Logout
          </button>
        </div>
      </div>
      
      {/* Filters and search */}
      <div className={`${glassmorphismClass} rounded-lg border p-4 mb-6 relative z-10 ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Search */}
          <div className="flex-grow">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className={`h-5 w-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, message or email..."
                className={`w-full rounded-lg border pl-10 py-2 ${
                  isDarkMode
                    ? 'border-gray-700 bg-gray-800/50 text-white placeholder-gray-500'
                    : 'border-gray-300 bg-white/70 text-gray-900 placeholder-gray-400'
                } focus:outline-none focus:ring-1 focus:ring-purple-500`}
              />
            </div>
          </div>
          
          {/* Category filter */}
          <div className="md:w-40">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Filter className={`h-4 w-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              </div>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className={`w-full rounded-lg border pl-9 py-2 appearance-none ${
                  isDarkMode
                    ? 'border-gray-700 bg-gray-800/50 text-white'
                    : 'border-gray-300 bg-white/70 text-gray-900'
                } focus:outline-none focus:ring-1 focus:ring-purple-500`}
              >
                <option value="all">All Categories</option>
                <option value="general">General</option>
                <option value="bug">Bug</option>
                <option value="feature">Feature</option>
                <option value="content">Content</option>
              </select>
            </div>
          </div>
          
          {/* Sort direction */}
          <div className="md:w-48">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                {sortDirection === 'asc' ? (
                  <SortAsc className={`h-4 w-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                ) : (
                  <SortDesc className={`h-4 w-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                )}
              </div>
              <select
                value={sortField}
                onChange={(e) => setSortField(e.target.value)}
                className={`w-full rounded-lg border pl-9 py-2 appearance-none ${
                  isDarkMode
                    ? 'border-gray-700 bg-gray-800/50 text-white'
                    : 'border-gray-300 bg-white/70 text-gray-900'
                } focus:outline-none focus:ring-1 focus:ring-purple-500`}
              >
                <option value="timestamp">Sort by Date</option>
                <option value="name">Sort by Name</option>
                <option value="rating">Sort by Rating</option>
                <option value="category">Sort by Category</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
                  className={`p-1 rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
                >
                  {sortDirection === 'asc' ? (
                    <SortAsc className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  ) : (
                    <SortDesc className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Data display */}
      <div className={`relative z-10 overflow-x-auto`}>
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <RefreshCw className={`w-8 h-8 ${accentClass} animate-spin`} />
            <span className={`ml-3 ${textClass} text-lg`}>Loading feedback data...</span>
          </div>
        ) : error ? (
          <div className={`p-6 rounded-lg text-center ${isDarkMode ? 'bg-red-900/50 text-red-200' : 'bg-red-100 text-red-800'}`}>
            <AlertCircle className="w-6 h-6 mb-2 mx-auto" />
            <p>{error}</p>
            <button
              onClick={fetchFeedbackData}
              className={`mt-4 px-4 py-2 rounded-lg text-sm font-medium 
                ${isDarkMode ? 'bg-red-700 hover:bg-red-600' : 'bg-red-200 hover:bg-red-300'} 
                transition-colors`}
            >
              Try Again
            </button>
          </div>
        ) : filteredData.length === 0 ? (
          <div className={`p-6 rounded-lg text-center ${glassmorphismClass}`}>
            <Database className={`w-6 h-6 mb-2 mx-auto ${secondaryTextClass}`} />
            <p className={secondaryTextClass}>
              {searchTerm || categoryFilter !== 'all'
                ? 'No feedback entries match your search filters'
                : 'No feedback data available yet'}
            </p>
            {(searchTerm || categoryFilter !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('all');
                }}
                className={`mt-4 px-4 py-2 rounded-lg text-sm font-medium 
                  ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} 
                  transition-colors`}
              >
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <div className={`${glassmorphismClass} rounded-lg border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} overflow-hidden`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={isDarkMode ? 'bg-gray-800/80' : 'bg-gray-100/90'}>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Rating</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Category</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Message</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/30">
                  {filteredData.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`${
                        isDarkMode 
                          ? index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-800/50'
                          : index % 2 === 0 ? 'bg-white/70' : 'bg-gray-50/70'
                      }`}
                    >
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{item.name}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <div className="flex items-center">
                          <span className="mr-1">{item.rating}</span>
                          <Star className={`w-4 h-4 ${parseInt(item.rating) >= 4 ? 'text-yellow-500' : parseInt(item.rating) >= 3 ? 'text-yellow-600' : 'text-gray-500'}`} fill={parseInt(item.rating) >= 3 ? 'currentColor' : 'none'} />
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span 
                          className={`px-2 py-1 rounded-full text-xs ${
                            item.category === 'bug' 
                              ? isDarkMode ? 'bg-red-900/70 text-red-200' : 'bg-red-100 text-red-800'
                              : item.category === 'feature'
                              ? isDarkMode ? 'bg-green-900/70 text-green-200' : 'bg-green-100 text-green-800'
                              : item.category === 'content'
                              ? isDarkMode ? 'bg-amber-900/70 text-amber-200' : 'bg-amber-100 text-amber-800'
                              : isDarkMode ? 'bg-blue-900/70 text-blue-200' : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {item.category}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <div className="relative">
                          <div 
                            className="max-w-[300px] cursor-pointer group flex items-center"
                            onClick={() => setExpandedMessage(index)}
                            title={item.message.length > 60 ? "Click to view full message" : ''}
                          >
                            <span className="group-hover:text-purple-500 transition-colors">
                              {item.message.length > 60 ? `${item.message.substring(0, 60)}...` : item.message}
                            </span>
                            {item.message.length > 60 && (
                              <span className={`ml-2 px-1.5 py-0.5 text-xs rounded ${isDarkMode ? 'bg-purple-800/50 text-purple-300' : 'bg-purple-100 text-purple-700'} group-hover:bg-purple-500 group-hover:text-white transition-colors`}>
                                View
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        {item.email && item.email !== 'Not provided' ? (
                          <div className="relative flex items-center group">
                            <span className="max-w-[150px] truncate mr-2">{item.email}</span>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(item.email);
                                setCopiedEmail(index);
                                setTimeout(() => setCopiedEmail(null), 2000);
                              }}
                              className={`p-1 rounded-full ${isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-200/50'} opacity-0 group-hover:opacity-100 transition-opacity`}
                              title="Copy email"
                            >
                              {copiedEmail === index ? (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                            {copiedEmail === index && (
                              <span className="absolute -top-8 left-0 text-xs px-2 py-1 rounded bg-green-900/70 text-green-100 whitespace-nowrap">
                                Copied to clipboard!
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className={secondaryTextClass}>Not provided</span>
                        )}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        {new Date(item.timestamp).toLocaleString()}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <button
                          onClick={() => setDeleteConfirmItem(index)}
                          className={`p-1.5 rounded-full ${
                            isDarkMode 
                              ? 'hover:bg-red-900/50 text-gray-400 hover:text-red-300' 
                              : 'hover:bg-red-100 text-gray-500 hover:text-red-600'
                          } transition-colors`}
                          title="Delete entry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 text-sm flex items-center justify-between border-t border-gray-700/30">
              <div className={secondaryTextClass}>
                Showing <span className={textClass}>{filteredData.length}</span> of <span className={textClass}>{feedbackData.length}</span> entries
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Delete confirmation modal */}
      {deleteConfirmItem !== null && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setDeleteConfirmItem(null)}
        >
          <div 
            className={`relative p-6 rounded-xl shadow-xl max-w-md w-full border overflow-hidden ${
              isDarkMode ? 'bg-gray-900 border-red-800/50' : 'bg-white border-red-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start mb-4">
              <div className={`p-2 rounded-full mr-3 flex-shrink-0 ${
                isDarkMode ? 'bg-red-900/30' : 'bg-red-100'
              }`}>
                <AlertTriangle className={`w-6 h-6 ${
                  isDarkMode ? 'text-red-400' : 'text-red-600'
                }`} />
              </div>
              <div>
                <h3 className={`text-lg font-bold ${textClass} mb-1`}>Confirm Deletion</h3>
                <p className={secondaryTextClass}>
                  Are you sure you want to delete this feedback entry? This action cannot be undone.
                </p>
              </div>
            </div>
            
            {deleteError && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${
                isDarkMode ? 'bg-red-900/30 text-red-200' : 'bg-red-100 text-red-800'
              } flex items-center`}>
                <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                {deleteError}
              </div>
            )}
            
            <div className="flex items-center justify-end space-x-3">
              <button
                onClick={() => setDeleteConfirmItem(null)}
                className={`px-4 py-2 rounded-lg font-medium 
                  ${isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  } transition-colors`}
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteEntry(deleteConfirmItem)}
                className={`px-4 py-2 rounded-lg font-medium 
                  ${isDarkMode 
                    ? 'bg-red-700 hover:bg-red-600 text-white' 
                    : 'bg-red-600 hover:bg-red-500 text-white'
                  } transition-colors flex items-center`}
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Success notification */}
      {deleteSuccess && (
        <div 
          className={`fixed bottom-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg flex items-center ${
            isDarkMode ? 'bg-green-900 text-green-100' : 'bg-green-100 text-green-800'
          }`}
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          Feedback entry successfully deleted
        </div>
      )}

      {/* Render feedback message modal */}
      {expandedMessage !== null && (
        <FeedbackMessageModal
          isOpen={expandedMessage !== null}
          onClose={() => setExpandedMessage(null)}
          message={filteredData[expandedMessage]?.message || ''}
          isDarkMode={isDarkMode}
          textClass={textClass}
          secondaryTextClass={secondaryTextClass}
          accentClass={accentClass}
          glassmorphismClass={glassmorphismClass}
          item={filteredData[expandedMessage] || {}}
          onDelete={() => {
            setDeleteConfirmItem(expandedMessage);
            setExpandedMessage(null);
          }}
        />
      )}
    </motion.div>
  );
};

export default DataLog; 