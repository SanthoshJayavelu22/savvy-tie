// src/pages/HireNow/HireNow.jsx
import React, { useState } from 'react';
import { FaCheck, FaStar, FaClock, FaShield, FaUsers, FaRocket, FaArrowRight, FaPhone, FaCalendar, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const HireNow = () => {
  const [activeTab, setActiveTab] = useState('employer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    experience: '',
    message: '',
    phone: '',
    timeline: ''
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      role: '', 
      experience: '', 
      message: '',
      phone: '',
      timeline: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const benefits = [
    {
      icon: <FaClock className="w-6 h-6" />,
      title: '48-Hour Matching',
      description: 'Get matched with pre-vetted assistants within 48 hours'
    },
    {
      icon: <FaShield className="w-6 h-6" />,
      title: 'Risk-Free Trial',
      description: '30-day risk-free trial with money-back guarantee'
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: 'Dedicated Support',
      description: 'Personal account manager and 24/7 support'
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: 'Quick Onboarding',
      description: 'Full setup and training completed in 3-5 days'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Free 30-minute consultation to understand your needs'
    },
    {
      step: '02',
      title: 'Matching',
      description: 'We match you with 3 pre-screened candidates'
    },
    {
      step: '03',
      title: 'Interviews',
      description: 'Conduct interviews and select your preferred candidate'
    },
    {
      step: '04',
      title: 'Onboarding',
      description: 'Seamless onboarding and training process'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'TechGrowth Inc',
      role: 'CEO',
      content: 'The hiring process was incredibly smooth. We found the perfect marketing assistant in just 3 days!',
      rating: 5
    },
    {
      name: 'James Rodriguez',
      company: 'Global Consulting',
      role: 'Operations Director',
      content: 'Savvy Tie transformed our hiring process. 60% cost savings and exceptional talent quality.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I start with a new assistant?',
      answer: 'Most clients are matched with qualified candidates within 48 hours, with full onboarding completed in 3-5 business days.'
    },
    {
      question: 'What is your satisfaction guarantee?',
      answer: 'We offer a 30-day risk-free trial. If you are not satisfied, we will find a replacement at no additional cost.'
    },
    {
      question: 'Do you provide training for the assistants?',
      answer: 'Yes, all assistants undergo comprehensive training and we provide additional role-specific training as needed.'
    },
    {
      question: 'Can I scale my team up or down?',
      answer: 'Absolutely! Our flexible model allows you to easily scale your team based on business needs with a 30-day notice period.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-yellow-400 text-sm font-medium ml-2">TRUSTED BY 500+ COMPANIES</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hire Your Perfect
              <span className="text-yellow-500 block">Virtual Assistant</span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto">
              Get matched with pre-vetted professionals in 48 hours. 60% cost savings. 30-day risk-free trial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105 flex items-center">
                Start Hiring Now
                <FaArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center">
                <FaPhone className="mr-2 w-4 h-4" />
                Book a Call
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-500 mb-2">48h</div>
                <div className="text-gray-300 text-sm">Average Match Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-500 mb-2">60%</div>
                <div className="text-gray-300 text-sm">Cost Savings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-500 mb-2">98%</div>
                <div className="text-gray-300 text-sm">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-500 mb-2">30d</div>
                <div className="text-gray-300 text-sm">Risk-Free Trial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Savvy Tie?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the simplest, most effective way to hire virtual assistants
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-yellow-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-100 transition-colors duration-200">
                  <div className="text-yellow-600">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Simple 4-Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From consultation to productivity in less than a week
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 h-full">
                  <div className="text-2xl font-bold text-yellow-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-0.5 bg-yellow-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Hiring Form */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2">
              {/* Left Content */}
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Hiring Today</h2>
                <p className="text-yellow-100 text-lg mb-8 leading-relaxed">
                  Fill out this form and our team will contact you within 2 hours to discuss your requirements and start the matching process.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheck className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Free Consultation</h4>
                      <p className="text-yellow-100 text-sm">30-minute strategy session</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheck className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Custom Matching</h4>
                      <p className="text-yellow-100 text-sm">Tailored candidate selection</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheck className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Quick Start</h4>
                      <p className="text-yellow-100 text-sm">Begin in 48 hours or less</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-yellow-400/20 rounded-lg border border-yellow-400/30">
                  <div className="flex items-center space-x-3">
                    <FaPhone className="w-5 h-5 text-yellow-300" />
                    <div>
                      <p className="font-semibold">Prefer to talk?</p>
                      <p className="text-yellow-100 text-sm">Schedule a call with our hiring specialist</p>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-white text-yellow-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                    <FaCalendar className="mr-2 w-4 h-4" />
                    Schedule Call
                  </button>
                </div>
              </div>

              {/* Right Form */}
              <div className="p-12">
                <div className="flex border-b border-gray-200 mb-8">
                  <button
                    className={`flex-1 py-4 font-semibold text-center transition-colors duration-200 ${
                      activeTab === 'employer'
                        ? 'text-yellow-600 border-b-2 border-yellow-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => handleTabChange('employer')}
                  >
                    I'm Hiring
                  </button>
                  <button
                    className={`flex-1 py-4 font-semibold text-center transition-colors duration-200 ${
                      activeTab === 'candidate'
                        ? 'text-yellow-600 border-b-2 border-yellow-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => handleTabChange('candidate')}
                  >
                    I'm Applying
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {activeTab === 'employer' ? (
                    <>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Work Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                            placeholder="your@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Role Needed *</label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select a role</option>
                          <option value="virtual-assistant">Virtual Assistant</option>
                          <option value="customer-support">Customer Support</option>
                          <option value="social-media">Social Media Manager</option>
                          <option value="data-entry">Data Entry Specialist</option>
                          <option value="property-assistant">Property Assistant</option>
                          <option value="sales-assistant">Sales Assistant</option>
                          <option value="it-support">IT Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Timeline to Hire</label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediately">Immediately</option>
                          <option value="1-week">Within 1 week</option>
                          <option value="2-weeks">Within 2 weeks</option>
                          <option value="1-month">Within 1 month</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Specific Requirements</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                          placeholder="Tell us about your specific needs, required skills, and any other details..."
                        ></textarea>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Profession *</label>
                          <input
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                            placeholder="e.g., Virtual Assistant, Customer Support"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level *</label>
                          <select
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select experience</option>
                            <option value="entry-level">Entry Level (0-2 years)</option>
                            <option value="mid-level">Mid Level (2-5 years)</option>
                            <option value="senior">Senior (5+ years)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select availability</option>
                            <option value="full-time">Full Time (40 hrs/week)</option>
                            <option value="part-time">Part Time (20-30 hrs/week)</option>
                            <option value="flexible">Flexible Hours</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about yourself</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                          placeholder="Describe your skills, experience, and what you're looking for in a role..."
                        ></textarea>
                      </div>
                    </>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-gray-900 py-4 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center"
                  >
                    {activeTab === 'employer' ? 'Start Hiring Process' : 'Apply Now'}
                    <FaArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  
                  <p className="text-gray-500 text-xs text-center">
                    By submitting, you agree to our privacy policy. We'll contact you within 2 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what our clients say about their hiring experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">Everything you need to know about hiring with Savvy Tie</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">Our hiring specialists are here to help you find the perfect match.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center">
                  <FaPhone className="mr-2 w-4 h-4" />
                  Call Us Now
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-yellow-500 hover:text-yellow-600 transition-colors duration-200 flex items-center justify-center">
                  <FaEnvelope className="mr-2 w-4 h-4" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Assistant?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join 500+ companies that have transformed their operations with Savvy Tie virtual assistants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105">
              Start Hiring Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireNow;