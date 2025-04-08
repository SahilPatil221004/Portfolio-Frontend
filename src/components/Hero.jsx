import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { portfolioData, isLoading, error } = usePortfolioData();
  const [wavesOffset, setWavesOffset] = useState(0);
  
  // Animation for the waves
  useEffect(() => {
    let animationFrame;
    let startTime = Date.now();
    
    const animateWaves = () => {
      const elapsed = Date.now() - startTime;
      // Create a slow wave motion using sine
      setWavesOffset(Math.sin(elapsed / 2000) * 10);
      animationFrame = requestAnimationFrame(animateWaves);
    };
    
    animateWaves();
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (isLoading) return null;
  if (error) return null;

  const personalInfo = portfolioData?.personalInfo || {};
  const { contact } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100 dark:from-blue-900 dark:to-gray-900 transition-colors duration-300 md:ml-64">
      {/* Animated SVG background patterns */}
      <div className="absolute bottom-0 left-0 right-0 z-0 h-72 overflow-hidden">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          {/* Light mode paths with animation */}
          <g className="dark:opacity-0 transition-opacity duration-300">
            <motion.path 
              fill="rgba(30, 64, 175, 0.05)" 
              d="M0,160L48,186.7C96,213,192,267,288,277.3C384,288,480,256,576,240C672,224,768,224,864,234.7C960,245,1056,267,1152,240C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,160L48,186.7C96,213,192,267,288,277.3C384,288,480,256,576,240C672,224,768,224,864,234.7C960,245,1056,267,1152,240C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,170L48,196.7C96,223,192,277,288,287.3C384,298,480,266,576,250C672,234,768,234,864,244.7C960,255,1056,277,1152,250C1248,223,1344,149,1392,111.3L1440,74L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,186.7C96,213,192,267,288,277.3C384,288,480,256,576,240C672,224,768,224,864,234.7C960,245,1056,267,1152,240C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 8,
                ease: "easeInOut"
              }}
            />
            <motion.path 
              fill="rgba(30, 64, 175, 0.1)" 
              d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,197.3C672,203,768,245,864,250.7C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,197.3C672,203,768,245,864,250.7C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,150L48,166C96,182,192,214,288,214C384,214,480,182,576,187.3C672,193,768,235,864,240.7C960,246,1056,214,1152,187.3C1248,161,1344,139,1392,128.7L1440,118L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,197.3C672,203,768,245,864,250.7C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 10,
                ease: "easeInOut"
              }}
            />
            <motion.path 
              fill="rgba(59, 130, 246, 0.05)" 
              d="M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,128C672,117,768,139,864,165.3C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,128C672,117,768,139,864,165.3C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,84L48,110.7C96,137,192,191,288,196C384,201,480,159,576,148C672,137,768,159,864,185.3C960,212,1056,244,1152,233.3C1248,223,1344,169,1392,142.7L1440,116L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,128C672,117,768,139,864,165.3C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 12,
                ease: "easeInOut"
              }}
            />
          </g>
          
          {/* Dark mode paths with animation */}
          <g className="opacity-0 dark:opacity-100 transition-opacity duration-300">
            <motion.path 
              fill="rgba(30, 64, 175, 0.1)" 
              d="M0,160L48,186.7C96,213,192,267,288,277.3C384,288,480,256,576,240C672,224,768,224,864,234.7C960,245,1056,267,1152,240C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,160L48,186.7C96,213,192,267,288,277.3C384,288,480,256,576,240C672,224,768,224,864,234.7C960,245,1056,267,1152,240C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,170L48,196.7C96,223,192,277,288,287.3C384,298,480,266,576,250C672,234,768,234,864,244.7C960,255,1056,277,1152,250C1248,223,1344,149,1392,111.3L1440,74L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,186.7C96,213,192,267,288,277.3C384,288,480,256,576,240C672,224,768,224,864,234.7C960,245,1056,267,1152,240C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 8,
                ease: "easeInOut"
              }}
            />
            <motion.path 
              fill="rgba(30, 64, 175, 0.15)" 
              d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,197.3C672,203,768,245,864,250.7C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,197.3C672,203,768,245,864,250.7C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,150L48,166C96,182,192,214,288,214C384,214,480,182,576,187.3C672,193,768,235,864,240.7C960,246,1056,214,1152,187.3C1248,161,1344,139,1392,128.7L1440,118L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,197.3C672,203,768,245,864,250.7C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 10,
                ease: "easeInOut"
              }}
            />
            <motion.path 
              fill="rgba(59, 130, 246, 0.1)" 
              d="M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,128C672,117,768,139,864,165.3C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,128C672,117,768,139,864,165.3C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,84L48,110.7C96,137,192,191,288,196C384,201,480,159,576,148C672,137,768,159,864,185.3C960,212,1056,244,1152,233.3C1248,223,1344,169,1392,142.7L1440,116L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,128C672,117,768,139,864,165.3C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 12,
                ease: "easeInOut"
              }}
            />
          </g>
        </svg>
      </div>
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-16 md:pt-0 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left side - Profile image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 flex justify-center md:justify-start"
          >
            <div className="relative w-64 h-64 md:w-full md:h-auto max-w-sm">
              <img
                src={personalInfo.avatarURL || "/placeholder-profile.jpg"}
                alt={personalInfo.fullName}
                className="rounded-2xl shadow-xl w-full h-full object-cover"
              />
              <motion.div 
                className="absolute inset-0 bg-blue-600/10 rounded-2xl"
                animate={{
                  background: [
                    "rgba(37, 99, 235, 0.1)",
                    "rgba(37, 99, 235, 0.2)",
                    "rgba(37, 99, 235, 0.1)"
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
          
          {/* Right side - Name and title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {personalInfo.fullName || 'Dr. John Doe'}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              {personalInfo.position || 'Professor of Computer Science'}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8">
              {personalInfo.tagline || 'Educator | Researcher | Innovator'}
            </p>
            
            <div className="flex flex-col sm:flex-col-reverse items-center md:items-start justify-center md:justify-start gap-6">
              {/* <motion.a
                href="/cv.pdf"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center gap-2 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a> */}
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-900 dark:text-white">{contact.email}</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-gray-900 dark:text-white">{contact.phone}</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Office</p>
                    <p className="text-gray-900 dark:text-white">
                      {contact.office}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;