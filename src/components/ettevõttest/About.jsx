import React from 'react';
import AboutImage from "../../assets/Images/ettevotte-pilt.jpg";

const About = () => {
  return (
    <div className="container mx-auto mt-10 md:mt-20 px-4 sm:px-6 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
        
        
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
          <img
            src={AboutImage}
            alt="Portrait"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        
        <div className="w-full lg:w-1/2 text-left leading-relaxed md:leading-loose">
          <p className="text-lg sm:text-xl md:text-2xl text-black font-light">
            S-Stuudio alustas oma tegevust juulis 2019. Lühikese aja jooksul on toodetud palju erinevat tarbekeraamikat ja pere pisematele erinevaid tooteid. 
            Oleme kogu tootmisprotsessis loodussäästlikud. Kogu toodete valik on valminud Saaremaal käsitööna. 
            Tooteid on võimalik osta meie kodustuudiost, Instagramist ja Facebookist. Saadame üle Eesti pakiautomaatidesse. 
            Ettevõtja on lõpetanud keraamiku eriala Kuressaare Ametikoolis 2018. aastal ja hetkel ennast taas täiendamas samas koolis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;