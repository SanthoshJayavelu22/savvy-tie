// src/components/Hero.jsx
import React, { useState } from 'react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('employer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    experience: '',
    skills: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="pt-28 pb-16 md:pb-28  bg-white relative overflow-hidden">
      {/* Soft Background Image with Border Radius */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '20px',
          margin: '20px'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div className="px-4 sm:px-0">
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-yellow-100 border border-yellow-200 mb-6 md:mb-8">
              <span className="text-yellow-800 text-xs md:text-sm font-medium">Trusted by 500+ UK & European Businesses</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6 md:mb-8">
              Premium Virtual Assistants
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Connect with pre-vetted professionals from South India & Asia. 60% cost savings without quality compromise.
            </p>
            
            <div className="flex items-center space-x-6 md:space-x-12 mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-black">60%</div>
                <div className="text-gray-600 text-xs md:text-sm mt-1">Cost Savings</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-black">48h</div>
                <div className="text-gray-600 text-xs md:text-sm mt-1">Average Match</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-black">98%</div>
                <div className="text-gray-600 text-xs md:text-sm mt-1">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200 mx-4 sm:mx-0 relative z-20">
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6 md:mb-8">
              <button
                onClick={() => setActiveTab('employer')}
                className={`flex-1 py-2 md:py-3 px-4 md:px-6 rounded-md font-semibold text-sm md:text-base transition-colors duration-200 ${
                  activeTab === 'employer'
                    ? 'bg-yellow-400 text-black'
                    : 'text-black hover:bg-gray-200'
                }`}
              >
                I'm Hiring
              </button>
              <button
                onClick={() => setActiveTab('employee')}
                className={`flex-1 py-2 md:py-3 px-4 md:px-6 rounded-md font-semibold text-sm md:text-base transition-colors duration-200 ${
                  activeTab === 'employee'
                    ? 'bg-yellow-400 text-black'
                    : 'text-black hover:bg-gray-200'
                }`}
              >
                I'm Applying
              </button>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
              {activeTab === 'employer' ? 'Find Your Perfect Hire' : 'Join Our Talent Network'}
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-6">
              {activeTab === 'employer' ? 'Get matched with top talent in 48 hours' : 'Access premium opportunities with UK companies'}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === 'employer' ? (
                <>
                  <div>
                    <label className="block text-black text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-black text-sm font-medium mb-2">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="your@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-black text-sm font-medium mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-black text-sm font-medium mb-2">Role Needed *</label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base"
                    >
                      <option value="">Select a role</option>
                      <option value="accounting">Accounting & Finance</option>
                      <option value="legal">Legal Services</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="technology">Technology</option>
                      <option value="admin">Administrative</option>
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-black text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-black text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-black text-sm font-medium mb-2">Profession *</label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="e.g., Accountant, Developer"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-black text-sm font-medium mb-2">Experience *</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base"
                    >
                      <option value="">Select experience</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-8">5-8 years</option>
                      <option value="8+">8+ years</option>
                    </select>
                  </div>
                </>
              )}
              
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 md:py-4 px-6 rounded-lg font-semibold text-sm md:text-base hover:bg-yellow-500 transition-colors duration-200"
              >
                {activeTab === 'employer' ? 'Get Free Consultation' : 'Apply Now'}
              </button>
              
              <p className="text-gray-500 text-xs text-center">
                By submitting, you agree to our terms. We'll contact you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;