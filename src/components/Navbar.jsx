import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logic to determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.pageYOffset + 64;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Publications', to: 'publications' },
    { name: 'Projects', to: 'projects' },
    { name: 'Teaching', to: 'teaching' },
    { name: 'Connect', to: 'contact' },
  ];

  return (
    <>
      {/* Mobile hamburger button */}
      <div className="fixed top-4 left-4 z-50 block md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop sidebar - hidden on mobile */}
      <nav className="fixed hidden md:block left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-40 transition-all duration-300">
        <div className="flex flex-col h-full">
          {/* Header/Logo Area */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <span className="text-xl font-bold text-gray-800 dark:text-white">Dr. XYZ</span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-grow overflow-y-auto py-4">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-20}
                  className={`px-6 py-3 text-sm font-medium cursor-pointer transition-colors duration-200 ${
                    activeSection === item.to
                      ? 'bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Footer with Theme Toggle */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-full p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isDark ? (
                <>
                  <Sun className="w-5 h-5 mr-2" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5 mr-2" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar - shown only when menu is open */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      />

      <nav 
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-40 md:hidden transition-transform duration-300 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header/Logo Area */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800 dark:text-white">Dr. John Doe</span>
            <button onClick={closeMobileMenu} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-grow overflow-y-auto py-4">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-20}
                  className={`px-6 py-3 text-sm font-medium cursor-pointer transition-colors duration-200 ${
                    activeSection === item.to
                      ? 'bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Footer with Theme Toggle */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-full p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isDark ? (
                <>
                  <Sun className="w-5 h-5 mr-2" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5 mr-2" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;