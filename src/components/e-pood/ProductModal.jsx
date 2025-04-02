import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext'; //imporditud

const ProductModal = ({ product, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { dispatch } = useCart(); //imporditud

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    savedCart.forEach(item => {
      dispatch({ type: 'ADD_TO_CART', payload: item });
    });
  }, [dispatch]);

  if (!isOpen || !product) return null;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log('Adding to cart:', product);
    
    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      productCode: product.productCode,
      image: product.images[0],
    };
    
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemExists = existingCart.some(item => item.id === newItem.id);
    
    if (!itemExists) {
      const updatedCart = [...existingCart, newItem];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      dispatch({ type: 'ADD_TO_CART', payload: newItem }); //imporditud
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-xl max-w-4xl w-full mx-auto overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Gallery */}
          <div className="relative">
            <div className="aspect-square">
              {product.images && product.images.length > 0 ? (
                <img 
                  src={product.images[currentImageIndex].url}
                  alt={product.images[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">No image available</span>
                </div>
              )}
            </div>
            {/* Thumbnail Gallery */}
            {product.images && product.images.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all
                      ${currentImageIndex === index 
                        ? 'border-black opacity-100' 
                        : 'border-white opacity-75 hover:opacity-100'}`}
                  >
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="p-6 flex flex-col">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-600 text-sm">{product.productCode}</p>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">{product.description}</p>
            </div>

            <div className="mt-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold">
                  {product.price.toFixed(2)}€
                </span>
                <button 
                  onClick={handleAddToCart}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Lisa korvi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
