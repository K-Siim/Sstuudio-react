import React from 'react';
import ProductImage from "../../assets/Images/photo-collage.png";


const Theme = () => {
    return (
      <div
        className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-10"
        style={{
          backgroundImage: `url(${ProductImage})`,
        }}
      >
        
        <div className="absolute inset-0 bg-black opacity-50"></div>
  
        
        <div className="relative z-10 text-white text-6xl sm:text-7xl md:text-6xl lg:text-7xl font-bold text-center">
          E-pood
        </div>
      </div>
      
      
    );
  };
  
  export default Theme;