'use client';

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import FooterThird from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation: Check if any field is empty
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("All fields are required!");
      setSuccess(false);
      return;
    }

    // Start Loading
    setError("");
    setIsLoading(true);
    setSuccess(false);

    // Random duration between 5000ms and 8000ms
    const duration = Math.floor(Math.random() * (8000 - 5000 + 1)) + 5000;

    setTimeout(() => {
      // Success flow after loading
      setIsLoading(false);
      setSuccess(true);
      
      // Reset form after success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, duration);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 title-font">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto description-font">
            Have questions or need assistance? Reach out to us, and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Mail className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">support@cvgenie.anditech.site</p>
                <p className="text-gray-600">contact@cvgenie.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Phone className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600">Mon - Fri, 9am - 6pm</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <MapPin className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Office</h3>
                <p className="text-gray-600">
                  123 Tech Avenue, Suite 456<br />
                  Silicon Valley, CA 94025
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
            {/* Success Notification Banner */}
            {success && (
              <div className="absolute top-0 left-0 right-0 bg-green-500 text-white p-4 flex items-center justify-center space-x-2 animate-in fade-in slide-in-from-top duration-300 z-10">
                <CheckCircle size={20} />
                <span className="font-medium">Message sent successfully! We will get back to you soon.</span>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className={`w-full px-4 py-2 border ${error && !formData.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none disabled:bg-gray-200 disabled:cursor-not-allowed`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className={`w-full px-4 py-2 border ${error && !formData.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none disabled:bg-gray-200 disabled:cursor-not-allowed`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className={`w-full px-4 py-2 border ${error && !formData.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none disabled:bg-gray-200 disabled:cursor-not-allowed`}
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  className={`w-full px-4 py-2 border ${error && !formData.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none resize-none disabled:bg-gray-200 disabled:cursor-not-allowed`}
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Error Warning */}
              {error && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">
                  <AlertCircle size={18} />
                  <span className="text-sm font-medium">{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full ${isLoading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 active:scale-95'} text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 transition-all shadow-md`}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <FooterThird />
    </div>
  );
};

export default ContactPage;
