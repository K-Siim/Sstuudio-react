import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const [alreadyInCart, setAlreadyInCart] = useState(false);
    const { state, dispatch } = useCart();

    const handleAddToCart = (e) => {
        e.stopPropagation();
        try {
            if (!product?.id || !product?.title || !product?.price) {
                console.error('Invalid product data');
                return;
            }

            // Check if product is already in cart
            const isInCart = state.items.some(item => item.id === product.id);
            if (isInCart) {
                setAlreadyInCart(true);
                setTimeout(() => setAlreadyInCart(false), 2000);
                return;
            }

            dispatch({
                type: 'ADD_TO_CART',
                payload: {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    productCode: product.productCode || '',
                    image: product.images?.[0] || null
                }
            });
            
            // Show feedback that item was added
            setAddedToCart(true);
            setTimeout(() => setAddedToCart(false), 2000);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    if (!product) {
        return null;
    }

    const getButtonClass = () => {
        if (addedToCart) return 'bg-green-600 hover:bg-green-700';
        if (alreadyInCart) return 'bg-yellow-500 hover:bg-yellow-600';
        return 'bg-[#478f6c] hover:bg-[#3a7459]';
    };

    const getButtonText = () => {
        if (addedToCart) return 'Lisatud';
        if (alreadyInCart) return 'Juba korvis';
        return 'Lisa korvi';
    };

    return (
        <div className="p-4">
            <h3 className="font-medium text-lg mb-2">{product.title}</h3>
            {product.productCode && (
                <p className="text-gray-600 text-sm mb-2">{product.productCode}</p>
            )}
            <div className="flex justify-between items-center mt-4">
                <span className="text-primary font-bold">
                    {typeof product.price === 'number' ? product.price.toFixed(2) : '0.00'}€
                </span>
                <button 
                    onClick={handleAddToCart}
                    className={`${getButtonClass()} text-white px-4 py-2 rounded-lg transition-colors`}
                    aria-label={`Add ${product.title} to cart`}
                    disabled={addedToCart || alreadyInCart}
                >
                    {getButtonText()}
                </button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        productCode: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.object)
    }).isRequired
};

export default ProductCard; 