// src/components/Services.jsx
import React, { useState } from 'react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('Accounting & Finance');

  const categories = {
    'Accounting & Finance': {
      roles: ['Chartered Accountants', 'Bookkeepers', 'Financial Analysts', 'Tax Specialists'],
      description: 'Fully qualified accounting professionals for all your financial operations',
      averageCost: '£1,200-£2,500/month',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Legal Services': {
      roles: ['Corporate Lawyers', 'Legal Researchers', 'Contract Managers', 'Compliance Officers'],
      description: 'Legal experts specializing in UK and European business law',
      averageCost: '£1,500-£3,000/month',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Digital Marketing': {
      roles: ['Social Media Managers', 'SEO Specialists', 'Content Strategists', 'PPC Experts'],
      description: 'Marketing professionals to grow your online presence and revenue',
      averageCost: '£1,000-£2,200/month',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'Technology': {
      roles: ['Full-Stack Developers', 'UI/UX Designers', 'Data Analysts', 'IT Support'],
      description: 'Tech talent for development, design, and digital transformation',
      averageCost: '£1,400-£3,000/month',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
            Professional Services
          </h2>
          <p className="text-lg md:text-xl text-gray-700 px-4">
            Access highly skilled professionals across all business functions
          </p>
        </div>

        {/* Mobile Category Selector */}
        <div className="md:hidden mb-8 px-4">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black font-semibold focus:ring-2 focus:ring-black focus:border-transparent"
          >
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Category Tabs */}
        <div className="hidden md:flex overflow-x-auto space-x-2 pb-4 mb-8 lg:mb-12 scrollbar-hide justify-center">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-white text-black border border-gray-300 hover:border-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-200 overflow-hidden mx-4 md:mx-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content Section */}
            <div className="p-6 md:p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6">{activeCategory}</h3>
              <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                {categories[activeCategory].description}
              </p>
              
              <div className="mb-6 md:mb-8">
                <div className="text-sm font-medium text-gray-600 mb-3 md:mb-4 uppercase tracking-wide">Available Roles</div>
                <div className="grid grid-cols-1 gap-2 md:gap-3">
                  {categories[activeCategory].roles.map((role, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                      <span className="text-black font-medium text-sm md:text-base">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black text-white rounded-lg md:rounded-xl p-4 md:p-6">
                <div className="font-semibold text-sm md:text-base mb-2">Average Monthly Cost</div>
                <div className="text-xl md:text-2xl font-bold">{categories[activeCategory].averageCost}</div>
                <div className="text-gray-300 text-xs md:text-sm mt-1">Full-time dedicated professional</div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] order-first lg:order-last">
              <img 
                src={categories[activeCategory].image}
                alt={activeCategory}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white rounded-lg p-3 md:p-4 shadow-lg">
                <div className="text-lg md:text-2xl font-bold text-black">150+</div>
                <div className="text-gray-600 text-xs md:text-sm">Professionals Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;