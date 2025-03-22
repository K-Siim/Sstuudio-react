import React, { useState } from 'react';

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Get in touch with us!</h1>
      <p className="text-center text-gray-600 mb-2">
        For additional information about our products and services, please contact us via email.
      </p>
      <p className="text-center text-gray-600 mb-8">
        We're always ready to help and give advice. Don't hesitate, just do it!
      </p>

      <div className="space-y-6 mb-8">
        <div className="flex items-center space-x-4">
          <span className="text-2xl">📍</span>
          <p className="text-gray-700">Hariduse tn 12, Kuressaare, 93812 Saare maakond</p>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-2xl">📞</span>
          <p className="text-gray-700">+372 5348 4019</p>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-2xl">🕐</span>
          <div>
            <p className="text-gray-700">Thursday - Sunday: 12:00 - 17:00</p>
            <p className="text-gray-500 text-sm">(Or by appointment)</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Toivo Kask"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="näide@gmail.com"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Select an option"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows="4"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-4 px-8 rounded-md font-semibold hover:bg-green-700 transition duration-300 ease-in-out"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactInfo; 