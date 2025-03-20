import React from 'react'
import ProductImage from "../../assets/Images/photo-collage.png";
import { motion } from "framer-motion";
import ImageOne from "../../assets/Images/image-one.webp"; 
import ImageTwo from "../../assets/Images/image-two.webp"; 



const Workshop = () => {
    return (
      <>
        <div
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-10"
      style={{
        backgroundImage: `url(${ProductImage})`,
      }}
    >
      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      
      <div className="relative z-10 text-white text-6xl sm:text-7xl md:text-6xl lg:text-7xl font-bold text-center">
        Töötoad
      </div>
    </div>
    
    <div className="container mx-auto py-12 px-6 sm:px-10 md:px-16">
      
      <motion.div 
        className="flex flex-col md:flex-row items-center gap-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-lg sm:text-xl text-gray-700 font-light">
            Tahad end igapäevaelust välja lülitada? Loominguline tegevus sobib kõigile neile, kes soovivad avardada oma mõtlemist, leida loovaid lahendusi ja julgevad katsetada. Tule üksi, pere või sõpradega! Ootame igas vanuses lapsi, noori ja täiskasvanuid.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <motion.img 
            src={ImageOne} 
            alt="Workshop Image" 
            className="rounded-lg shadow-lg w-full"
            style={{ height: "500px", objectFit: "cover" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
      </motion.div>

      
      <motion.div 
        className="flex flex-col md:flex-row-reverse items-center gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-lg sm:text-xl text-gray-700 font-light">
            Töötoas saavad selgeks esmateadmised keraamiliste esemete valmistamiseks. 
            On võimalik voolida, rullida või tublimatel ka potikedral treida. 
            Oled oodatud enda ideedega, et need siis koos valmis meisterdada!
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <motion.img 
            src={ImageTwo} 
            alt="Workshop Image" 
            className="rounded-lg shadow-lg w-full"
            style={{ height: "500px", objectFit: "cover" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </div>
      </motion.div>
    </div>
      </>
    )
  }
  
  export default Workshop