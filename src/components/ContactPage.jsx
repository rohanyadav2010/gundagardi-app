import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, MessageSquare, Clock } from 'lucide-react'

function ContactPage({ isDarkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const bgClass = isDarkMode ? 'bg-dark-bg-primary' : 'bg-gray-50'
  const textClass = isDarkMode ? 'text-dark-text-primary' : 'text-gray-800'
  const secondaryTextClass = isDarkMode ? 'text-dark-text-secondary' : 'text-gray-600'
  const cardClass = isDarkMode ? 'bg-dark-bg-secondary' : 'bg-white'
  const borderClass = isDarkMode ? 'border-dark-bg-tertiary' : 'border-gray-200'
  const inputBgClass = isDarkMode ? 'bg-dark-bg-tertiary' : 'bg-white'
  const inputTextClass = isDarkMode ? 'text-dark-text-primary' : 'text-gray-800'
  const inputBorderClass = isDarkMode ? 'border-dark-bg-secondary focus:border-primary-500' : 'border-gray-300 focus:border-primary-500'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      info: "support@sahityasagar.com",
      detail: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      info: "+91 98765 43210",
      detail: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Office",
      info: "Delhi, Mumbai, Bangalore",
      detail: "Visit us in our offices"
    }
  ]

  const faqs = [
    {
      question: "How can I access the workbook solutions?",
      answer: "You can access all workbook solutions by signing up for a free account. Once logged in, navigate to the specific book and chapter you're looking for under the 'Solutions' section."
    },
    {
      question: "Are your answers aligned with ICSE marking schemes?",
      answer: "Yes, all our solutions are prepared by experienced educators who are familiar with the latest ICSE marking schemes and examination patterns."
    },
    {
      question: "Do you offer personalized support for specific questions?",
      answer: "Yes, you can post your specific questions in our community forum or contact our support team directly, and our experts will provide personalized assistance."
    },
    {
      question: "How frequently are the solutions updated?",
      answer: "We update our solutions annually to align with any changes in the curriculum and to incorporate feedback from students and educators."
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`pt-20 min-h-screen ${bgClass}`}
    >
      {/* Contact Header */}
      <section className={`py-12 ${bgClass}`}>
        <div className="content-container text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${textClass}`}>Get in Touch</h1>
          <p className={`text-lg max-w-2xl mx-auto ${secondaryTextClass}`}>
            Have questions about our platform or need assistance with your studies? We're here to help you get the most out of your learning experience.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className={`py-8 ${bgClass}`}>
        <div className="content-container">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`${cardClass} rounded-lg p-6 shadow-md border ${borderClass} text-center`}
              >
                <div className="mb-4 mx-auto w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500">
                  {item.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${textClass}`}>{item.title}</h3>
                <p className={`font-medium ${textClass}`}>{item.info}</p>
                <p className={`text-sm ${secondaryTextClass}`}>{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className={`py-12 ${isDarkMode ? 'bg-dark-bg-secondary' : 'bg-white'}`}>
        <div className="content-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h2 className={`text-3xl font-bold mb-4 ${textClass}`}>Send us a Message</h2>
                <p className={`${secondaryTextClass}`}>
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-1 ${textClass}`}>Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${inputBgClass} ${inputTextClass} ${inputBorderClass} focus:outline-none`}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-1 ${textClass}`}>Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${inputBgClass} ${inputTextClass} ${inputBorderClass} focus:outline-none`}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className={`block text-sm font-medium mb-1 ${textClass}`}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${inputBgClass} ${inputTextClass} ${inputBorderClass} focus:outline-none`}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className={`block text-sm font-medium mb-1 ${textClass}`}>Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-2 rounded-lg border ${inputBgClass} ${inputTextClass} ${inputBorderClass} focus:outline-none`}
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={submitting}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-500 text-white font-medium ${submitting ? 'opacity-70' : 'hover:bg-primary-600'} transition duration-200`}
                >
                  {submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                {submitted && (
                  <div className="mt-4 p-4 rounded-lg bg-green-100 text-green-800">
                    <p className="font-medium">Thank you for your message! We'll get back to you soon.</p>
                  </div>
                )}
              </form>
            </div>
            
            <div>
              <div className="mb-8">
                <h2 className={`text-3xl font-bold mb-4 ${textClass}`}>Visit Our Office</h2>
                <p className={`${secondaryTextClass}`}>
                  We're located in the heart of Delhi, with additional offices in Mumbai and Bangalore.
                </p>
              </div>
              
              <div className={`rounded-lg overflow-hidden h-80 mb-6 border ${borderClass}`}>
                {/* This would typically be a map iframe, but for this example, using a placeholder */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                    <p className="font-medium text-gray-700">Map placeholder</p>
                    <p className="text-sm text-gray-600">Interactive map would be embedded here</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className={`rounded-lg p-4 border ${borderClass} ${cardClass}`}>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-500 mt-1" />
                    <div>
                      <h3 className={`font-semibold mb-1 ${textClass}`}>Working Hours</h3>
                      <p className={`text-sm ${secondaryTextClass}`}>Monday - Friday: 9am - 6pm</p>
                      <p className={`text-sm ${secondaryTextClass}`}>Saturday: 10am - 2pm</p>
                    </div>
                  </div>
                </div>
                <div className={`rounded-lg p-4 border ${borderClass} ${cardClass}`}>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-primary-500 mt-1" />
                    <div>
                      <h3 className={`font-semibold mb-1 ${textClass}`}>Support Hours</h3>
                      <p className={`text-sm ${secondaryTextClass}`}>Monday - Saturday: 8am - 8pm</p>
                      <p className={`text-sm ${secondaryTextClass}`}>24/7 online support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className={`py-12 ${bgClass}`}>
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${textClass}`}>Frequently Asked Questions</h2>
            <p className={`${secondaryTextClass} max-w-2xl mx-auto`}>
              Find quick answers to common questions about our platform and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${cardClass} rounded-lg p-6 shadow-sm border ${borderClass}`}
                >
                  <h3 className={`text-lg font-semibold mb-2 ${textClass}`}>{faq.question}</h3>
                  <p className={secondaryTextClass}>{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-16 ${isDarkMode ? 'bg-dark-bg-secondary' : 'bg-primary-50'}`}>
        <div className="content-container text-center">
          <h2 className={`text-3xl font-bold mb-4 ${textClass}`}>Ready to Elevate Your Learning?</h2>
          <p className={`text-lg max-w-2xl mx-auto mb-8 ${secondaryTextClass}`}>
            Join thousands of students who are already benefiting from our comprehensive learning resources and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition duration-200">
              Create Free Account
            </button>
            <button className={`px-8 py-3 rounded-lg border ${borderClass} ${cardClass} font-medium hover:bg-opacity-80 transition duration-200`}>
              Explore Resources
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default ContactPage 