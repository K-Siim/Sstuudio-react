import React from 'react'
import heroImage from "../Images/1000006482.jpg";



const Hero = () => {
    return (
      <div
        className="relative w-full h-screen flex items-center justify-start bg-cover bg-center px-10 md:brightness-50"
        style={{
            backgroundImage: `url(${heroImage})`,
          }}
          
      >
        
        <div className="relative z-10 ml-auto text-center mt-[-20rem]  md:mx-auto md:w-full">
          <h1 className="text-5xl text-black">Keraamika ja käsitöö</h1>
          <p className="text-2xl text-black mt-2">Teeme sinu unistused teoks!</p>
          <p className="text-xl font-bold text-black mt-2">S-Stuudio OÜ</p>
        </div>
      </div>
    );
  };
  
  export default Hero;