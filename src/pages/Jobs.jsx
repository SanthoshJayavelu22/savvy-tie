import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import CallToAction from '../components/CallToAction';
import Testimonials from '../components/Testimonials';

const Jobs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    category: '',
    experience: '',
    availability: '',
    bio: '',
    resume: null
  });

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Store data in DB, send email notification, etc.
    // Show success message
    alert('Thank you! Our team will reach out soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      category: '',
      experience: '',
      availability: '',
      bio: '',
      resume: null
    });
  };

  const benefits = [
    {
      icon: '🌍',
      title: 'Work with Global Clients',
      description: 'Connect with top UK & European businesses and expand your professional network.'
    },
    {
      icon: '💼',
      title: 'Wide Range of Roles',
      description: 'From accounting to web development, find opportunities that match your skills.'
    },
    {
      icon: '💰',
      title: 'Better Pay, Lower Stress',
      description: 'Earn competitively with flexible hours and work-life balance.'
    },
    {
      icon: '🕓',
      title: 'Remote Freedom',
      description: 'Work from anywhere, anytime with complete location independence.'
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description: 'Gain international experience and recognition to boost your career.'
    },
    {
      icon: '📚',
      title: 'Skill Development',
      description: 'Access training resources and learn from international best practices.'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Sign Up',
      description: 'Fill in your details and showcase your skills in our application form.'
    },
    {
      step: '2',
      title: 'Get Shortlisted',
      description: 'We match your profile with the right clients based on your expertise.'
    },
    {
      step: '3',
      title: 'Interview',
      description: 'Connect directly with companies for virtual interviews.'
    },
    {
      step: '4',
      title: 'Start Working',
      description: 'Begin your international remote career with full support.'
    }
  ];

  const jobCategories = [
    {
      name: 'Accounting & Bookkeeping',
      icon: '📊',
      count: '25+ Jobs'
    },
    {
      name: 'Web Development',
      icon: '💻',
      count: '35+ Jobs'
    },
    {
      name: 'Social Media Marketing',
      icon: '📱',
      count: '28+ Jobs'
    },
    {
      name: 'Customer Support',
      icon: '🎧',
      count: '42+ Jobs'
    },
    {
      name: 'Graphic Design',
      icon: '🎨',
      count: '18+ Jobs'
    },
    {
      name: 'Legal Assistance',
      icon: '⚖️',
      count: '15+ Jobs'
    },
    {
      name: 'Data Entry',
      icon: '📝',
      count: '30+ Jobs'
    },
    {
      name: 'Digital Marketing',
      icon: '📈',
      count: '22+ Jobs'
    }
  ];

  const faqItems = [
    {
      question: "Can I apply without experience?",
      answer: "Yes! We have opportunities for both experienced professionals and freshers. Many of our clients provide training and are willing to invest in motivated individuals who show potential and willingness to learn."
    },
    {
      question: "Do I need to pay any registration fee?",
      answer: "No, our platform is completely free for job seekers. We never charge any registration, placement, or service fees. Our revenue comes from the businesses that hire through our platform."
    },
    {
      question: "What kind of clients will I work with?",
      answer: "You'll work with established businesses from the UK, Europe, and other international markets. Our clients range from startups to well-established companies across various industries including legal, real estate, e-commerce, technology, and more."
    },
    {
      question: "How long does the selection process take?",
      answer: "The selection process typically takes 1-2 weeks. After you apply, our team reviews your profile within 2-3 business days. If shortlisted, you'll be connected with clients for interviews, and offers are usually made within a week of successful interviews."
    },
    {
      question: "What equipment do I need to work remotely?",
      answer: "You'll need a reliable computer/laptop, high-speed internet connection, webcam, and microphone. Some specific roles might require additional software or tools, which will be communicated during the hiring process."
    },
    {
      question: "Can I work part-time or flexible hours?",
      answer: "Yes! We offer various work arrangements including full-time, part-time, and freelance opportunities. Many of our clients are flexible with working hours, especially when there's time zone overlap for collaboration."
    }
  ];

  const testimonials = [
    {
      quote: "I started as a virtual assistant through this platform and now manage a UK client's operations full-time! The support and opportunities have been incredible.",
      name: "Anjali",
      role: "Operations Manager",
      location: "Tamil Nadu"
    },
    {
      quote: "They helped me find my first remote development job in just a week! The process was smooth and the client matching was perfect for my skills.",
      name: "Rahul",
      role: "React Developer",
      location: "Bangalore"
    },
    {
      quote: "Working with international clients has transformed my career. I've gained valuable experience and doubled my income while working from home.",
      name: "Priya",
      role: "Digital Marketing Specialist",
      location: "Delhi"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10 rounded-none sm:rounded-2xl"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
              Work With Global Companies From the{' '}
              <span className="text-yellow-600">Comfort of Your Home</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
              Join our growing network of talented virtual assistants and professionals connecting with top UK and European businesses.
            </p>
            
            <div className="mt-8 sm:mt-12">
              <button 
                onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors duration-200 shadow-lg"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Why Join Savvy Tie?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of working with international clients through our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group border-2 border-transparent hover:border-yellow-400">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start your remote career in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-black">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Featured Job Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore opportunities across various domains and skill sets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-yellow-400 cursor-pointer hover:transform hover:scale-105"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{category.name}</h3>
                <p className="text-yellow-600 font-bold text-sm">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from professionals who transformed their careers through our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-yellow-400 text-4xl mb-4">"</div>
                <p className="text-gray-600 text-lg mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Application Form */}
      <section id="application-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Start Your Remote Career
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Apply now and connect with international clients
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base"
                    placeholder="+91 9876543210"
                  />
                </div>
                
                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base"
                    placeholder="Your city"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Skill Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base"
                  >
                    <option value="">Select category</option>
                    {jobCategories.map((category, index) => (
                      <option key={index} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Experience Level *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base"
                  >
                    <option value="">Select experience</option>
                    <option value="fresher">Fresher</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Availability *
                  </label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base"
                  >
                    <option value="">Select availability</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="freelance">Freelance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-black text-sm font-medium mb-2">
                  Upload Resume (PDF/DOC) *
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
                />
              </div>

              <div>
                <label className="block text-black text-sm font-medium mb-2">
                  Short Bio / Message
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-base"
                  placeholder="Tell us about your skills, experience, and why you're interested in remote work..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-4 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Apply Now
              </button>
              
              <p className="text-gray-500 text-sm text-center">
                By submitting, you agree to our terms. Our team will contact you within 24-48 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about starting your remote career
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-black pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    {openFaqIndex === index ? (
                      <ChevronUpIcon className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`px-6 pb-6 transition-all duration-300 ${
                    openFaqIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CallToAction 
        title="Ready to grow your career with international clients?"
        buttonText="Join Now"
        onButtonClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
      />
    </div>
  );
};

export default Jobs;