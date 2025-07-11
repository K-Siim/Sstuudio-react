import React from 'react'
import ProductImage from "../assets/Images/pilt4.jpg";

const Hero = () => {
    return (
      <div
        className="relative w-full h-[100vh] flex items-center justify-start bg-cover bg-center px-10"
        style={{
          backgroundImage: `url(${ProductImage})`,
          backgroundPosition: 'center top'
        }}
      >
        
        <div className="absolute inset-0 bg-black opacity-20 md:opacity-0"></div>
        
        <div className="relative z-10 ml-auto text-center md:mt-[-20rem] mt-[0]">
          <h1 className="text-4xl md:text-5xl text-white md:text-black">Keraamika ja käsitöö</h1>
          <p className="text-xl md:text-2xl text-white mt-2 text-center md:text-black">Teeme sinu unistused teoks!</p>
          <p className="text-lg md:text-xl font-bold text-white text-center mt-2 md:text-black">S-Stuudio OÜ</p>
        </div>
      </div>
    );
  };
  
  export default Hero;