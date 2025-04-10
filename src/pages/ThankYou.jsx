import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ThankYou = () => {
  const { dispatch } = useCart();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Clear cart when thank you page is loaded
    // This will happen after Netlify form submission
    dispatch({ type: 'CLEAR_CART' });
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Täname tellimuse eest!</h1>
        <p className="text-gray-600 mb-6">
          Teie tellimus on edukalt esitatud. Võtame teiega peagi ühendust.
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