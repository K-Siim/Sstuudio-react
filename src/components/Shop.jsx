import React from "react";
import { Link } from "react-router-dom"; 
import ShopImage from "../assets/Images/PSX_20250124_201908.jpg";

const Shop = () => {
    return (
        <div
            className="relative w-full h-150 flex items-center justify-start mt-30 bg-cover bg-center px-10 md:h-180"
            style={{
                backgroundImage: `url(${ShopImage})`,
            }}
        >
            
            <div className="absolute inset-0 bg-black opacity-50"></div>

            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6">
                <h1 className="text-3xl text-white font-bold md:text-5xl">
                    Sukelduge Käsitöö maailma siit
                </h1>

                
                <Link to="/epood">
                    <button className="px-6 py-3 text-white text-lg font-semibold rounded-lg transition-all duration-300"
                        style={{
                            background: "linear-gradient(135deg, #478f6c, #478f6c)"
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = "linear-gradient(135deg, #0056b3, #003f7f)"}
                        onMouseOut={(e) => e.currentTarget.style.background = "linear-gradient(135deg, #478f6c, #478f6c)"}
                    >
                        E-pood
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Shop;
