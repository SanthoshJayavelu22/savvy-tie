// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.jpg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Property Assistants',
    'Personal Assistants',
    'Social Media Management',
    'Call Centre',
    'Live Chat Support',
    'Telesales',
    'Data Entry Services',
    'Debt Collection',
    'IT Outsourcing',
    'Sales Assistants'
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
           <div className="flex items-center space-x-3">
             {/* <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ST</span>
            </div>
            <span className="text-xl font-bold text-black">SavvyTie</span> */}
            <img src={logo} alt="SavvyTie Logo" className="h-12 w-auto"/>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-black hover:text-yellow-500 font-bold text-md transition-colors duration-200">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button className="text-black hover:text-yellow-500 font-bold text-md transition-colors duration-200 flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-black transition-colors duration-200"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#about-us" className="text-black hover:text-yellow-500 font-bold text-md transition-colors duration-200">
              About Us
            </a>
            <a href="#hire-now" className="text-black hover:text-yellow-500 font-bold text-md transition-colors duration-200">
              Hire Now
            </a>
            <a href="#jobs" className="text-black hover:text-yellow-500 font-bold text-md transition-colors duration-200">
              Jobs
            </a>
            <a href="#contact-us" className="text-black hover:text-yellow-500 font-bold text-md transition-colors duration-200">
              Contact Us
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-yellow-400 text-black px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition-colors duration-200">
              Get Started
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-black hover:text-yellow-500 font-medium text-sm transition-colors duration-200 py-2">
                Home
              </a>
              
              <div className="border-b border-gray-200 pb-2">
                <div className="font-medium text-black text-sm mb-2">Services</div>
                <div className="grid grid-cols-1 gap-1 pl-4">
                  {services.slice(0, 5).map((service, index) => (
                    <a
                      key={index}
                      href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-600 hover:text-yellow-500 text-xs transition-colors duration-200 py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>

              <a href="#about-us" className="text-black hover:text-yellow-500 font-medium text-sm transition-colors duration-200 py-2">
                About Us
              </a>
              <a href="#hire-now" className="text-black hover:text-yellow-500 font-medium text-sm transition-colors duration-200 py-2">
                Hire Now
              </a>
              <a href="#jobs" className="text-black hover:text-yellow-500 font-medium text-sm transition-colors duration-200 py-2">
                Jobs
              </a>
              <a href="#contact-us" className="text-black hover:text-yellow-500 font-medium text-sm transition-colors duration-200 py-2">
                Contact Us
              </a>
              
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition-colors duration-200 w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;