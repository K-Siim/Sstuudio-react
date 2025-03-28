import React, { useState } from 'react';
import ProductModal from './ProductModal';


// src/components/shop/ProductGrid.jsx
const ProductCard = ({ product, onClick }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prev) => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    };
  
    const prevImage = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prev) => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    };
    
    // Handle case where product has no images
    if (!product.images || product.images.length === 0) {
      return (
        <div className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md 
                      transition-shadow duration-200 overflow-hidden">
          <div className="aspect-square bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
          <ProductInfo product={product} />
        </div>
      );
    }
  
    return (
      <div 
        className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md 
                   transition-shadow duration-200 overflow-hidden"
        onClick={onClick}
      >
        {/* Main Image Display */}
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={product.images[currentImageIndex].url}
            alt={product.images[currentImageIndex].alt || product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
          
          {/* Navigation Arrows - only show if there are multiple images */}
          {product.images.length > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full
                         bg-white/80 hover:bg-white shadow-md opacity-0 group-hover:opacity-100
                         transition-opacity duration-200"
                aria-label="Previous image"
              >
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
              </button>
  
              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full
                         bg-white/80 hover:bg-white shadow-md opacity-0 group-hover:opacity-100
                         transition-opacity duration-200"
                aria-label="Next image"
              >
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
  
              {/* Optional: Current image indicator */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                  {currentImageIndex + 1}/{product.images.length}
                </span>
              </div>
            </>
          )}
        </div>
  
        <ProductInfo product={product} />
      </div>
    );
  };

// Separated product info component for reusability
const ProductInfo = ({ product }) => (
    <div className="p-4">
      <h3 className="font-medium text-lg mb-2">{product.title}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.productCode}</p>
      {/* Added description with line clamp */}
      <p className="text-gray-500 text-sm mb-3 line-clamp-2">
        {product.description}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-primary font-bold">
          {product.price.toFixed(2)}€
        </span>
        <span className="text-sm text-gray-500">
          {product.category.title}
        </span>
      </div>
    </div>
);

const testProduct = {
    id: 1,
    title: 'Test Product',
    price: 10.00,
    productCode: 'TEST123',
    images: [{ url: 'https://via.placeholder.com/150' }]
};

const ProductGrid = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
  
        <ProductModal 
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </>
    );
  };

export default ProductGrid;