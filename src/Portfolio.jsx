import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Teaching from './components/Teaching';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <div className="md:ml-64">
          <About />
          <Experience />
          <Publications />
          <Projects />
          <Teaching />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;