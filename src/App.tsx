import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Menu, X, Star, CheckCircle, Phone, Mail, MapPin, Facebook, Twitter, Instagram, BookOpen, Users, Award, Clock } from 'lucide-react';
import SpeakingPractice from './components/SpeakingPractice';
import MockTest from './components/MockTest';
import BookingModal from './components/BookingModal';
import About from './pages/About'; // Assuming About.tsx exists in pages folder

// Navbar Component
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', hash: 'home' },
    { name: 'Courses', href: '/', hash: 'courses' },
    { name: 'About', href: '/about', hash: '' },
    { name: 'Testimonials', href: '/', hash: 'testimonials' },
    { name: 'Contact', href: '/', hash: 'contact' },
  ];

  const getLinkTo = (item: typeof navigation[0]) => {
    return item.hash ? `${item.href}#${item.hash}` : item.href;
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">IELTS Masters</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={getLinkTo(item)}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={() => setShowBooking(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Free Trial
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={getLinkTo(item)}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                  >
                    {item.name}
                  </a>
                ))}
                <button 
                  onClick={() => setShowBooking(true)}
                  className="w-full mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Book Free Trial
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {showBooking && (
        <BookingModal 
          onClose={() => setShowBooking(false)} 
          type="trial"
        />
      )}
    </>
  );
};

// Hero Section Component
const Hero: React.FC = () => {
  const [showTrialBooking, setShowTrialBooking] = useState(false);
  const [showCourseBooking, setShowCourseBooking] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Master Your
                <span className="text-blue-600 block">IELTS Score</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                Join thousands of students who achieved their dream IELTS band score with our proven methodology, 
                expert instructors, and personalized learning approach.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setShowTrialBooking(true)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all"
                >
                  Start Free Trial
                </button>
                <button 
                  onClick={() => setShowCourseBooking(true)}
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  View Courses
                </button>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10,000+</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">8.5+</div>
                  <div className="text-sm text-gray-600">Average Band Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="IELTS Preparation" 
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">
                  Band 9.0 Achievable!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {showTrialBooking && (
        <BookingModal 
          onClose={() => setShowTrialBooking(false)} 
          type="trial"
        />
      )}
      
      {showCourseBooking && (
        <BookingModal 
          onClose={() => setShowCourseBooking(false)} 
          type="course"
        />
      )}
    </>
  );
};

// Feature Cards Component
const Features: React.FC = () => {
  const [showSpeaking, setShowSpeaking] = useState(false);
  const [showMockTest, setShowMockTest] = useState(false);

  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Speaking Practice",
      description: "One-on-one sessions with certified IELTS trainers to perfect your speaking skills and build confidence.",
      color: "bg-blue-500",
      action: () => setShowSpeaking(true),
      buttonText: "Try Speaking Practice"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Comprehensive Mock Tests",
      description: "Full-length practice tests that simulate real IELTS conditions with detailed performance analysis.",
      color: "bg-green-500",
      action: () => setShowMockTest(true),
      buttonText: "Take Mock Test"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "AI Band Score Prediction",
      description: "Advanced AI technology provides accurate band score predictions and personalized improvement plans.",
      color: "bg-purple-500",
      action: () => alert("AI Band Score Prediction coming soon! This feature will analyze your performance and predict your likely IELTS band score."),
      buttonText: "Learn More"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Learning Schedule",
      description: "Study at your own pace with 24/7 access to materials and flexible class timings that fit your schedule.",
      color: "bg-orange-500",
      action: () => alert("Flexible scheduling available! Contact us to discuss your preferred learning schedule and we'll customize a plan for you."),
      buttonText: "Schedule Now"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose IELTS Masters?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach combines proven teaching methods with cutting-edge technology 
            to ensure your IELTS success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 text-center">
                <button
                  onClick={feature.action}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline transition-colors"
                >
                  {feature.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showSpeaking && (
        <SpeakingPractice onClose={() => setShowSpeaking(false)} />
      )}
      {showMockTest && (
        <MockTest onClose={() => setShowMockTest(false)} />
      )}
    </section>
  );
};

// Testimonials Component
const Testimonials: React.FC = () => {
  const testimonials = [
  {
      name: "Bhavana",
      location: "Hyderabad, India",
      score: "Band 8.0",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "IELTS Masters transformed my preparation with their expert speaking sessions. The mock tests were a game-changer for my real exam!"
    },
    {
      name: "Pawan Kumar",
      location: "Mumbai, India",
      score: "Band 8.5",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "The AI band score prediction helped me focus on my weak areas, and the flexible schedule fit my busy life perfectly. Highly recommended!"
    },
    {
      name: "Dinesh ",
      location: "Bangalore, India",
      score: "Band 9.0",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "The instructors at IELTS Masters are exceptional! Their patience and tailored guidance helped me achieve Band 9 in just a few months."
      }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our students who achieved their target IELTS scores
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                <div className="ml-auto">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonial.score}
                  </span>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">IELTS Masters</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading IELTS preparation institute helping students achieve their dreams with proven methodologies and expert guidance.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IELTS Academic</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IELTS General</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Speaking Practice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Writing Correction</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Private Tutoring</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">info@ieltsmasters.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">123 Education St, Learning City</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 IELTS Masters. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Testimonials />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
