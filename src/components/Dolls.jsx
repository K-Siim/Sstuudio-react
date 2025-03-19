import React from "react";
import { Link } from "react-router-dom";
import DollImage from "../assets/Images/gandr-collage.jpg"; 

const Dolls = () => {
  return (
    <div className="container mx-auto mt-10 md:mt-20 px-4 sm:px-6 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
        
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={DollImage}
            alt="Handmade Doll"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-left leading-relaxed md:leading-loose">
          <p className="text-xl sm:text-2xl md:text-3xl text-black font-light">
            Käsitöö nukud on ainulaadsed ja täis erilist võlu, valminud suure hoole ja detailitäpsusega.
            Nende pastelltoonides rõivad ja armsad kaaslased, nagu väikesed kaisuloomad, teevad neist tõelised pilgupüüdjad.
            Nukud sobivad ideaalselt nii sisekujundusse kui ka südantsoojendavaks kingituseks. 
            Iga nukk kannab endas loo ja käsitöölise armastuse.
          </p>

          {/* Button */}
          <Link to="/nukud">
            <button className="mt-6 px-6 py-3 text-white text-xl font-semibold rounded-lg transition-all duration-300 
              bg-gradient-to-r from-[#478f6c] to-[#478f6c] hover:from-[#0056b3] hover:to-[#003f7f]">
              Nukud
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dolls;
