import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ThankYou = () => {
  const location = useLocation();
  const isFormSuccess = new URLSearchParams(location.search).get('form-success') === 'true';

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          {isFormSuccess ? 'Täname tellimuse eest!' : 'Täname!'}
        </h1>
        <p className="text-gray-600 mb-6">
          {isFormSuccess 
            ? 'Teie tellimus on edukalt esitatud. Võtame teiega peagi ühendust.' 
            : 'Aitäh, et külastasid meie veebilehte!'}
        </p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-[#478f6c] text-white font-medium rounded-lg hover:bg-[#3a7459] transition-colors"
        >
          Tagasi avalehele
        </Link>
      </div>
    </div>
  );
};

export default ThankYou; 