import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
    desc: "Eriline portselanimaal annab Sulle erilise tunde ja Sa saad eristuda kogu maailmast.",
  },
  {
    id: 3,
    img: Photo3,
    title: "Kogege",
    desc: "Erilised ja ainulaadsed tooted on valmistatud erilise hoole ja armastusega käsitsi.",
  },
];

const Cards = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-[5rem] md:grid-cols-3 place-items-center gap-6">
        {CardsData.map(({ id, img, title, desc }) => {
          return (
            <div
              key={id}
              className="text-white rounded-lg overflow-hidden relative group w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[450px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover rounded-t-lg"
              />

              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
                    <Fade cascade damping={0.05}>
                      <p className="text-sm sm:text-base">{desc}</p>
                    </Fade>
                    <div>
                      
                      <Link to="/epood">
                        <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                          View
                        </button>
                      </Link>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
