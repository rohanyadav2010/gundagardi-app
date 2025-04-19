import { motion } from 'framer-motion';
import { BookOpen, Award, GraduationCap, Users, Bookmark, Heart } from 'lucide-react';

function AboutPage({ isDarkMode }) {
  const bgClass = isDarkMode ? 'bg-dark-bg-primary' : 'bg-gray-50';
  const textClass = isDarkMode ? 'text-dark-text-primary' : 'text-gray-800';
  const secondaryTextClass = isDarkMode ? 'text-dark-text-secondary' : 'text-gray-600';
  const cardClass = isDarkMode ? 'bg-dark-bg-secondary' : 'bg-white';
  const borderClass = isDarkMode ? 'border-dark-bg-tertiary' : 'border-gray-200';

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Content",
      description: "Complete workbook solutions and analysis for all chapters of Sahitya Sagar, tailored for ICSE students."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert Analysis",
      description: "Detailed explanations by Hindi literature experts with years of teaching experience."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Exam-Focused",
      description: "Solutions designed according to the latest ICSE patterns and marking schemes."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Learning",
      description: "Join thousands of students and educators who use our platform for better learning outcomes."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Ramesh Kumar",
      role: "Hindi Literature Expert",
      bio: "Ph.D. in Hindi Literature with 15+ years of teaching experience at prestigious institutions.",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
    },
    {
      name: "Anjali Sharma",
      role: "Content Director",
      bio: "Former ICSE examiner with expertise in developing student-friendly learning resources.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
    },
    {
      name: "Vikram Singh",
      role: "Educational Consultant",
      bio: "Specializes in curriculum development and instructional design for Hindi language learning.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
    }
  ];

  const testimonials = [
    {
      text: "The explanations of poems are exceptional. I finally understood the deeper meanings of challenging verses.",
      author: "Priya Patel",
      school: "St. Mary's School, Mumbai"
    },
    {
      text: "The story analyses helped me score 95% in my Hindi exam. Highly recommended for all ICSE students!",
      author: "Arjun Singh",
      school: "Don Bosco High School, Delhi"
    },
    {
      text: "As a teacher, I recommend Sahitya Sagar solutions to all my students. The content is accurate and comprehensive.",
      author: "Mrs. Sunita Verma",
      school: "Hindi Teacher, Cathedral School"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`pt-20 min-h-screen ${bgClass}`}
    >
      {/* Hero Section */}
      <section className={`py-16 ${bgClass}`}>
        <div className="content-container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary-500" />
              </div>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${textClass}`}>About Sahitya Sagar</h1>
            <p className={`text-lg ${secondaryTextClass} mb-8`}>
              Dedicated to making Hindi literature accessible and engaging for ICSE students through comprehensive workbook solutions and insightful analysis.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 text-primary-600">
                <Bookmark className="w-4 h-4" />
                <span>ICSE Curriculum</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 text-primary-600">
                <Heart className="w-4 h-4" />
                <span>Hindi Literature</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 text-primary-600">
                <Users className="w-4 h-4" />
                <span>50,000+ Students</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-dark-bg-secondary' : 'bg-white'}`}>
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${textClass}`}>Why Choose Our Platform</h2>
            <p className={`${secondaryTextClass} max-w-2xl mx-auto`}>
              We provide comprehensive learning resources designed specifically for students studying Hindi literature in the ICSE curriculum.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`${cardClass} rounded-lg p-6 shadow-md border ${borderClass}`}
              >
                <div className="text-primary-500 mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${textClass}`}>{feature.title}</h3>
                <p className={secondaryTextClass}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className={`py-16 ${bgClass}`}>
        <div className="content-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${textClass}`}>Our Mission & Vision</h2>
              <div className={`space-y-6 ${secondaryTextClass}`}>
                <p>
                  At Sahitya Sagar, our mission is to foster a deep appreciation for Hindi literature among students while helping them excel academically. We believe that literature is not just a subject to study but a window to understand human emotions, society, and culture.
                </p>
                <p>
                  Our vision is to become the most trusted resource for ICSE Hindi literature education, empowering students to develop critical thinking skills and a lifelong love for reading and writing.
                </p>
                <p>
                  We strive to make complex literary concepts accessible through clear explanations, contextual analysis, and student-friendly language.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className={`w-full h-80 rounded-lg ${isDarkMode ? 'bg-dark-bg-tertiary' : 'bg-gray-200'} overflow-hidden`}>
                <img 
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Library" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              <div className={`absolute -bottom-6 -right-6 w-48 h-48 rounded-lg ${cardClass} p-4 shadow-xl border ${borderClass}`}>
                <div className="flex flex-col h-full justify-center items-center text-center">
                  <p className={`text-4xl font-bold text-primary-500`}>7+</p>
                  <p className={`${textClass} font-medium`}>Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-dark-bg-secondary' : 'bg-white'}`}>
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${textClass}`}>Our Expert Team</h2>
            <p className={`${secondaryTextClass} max-w-2xl mx-auto`}>
              Meet the dedicated professionals behind Sahitya Sagar who bring years of expertise in Hindi literature and education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`${cardClass} rounded-lg p-6 shadow-md border ${borderClass} text-center`}
              >
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className={`text-xl font-bold mb-1 ${textClass}`}>{member.name}</h3>
                <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                <p className={secondaryTextClass}>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-16 ${bgClass}`}>
        <div className="content-container">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${textClass}`}>What Our Users Say</h2>
            <p className={`${secondaryTextClass} max-w-2xl mx-auto`}>
              Feedback from students and teachers who have benefited from our platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`${cardClass} rounded-lg p-6 shadow-md border ${borderClass}`}
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className={`${secondaryTextClass} mb-6 italic`}>"{testimonial.text}"</p>
                <div>
                  <p className={`font-semibold ${textClass}`}>{testimonial.author}</p>
                  <p className={`text-sm ${secondaryTextClass}`}>{testimonial.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default AboutPage; 