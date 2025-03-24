import React, { useState } from 'react';

const DollCard = ({ doll, onClick }) => {
    console.log('Received doll data:', doll);
    console.log('Doll fields:', {
        title: doll.title,
        date: doll.date,
        images: doll.images,
        description: doll.description
    });

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => 
            prev === doll.images.length - 1 ? 0 : prev + 1
        );
    };
  
    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => 
            prev === 0 ? doll.images.length - 1 : prev - 1
        );
    };

    if (!doll.images || doll.images.length === 0) {
        return (
            <div className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md 
                          transition-shadow duration-200 overflow-hidden">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400">No image available</span>
                </div>
                <DollInfo doll={doll} />
            </div>
        );
    }

    return (
        <div 
            className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md 
                     transition-shadow duration-200 overflow-hidden"
            onClick={onClick}
        >
            <div className="aspect-square overflow-hidden relative">
                <img 
                    src={doll.images[currentImageIndex].url}
                    alt={doll.images[currentImageIndex].alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                
                {doll.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full
                                     bg-white/80 hover:bg-white shadow-md opacity-0 group-hover:opacity-100
                                     transition-opacity duration-200"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full
                                     bg-white/80 hover:bg-white shadow-md opacity-0 group-hover:opacity-100
                                     transition-opacity duration-200"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}
            </div>
            <DollInfo doll={doll} />
        </div>
    );
};

const DollInfo = ({ doll }) => (
    <div className="p-4">
        <h3 className="font-medium text-lg mb-2">{doll.title}</h3>
        <p className="text-gray-600 text-sm mb-2">
            {new Date(doll.date).toLocaleDateString()}
        </p>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
            {doll.description}
        </p>
    </div>
);

export default DollCard; 