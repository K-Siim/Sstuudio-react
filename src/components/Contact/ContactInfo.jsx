import React from 'react';

const ContactInfo = () => {
    return (
        <div className="bg-white max-w-[800px] mx-auto rounded-lg shadow-lg py-10 px-8">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Võta meiega ühendust</h2>
  
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className="w-full md:w-[40%] space-y-6">
            {/* Location */}
            <div className="flex items-center gap-2">
              <span className="text-black w-5 h-5">📍</span>
              <div>
                <p className="text-sm font-bold text-gray-800">Aadress</p>
                <p className="text-gray-600">Hariduse tn 12, Kuressaare, 93812 Saare maakond</p>
              </div>
            </div>
  
            {/* Phone */}
            <div className="flex items-center gap-2">
              <span className="text-black w-5 h-5">📞</span>
              <div>
                <p className="text-sm font-bold text-gray-800">Telefon</p>
                <p className="text-gray-600">+372 5348 4019</p>
              </div>
            </div>
  
            {/* Working Hours */}
            <div className="flex items-center gap-2">
              <span className="text-black w-5 h-5">⏰</span>
              <div>
                <p className="text-sm font-bold text-gray-800">Lahtiolekuajad</p>
                <p className="text-gray-600">Neljapäev - Laupäev: 12:00 - 17:00 (Või erikokkuleppel)</p>
              </div>
            </div>
          </div>
  
          {/* Right Column - Form */}
          <div className="w-full md:w-[60%] space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Teie Nimi</label>
              <input
                type="text"
                placeholder="Toivo Kask"
                className="w-full p-3 border border-gray-300 rounded-md focus:border-green-600 focus:outline-none text-base text-gray-800 placeholder-gray-500"
              />
            </div>
  
            {/* Email Field */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="näide@gmail.com"
                className="w-full p-3 border border-gray-300 rounded-md focus:border-green-600 focus:outline-none text-base text-gray-800 placeholder-gray-500"
              />
            </div>
  
            {/* Subject Field */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Teema</label>
              <input
                type="text"
                placeholder="See valik on optimaalne"
                className="w-full p-3 border border-gray-300 rounded-md focus:border-green-600 focus:outline-none text-base text-gray-800 placeholder-gray-500"
              />
            </div>
  
            {/* Message Field */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">Sõnum</label>
              <textarea
                placeholder="Tere! Sooviks küsida infot ühe toote kohta…"
                className="w-full p-3 border border-gray-300 rounded-md focus:border-green-600 focus:outline-none text-base text-gray-800 placeholder-gray-500 h-32"
              />
            </div>
  
            {/* Submit Button */}
            <button
              className="w-full h-12 bg-gradient-to-r from-[#478f6c] to-[#478f6c] text-white text-lg font-bold rounded-md hover:from-[#0056b3] hover:to-[#003f7f] transition-all duration-300 cursor-pointer"
            >
              Saada
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactInfo;