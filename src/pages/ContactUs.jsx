// src/pages/ContactUs/ContactUs.jsx
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter, FaFacebook, FaArrowRight, FaCheck, FaHeadset, FaRocket, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState('employer');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    experience: '',
    message: '',
    inquiryType: 'general'
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      phone: '', 
      role: '', 
      experience: '', 
      message: '',
      inquiryType: 'general'
    });
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
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

  const contactDetails = [
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: 'Email Us',
      details: ['hello@savvytie.com', 'support@savvytie.com'],
      description: 'We reply within 2 hours'
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: 'Visit Us',
      details: ['123 Business District', 'New York, NY 10001'],
      description: 'Come say hello at our office'
    },
    {
      icon: <FaClock className="w-5 h-5" />,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 - 18:00', 'Saturday: 10:00 - 14:00'],
      description: 'Eastern Standard Time'
    }
  ];

  const features = [
    {
      icon: <FaHeadset className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your inquiries'
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: 'Quick Response',
      description: 'Get responses within 2 hours during business hours'
    },
    {
      icon: <FaCheck className="w-6 h-6" />,
      title: 'Quality Guarantee',
      description: 'We ensure the highest quality service and support'
    }
  ];

  const faqs = [
    {
      question: 'How quickly will I get a response?',
      answer: 'We typically respond within 2 hours during business hours and within 24 hours on weekends. Our team is dedicated to providing timely responses to all inquiries.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes, we offer free 30-minute consultations to discuss your specific needs and requirements. This helps us understand your business and provide the best possible solution.'
    },
    {
      question: 'What information should I include in my inquiry?',
      answer: 'Please include your name, company, specific needs, timeline, and any relevant details about your project. The more information you provide, the better we can assist you.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! We serve clients worldwide and can accommodate different time zones. Our team is experienced in working with international businesses across various industries.'
    },
    {
      question: 'What is your typical response time?',
      answer: 'During business hours (9 AM - 6 PM EST), we respond within 2 hours. For inquiries received outside business hours, we respond by the next business day.'
    },
    {
      question: 'Can I schedule a call instead of filling out the form?',
      answer: 'Yes, you can schedule a call directly using the "Schedule a Call" button in our hero section. We will contact you at your preferred time.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mt-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get In Touch
              <span className="text-yellow-500 block">With Our Team</span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to transform your business with our virtual assistants? Let's start the conversation. 
              We're here to help you find the perfect solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105 flex items-center">
                Schedule a Call
                <FaArrowRight className="ml-2 w-4 h-4" />
              </button>
              {/* <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">
                View Pricing
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form and our team will get back to you within 2 hours.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-1 mb-8">
                <div className="flex">
                  <button
                    className={`flex-1 py-4 px-6 font-semibold text-center transition-all duration-200 rounded-xl ${
                      activeTab === 'employer'
                        ? 'bg-yellow-500 text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => handleTabChange('employer')}
                  >
                    I'm an Employer
                  </button>
                  <button
                    className={`flex-1 py-4 px-6 font-semibold text-center transition-all duration-200 rounded-xl ${
                      activeTab === 'candidate'
                        ? 'bg-yellow-500 text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => handleTabChange('candidate')}
                  >
                    I'm a Candidate
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {activeTab === 'employer' ? 'Work Email *' : 'Email *'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                      placeholder={activeTab === 'employer' ? 'your@company.com' : 'your@email.com'}
                    />
                  </div>
                </div>

                {activeTab === 'employer' ? (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
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
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="hiring">Hiring Assistance</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="partnership">Partnership</option>
                        <option value="support">Technical Support</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Role Needed
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
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
                  </>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Profession *
                        </label>
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
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Experience Level *
                        </label>
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
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="application">Job Application</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder={
                      activeTab === 'employer' 
                        ? "Tell us about your business needs, timeline, and any specific requirements..."
                        : "Tell us about your background, skills, and what you're looking for..."
                    }
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-gray-900 py-4 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center"
                >
                  {activeTab === 'employer' ? 'Send Message' : 'Submit Application'}
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </button>

                <p className="text-gray-500 text-xs text-center">
                  By submitting, you agree to our privacy policy. We'll contact you within 2 hours.
                </p>
              </form>
            </div>

            {/* Right Side - Contact Details */}
            <div className="lg:pl-12">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactDetails.map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                        <div className="text-white">
                          {contact.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{contact.title}</h4>
                        {contact.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700">{detail}</p>
                        ))}
                        <p className="text-gray-500 text-sm mt-1">{contact.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200">
                      <FaLinkedin className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200">
                      <FaTwitter className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200">
                      <FaFacebook className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-yellow-500 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Emergency Support</h4>
                  <p className="text-gray-700 mb-4">Need immediate assistance?</p>
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center">
                    <FaHeadset className="mr-2 w-4 h-4" />
                    Call Emergency Line
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Contact Savvy Tie?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional support and building lasting partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-50 transition-colors duration-200 shadow-sm">
                  <div className="text-yellow-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-yellow-300"
              >
                <button 
                  className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-yellow-600">
                    {openFaqIndex === index ? (
                      <FaChevronUp className="w-4 h-4" />
                    ) : (
                      <FaChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="w-12 h-1 bg-yellow-500 rounded-full mb-4"></div>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">Our team is here to help you get the answers you need.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center">
                  <FaPhone className="mr-2 w-4 h-4" />
                  Call Us Now
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-yellow-500 hover:text-yellow-600 transition-colors duration-200 flex items-center justify-center">
                  <FaEnvelope className="mr-2 w-4 h-4" />
                  Email Support
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their operations with Savvy Tie virtual assistants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105">
              Schedule a Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;