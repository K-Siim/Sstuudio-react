import React from 'react';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';

const ProductCard = ({ product, onClick }) => {
    const { dispatch } = useCart();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id: product.id,
                title: product.title,
                price: product.price,
                productCode: product.productCode,
                image: product.images[0]
            }
        });
    };

    return (
        <div className="p-4">
            <h3 className="font-medium text-lg mb-2">{product.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.productCode}</p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-primary font-bold">
                    {product.price.toFixed(2)}€
                </span>
                <button 
                    onClick={handleAddToCart}
                    className="bg-[#478f6c] text-white px-4 py-2 rounded-lg hover:bg-[#3a7459]"
                >
                    Lisa korvi
                </button>
            </div>
        </div>
    );
};

export default ProductCard; 