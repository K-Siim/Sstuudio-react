import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import companyLogo from "../assets/Images/Company.logo_Nero AI_Photo_Face-Photoroom.png"; 
import { useCart } from '../context/CartContext';
import CartDrawer from './e-pood/CartDrawer';

const CartIcon = () => {
    const { state } = useCart();

    return (
        <div className="relative cursor-pointer">
            <svg 
                className="w-6 h-6" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.itemCount}
                </span>
            )}
        </div>
    );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className='fixed top-0 w-full z-50 bg-[#FFFFFF] shadow-md'>
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>

          
          <Link to="/" className="flex items-center">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="w-auto h-20"
            />
          </Link>

         
          <ul className='hidden md:flex space-x-6'>
            <li className='p-4'><Link to="/">Esileht</Link></li>
            <li className='p-4'><Link to="/ettevõttest">Ettevõttest</Link></li>
            <li className='p-4'><Link to="/epood">E-pood</Link></li>
            <li className='p-4'><Link to="/nukud">Nukud</Link></li>
            <li className='p-4'><Link to="/töötoad">Töötoad</Link></li>
            <li className='p-4'><Link to="/kontakt">Kontakt</Link></li>
          </ul>

          
          <div onClick={handleNav} className='block md:hidden cursor-pointer'>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>

          
          <div className={`${nav ? 'fixed' : 'hidden'} left-0 top-0 w-[60%] h-full bg-[#FFFFFF] text-black p-5 shadow-lg`}>
            <div className="flex justify-between items-center mb-6">
              <Link to="/" onClick={handleNav}>
                <img
                  src={companyLogo} 
                  alt="Company Logo"
                  className="w-auto h-16"
                />
              </Link>
              <AiOutlineClose size={25} className="cursor-pointer" onClick={handleNav} />
            </div>

            
            <ul className="space-y-4 text-lg">
              <li className='border-b border-gray-600 pb-2'><Link to="/" onClick={handleNav}>Esileht</Link></li>
              <li className='border-b border-gray-600 pb-2'><Link to="/ettevõttest" onClick={handleNav}>Ettevõttest</Link></li>
              <li className='border-b border-gray-600 pb-2'><Link to="/epood" onClick={handleNav}>E-pood</Link></li>
              <li className='border-b border-gray-600 pb-2'><Link to="/nukud" onClick={handleNav}>Nukud</Link></li>
              <li className='border-b border-gray-600 pb-2'><Link to="/töötoad" onClick={handleNav}>Töötoad</Link></li>
              <li><Link to="/kontakt" onClick={handleNav}>Kontakt</Link></li>
            </ul>
          </div>

          <div className="flex items-center">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
};

export default Navbar;
