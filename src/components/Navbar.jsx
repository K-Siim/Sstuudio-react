import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import companyLogo from "../assets/Images/Company.logo_Nero AI_Photo_Face-Photoroom.png"; // Import image

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed top-0 w-full z-50 bg-[#FFFFFF] shadow-md'>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>

        {/* Main Logo for Desktop */}
        <Link to="/" className="flex items-center">
          <img
            src={companyLogo} // Use imported image here
            alt="Company Logo"
            className="w-auto h-20"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex space-x-6'>
          <li className='p-4'><Link to="/">Esileht</Link></li>
          <li className='p-4'><Link to="/ettevõttest">Ettevõttest</Link></li>
          <li className='p-4'><Link to="/epood">E-pood</Link></li>
          <li className='p-4'><Link to="/nukud">Nukud</Link></li>
          <li className='p-4'><Link to="/töötoad">Töötoad</Link></li>
          <li className='p-4'><Link to="/kontakt">Kontakt</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        {/* Mobile Navigation */}
        <div className={`${nav ? 'fixed' : 'hidden'} left-0 top-0 w-[60%] h-full bg-[#FFFFFF] text-black p-5 shadow-lg`}>
          <div className="flex justify-between items-center mb-6">
            <Link to="/" onClick={handleNav}>
              <img
                src={companyLogo} // Use imported image here for mobile view
                alt="Company Logo"
                className="w-auto h-16"
              />
            </Link>
            <AiOutlineClose size={25} className="cursor-pointer" onClick={handleNav} />
          </div>

          {/* Mobile Navigation Links */}
          <ul className="space-y-4 text-lg">
            <li className='border-b border-gray-600 pb-2'><Link to="/" onClick={handleNav}>Esileht</Link></li>
            <li className='border-b border-gray-600 pb-2'><Link to="/ettevõttest" onClick={handleNav}>Ettevõttest</Link></li>
            <li className='border-b border-gray-600 pb-2'><Link to="/epood" onClick={handleNav}>E-pood</Link></li>
            <li className='border-b border-gray-600 pb-2'><Link to="/nukud" onClick={handleNav}>Nukud</Link></li>
            <li className='border-b border-gray-600 pb-2'><Link to="/töötoad" onClick={handleNav}>Töötoad</Link></li>
            <li><Link to="/kontakt" onClick={handleNav}>Kontakt</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
