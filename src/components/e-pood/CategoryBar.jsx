import React from 'react';

const CategoryBar = ({ categories = [], selectedCategory, onCategorySelect }) => {
  
  const desiredOrder = [
    'Keraamika',
    'Keraamika sarjad',
    'Maalitud portselan',
    'Ehted',
    'Nukud',
    'Kaisukad',
    'Beebile',
    'Kaardid',
    'Muu'
  ];

  
  const sortedCategories = Array.isArray(categories)
    ? [...categories].sort((a, b) => {
        const aIndex = desiredOrder.indexOf(a.title?.trim());
        const bIndex = desiredOrder.indexOf(b.title?.trim());
        return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
      })
    : [];

  return (
    <div className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="flex overflow-x-auto scrollbar-hide py-4 px-6 gap-4">
        
        <button 
          className={`shrink-0 px-4 py-2 rounded-full transition-colors
            ${!selectedCategory 
              ? 'bg-black text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
            }`}
          onClick={() => onCategorySelect(null)}
        >
          Kõik
        </button>

        
        {sortedCategories.map((category) => (
          <button
            key={category.id}
            className={`shrink-0 px-4 py-2 rounded-full transition-colors
              ${selectedCategory?.id === category.id 
                ? 'bg-black text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
              }`}
            onClick={() => onCategorySelect(category)}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
