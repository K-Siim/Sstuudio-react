import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Photo1 from "../assets/Images/1000005904.jpg";
import Photo2 from "../assets/Images/20250123_194346.jpg";
import Photo3 from "../assets/Images/beebitekk.jpg";
import { Slide, Fade } from "react-awesome-reveal";

const CardsData = [
  {
    id: 1,
    img: Photo1,
    title: "Avastage",
    desc: "Teeme põnevat keraamikat Sinu koju, kontorisse või kingikotti!",
  },
  {
    id: 2,
    img: Photo2,
    title: "Tundke",
    desc: "Eriline disain annab Sulle erilise tunde ja Sa saad eristuda kogu maailmast. Meie tahame eristuda ja luua tooteid erilistele inimestele. ",
  },
  {
    id: 3,
    img: Photo3,
    title: "Kogege",
    desc: "Erilised ja ainulaadsed on meie pakutavad tooted pere pisematele. Kõik tooted on valmistatud erilise hoole ja armastusega käsitsi.",
  },
];

const Cards = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-[5rem] md:grid-cols-3 place-items-center gap-6">
        {CardsData.map(({ id, img, title, desc }) => {
          return (
            <Card 
              key={id}
              img={img}
              title={title}
              desc={desc}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({ img, title, desc }) => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  
  
  const toggleOverlay = () => {
    setIsActive(!isActive);
  };
  
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        
        if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null, 
        rootMargin: '0px',
        threshold: 0.7, 
      }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="text-white rounded-lg overflow-hidden relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[3/4] shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
      onClick={toggleOverlay}
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover rounded-t-lg"
      />
      
      <div 
        className={`absolute left-0 top-0 p-4 w-full h-full bg-black/60 backdrop-blur-sm duration-300 
          ${isActive || isVisible ? 'opacity-100' : 'opacity-0'} 
          md:group-hover:opacity-100
          ${isActive || isVisible ? 'pointer-events-auto' : 'pointer-events-none md:group-hover:pointer-events-auto'}`}
      >
        <div className="space-y-4">
          <Slide cascade>
            <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
            <Fade cascade damping={0.05}>
              <p className="text-sm sm:text-base">{desc}</p>
            </Fade>
            <div>
              <Link to="/epood">
                <button 
                  className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 focus:ring-2 focus:ring-white focus:outline-none duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  Vaata
                </button>
              </Link>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Cards;