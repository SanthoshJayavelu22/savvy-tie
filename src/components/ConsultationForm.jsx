import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const ConsultationForm = ({ serviceTitle }) => {
  const [activeTab, setActiveTab] = useState("employer");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    experience: ""
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      experience: ""
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
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Consult a Savvy Tie Expert
            </h2>
            <p className="text-yellow-900 text-lg mb-8">
              Get complementary, one-on-one help from our experts. Let's discuss
              how {serviceTitle} can transform your business.
            </p>

            <div className="space-y-4">
              {[
                "Free consultation",
                "No commitment required",
                "Customized solution"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheck className="w-3 h-3 text-yellow-400" />
                  </div>
                  <span className="text-black font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="flex border-b border-gray-200 mb-6">
              <button
                className={`flex-1 py-3 font-semibold text-center ${
                  activeTab === "employer"
                    ? "text-yellow-600 border-b-2 border-yellow-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => handleTabChange("employer")}
              >
                I'm an Employer
              </button>
              <button
                className={`flex-1 py-3 font-semibold text-center ${
                  activeTab === "candidate"
                    ? "text-yellow-600 border-b-2 border-yellow-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => handleTabChange("candidate")}
              >
                I'm a Candidate
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === "employer" ? (
                <>
                  <InputField
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                  <InputField
                    label="Work Email *"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="your@company.com"
                  />
                  <InputField
                    label="Company Name *"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                  <SelectField
                    label="Role Needed *"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    options={[
                      { value: "call-center-agent", label: "Call Center Agent" },
                      { value: "customer-service", label: "Customer Service Representative" },
                      { value: "technical-support", label: "Technical Support Agent" },
                      { value: "sales-agent", label: "Sales Agent" }
                    ]}
                  />
                </>
              ) : (
                <>
                  <InputField
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                  <InputField
                    label="Email *"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="your@email.com"
                  />
                  <InputField
                    label="Profession *"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="e.g., Call Center Agent, Customer Service"
                  />
                  <SelectField
                    label="Experience *"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    options={[
                      { value: "1-3", label: "1–3 years" },
                      { value: "3-5", label: "3–5 years" },
                      { value: "5-8", label: "5–8 years" },
                      { value: "8+", label: "8+ years" }
                    ]}
                  />
                </>
              )}

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 md:py-4 px-6 rounded-lg font-semibold text-sm md:text-base hover:bg-yellow-500 transition-colors duration-200"
              >
                {activeTab === "employer"
                  ? "Get Free Consultation"
                  : "Apply Now"}
              </button>
              <p className="text-gray-500 text-xs text-center">
                By submitting, you agree to our terms. We'll contact you within
                24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Input Component
const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder
}) => (
  <div>
    <label className="block text-black text-sm font-medium mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base"
    />
  </div>
);

// Reusable Select Component
const SelectField = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block text-black text-sm font-medium mb-2">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm md:text-base"
    >
      <option value="">Select an option</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default ConsultationForm;
