import React from 'react'
import heroImage from "../assets/Images/1000006482.jpg";



const Hero = () => {
    return (
      <div
  className="relative w-full h-screen flex items-center justify-start bg-cover bg-center px-10"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
>
  
  <div className="absolute inset-0 bg-black opacity-20 md:opacity-0"></div>

  
  <div className="relative z-10 ml-auto text-center mt-[-20rem]">
    <h1 className="text-5xl text-white md:text-black">Keraamika ja käsitöö</h1>
    <p className="text-2xl text-white mt-2 text-center md:text-black">Teeme sinu unistused teoks!</p>
    <p className="text-xl font-bold text-white text-center mt-2 md:text-black">S-Stuudio OÜ</p>
  </div>
</div>
    );
  };
  
  export default Hero;