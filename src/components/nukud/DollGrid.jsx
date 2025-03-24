import React, { useState } from 'react';
import DollCard from './DollCard';
import DollModal from './DollModal';

const DollGrid = ({ dolls }) => {
    const [selectedDoll, setSelectedDoll] = useState(null);
    
    console.log('Dolls received in grid:', dolls);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8">
                {dolls && dolls.map(doll => {
                    console.log('Processing doll in map:', doll);
                    return (
                        <DollCard 
                            key={doll.id} 
                            doll={doll}
                            onClick={() => setSelectedDoll(doll)}
                        />
                    );
                })}
            </div>

            <DollModal 
                doll={selectedDoll}
                isOpen={!!selectedDoll}
                onClose={() => setSelectedDoll(null)}
            />
        </>
    );
};

export default DollGrid; 