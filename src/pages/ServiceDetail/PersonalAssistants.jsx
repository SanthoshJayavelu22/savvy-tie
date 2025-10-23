// src/pages/ServiceDetail/PersonalAssistants.jsx
import React, { useState } from 'react';

import {  FaCheck, FaStar, FaChevronDown, FaChevronUp, FaUserTie } from 'react-icons/fa';
import CallToAction from '../../components/CallToAction';
import ConsultationForm from '../../components/ConsultationForm';

const PersonalAssistants = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);


  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };


  const serviceData = {
    title: 'Personal Assistants',
    description: 'Dedicated personal assistants to manage your schedule, communications, and daily tasks, giving you back valuable time for what matters most.',
    heroImage: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    whyOutsource: [
      {
        title: 'Time Savings',
        description: 'Save 15+ hours per week by delegating administrative tasks, scheduling, and communications to our professional personal assistants.'
      },
      {
        title: 'Reduced Stress',
        description: 'Never miss important appointments and reduce mental load with dedicated support for your daily tasks and schedule management.'
      },
      {
        title: 'Work-Life Balance',
        description: 'Achieve better work-life balance by offloading time-consuming tasks to our capable personal assistants.'
      }
    ],
    advantages: [
      'No lock in contracts',
      'No set up fees (recruiting is free)',
      'Free to change your staff if you need to',
      'Only pay an hourly rate which includes computer, internet and all fees',
      '24/7 operation (we can handle global businesses)',
      'Assistants can work from a minimum of 20 hours per week'
    ],
    benefits: [
      {
        title: 'Cost Effective',
        description: 'Save 60% compared to hiring local personal assistants while getting the same quality of support.'
      },
      {
        title: 'Professional Support',
        description: 'Highly trained assistants skilled in calendar management, travel arrangements, and communication handling.'
      },
      {
        title: 'Increased Productivity',
        description: 'Focus on high-value tasks while your assistant handles administrative duties and scheduling.'
      },
      {
        title: 'Flexible Scheduling',
        description: 'Get support when you need it, whether for part-time assistance or full-time executive support.'
      }
    ],
    testimonials: [
      {
        name: 'Jennifer Martinez',
        company: 'Tech Innovations',
        role: 'CEO',
        content: 'My personal assistant has given me back 20 hours per week. I can now focus on strategic decisions instead of administrative tasks.',
        rating: 5
      },
      {
        name: 'David Kim',
        company: 'Global Consulting',
        role: 'Senior Partner',
        content: 'The quality of support is exceptional. Travel arrangements, scheduling, and communications are handled flawlessly.',
        rating: 5
      }
    ],
    faqs: [
      {
        question: 'What tasks can personal assistants handle?',
        answer: 'Our personal assistants manage calendar scheduling, email management, travel arrangements, meeting preparation, document management, and personal errands coordination.'
      },
      {
        question: 'How quickly can I get started with a personal assistant?',
        answer: 'Most clients are matched with their perfect assistant within 48 hours, with full onboarding completed within 3-5 business days.'
      },
      {
        question: 'Can assistants handle sensitive information?',
        answer: 'Yes, all our assistants sign confidentiality agreements and are trained in handling sensitive information securely.'
      }
    ]
  };

  return (
    <div className="pt-20">


      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: `url(${serviceData.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-4 mb-6">
              <div className="bg-yellow-400 rounded-2xl p-4 shadow-lg">
                <FaUserTie className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
              {serviceData.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
              {serviceData.description}
            </p>
          </div>
        </div>
      </section>

    {/* About Personal Assistants Section */}
<section className="relative py-20 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left Text Content */}
      <div className="text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          About Our <span className="text-yellow-500">Personal Assistants</span> Services
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto lg:mx-0 mb-8 rounded-full"></div>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold text-gray-900">Savvy Tie</span>, our Personal Assistants provide professional support to help 
          business owners and executives manage their schedules, tasks, and communications efficiently. 
          We ensure seamless daily operations so you can focus on growth and strategy.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Our assistants are trained to handle administrative, personal, and business tasks with discretion 
          and professionalism, offering reliable support tailored to your specific needs.
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl shadow-md transition-all duration-300">
          Get a Free Consultation
        </button>
      </div>

      {/* Right Image - Hero */}
      <div className="relative">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
          src={serviceData.heroImage}
            alt="Personal Assistants"
            className="w-full h-[480px] object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute -top-6 -left-6 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      </div>
    </div>

    {/* Roles / Expertise Below Image */}
    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      {[
        { title: "Executive Support", desc: "Manage schedules, appointments, and day-to-day business tasks efficiently." },
        { title: "Communication Management", desc: "Handle emails, calls, and messages on your behalf with professionalism." },
        { title: "Task & Project Assistance", desc: "Support in project coordination, research, and task tracking." },
        { title: "Personal Errands & Planning", desc: "Assist with personal tasks and event planning to save your valuable time." },
      ].map((role, index) => (
        <div key={index} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg border border-gray-100 transition">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{role.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Why Outsource Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Why Choose Savvy Tie for {serviceData.title}?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Reclaim your time and boost productivity with our expert assistants</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceData.whyOutsource.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FaCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savvy Tie Advantage Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">The Savvy Tie Advantage</h2>
            <p className="text-xl text-gray-600">Unparalleled Service, Unrivaled Quality</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Benefits of {serviceData.title} for Your Business</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceData.benefits.map((benefit, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <FaCheck className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-black">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about {serviceData.title}</p>
          </div>
          <div className="space-y-4">
            {serviceData.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-xl">
                <button className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none" onClick={() => toggleFaq(index)}>
                  <h3 className="text-lg font-bold text-black pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    {openFaqIndex === index ? <FaChevronUp className="w-4 h-4 text-yellow-600" /> : <FaChevronDown className="w-4 h-4 text-yellow-600" />}
                  </div>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="w-12 h-1 bg-yellow-400 rounded-full mb-4"></div>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
<ConsultationForm/>

      <CallToAction />
    </div>
  );
};

export default PersonalAssistants;