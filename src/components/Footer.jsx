import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#333] text-white py-10 mt-20">
      <div className="container mx-auto px-6">
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          
          <div>
            <h3 className="text-2xl font-semibold mb-3">Võtke minuga ühendust</h3>
            <p className="text-l">
              <span className="font-semibold">Email:</span> 
              <a href="mailto:saaretiina@gmail.com" className="hover:text-[#478f6c]"> saaretiina@gmail.com</a>
            </p>
            <p className="text-ll">
              <span className="font-semibold">Telefon:</span> 
              <a href="tel:+37253484019" className="hover:text-[#478f6c]"> +372 5348 4019</a>
            </p>
            <p className="text-ll">
              <span className="font-semibold">Aadress:</span> Hariduse 12, Kuressaare linn, Saaremaa
            </p>
          </div>

          
          <div>
            <h3 className="text-2xl font-semibold mb-3">Lingid</h3>
            <ul className="text-öl space-y-1">
              <li><Link to="/esileht" className="hover:text-[#478f6c]">Esileht</Link></li>
              <li><Link to="/ettevõttest" className="hover:text-[#478f6c]">Ettevõttest</Link></li>
              <li><Link to="/epood" className="hover:text-[#478f6c]">E-pood</Link></li>
              <li><Link to="/nukud" className="hover:text-[#478f6c]">Nukud</Link></li>
              <li><Link to="/töötoad" className="hover:text-[#478f6c]">Töötoad</Link></li>
              <li><Link to="/kontakt" className="hover:text-[#478f6c]">Kontakt</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-2xl font-semibold mb-3">Jälgi mind ka</h3>
            <div className="flex justify-center space-x-4 text-5xl">
              <a href="https://www.facebook.com/saaretalustuudio" target="_blank" rel="noopener noreferrer" className="hover:text-[#478f6c]">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/saaretalustuudio/" target="_blank" rel="noopener noreferrer" className="hover:text-[#478f6c]">
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        
        <div className="text-center text-xs text-gray-400 mt-6">
          &copy; 2025 S-Stuudio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
