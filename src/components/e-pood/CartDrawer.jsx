import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
    const { state, dispatch } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleRemoveItem = (productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    };

    // Helper function to safely get image URL
    const getImageUrl = (image) => {
        if (!image) return '';
        if (typeof image === 'string') return image;
        return image.url || '';
    };

    // Format cart items for email readability
    const formatCartForEmail = () => {
        return state.items.map(item => `
Product: ${item.title}
Price: ${typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}€
Code: ${item.productCode || 'N/A'}
Image URL: ${getImageUrl(item.image) || 'No image'}
        `).join('\n\n');
    };

    const handleNetlifySubmit = (e) => {
        e.preventDefault();
        
        if (formSubmitted) {
            return;
        }
        
        setIsSubmitting(true);
        setSubmitError(null);
        
        try {
            // Set the hidden field values before submission
            const cartItemsInput = document.getElementById('cart-items-input');
            const cartItemsFormattedInput = document.getElementById('cart-items-formatted-input');
            
            if (cartItemsInput) {
                cartItemsInput.value = JSON.stringify(state.items);
            }
            
            if (cartItemsFormattedInput) {
                cartItemsFormattedInput.value = formatCartForEmail();
            }
            
            // Instead of fetch API, rely on the standard form submission
            // Mark as submitted to prevent double-submission
            setFormSubmitted(true);
            
            // Show success message
            setSubmitSuccess(true);
            
            // Clear cart
            dispatch({ type: 'CLEAR_CART' });
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            
            // Auto close after delay
            setTimeout(() => {
                setSubmitSuccess(false);
                onClose();
            }, 3000);
            
            // Let the form submit naturally
            return true;
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitError('Viga tellimuse esitamisel. Palun proovige uuesti.');
            setIsSubmitting(false);
            return false;
        }
    };

    return (
        <>
            {/* Modify the backdrop to be more transparent or remove it */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-40"
                    onClick={onClose}
                />
            )}

           
            <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="p-4 h-full flex flex-col">
                    
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Ostukorv</h2>
                        <button 
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Display success message */}
                    {submitSuccess && (
                        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                            Tellimus on edukalt esitatud! Täname teid.
                        </div>
                    )}

                    {/* Display error message */}
                    {submitError && (
                        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                            {submitError}
                        </div>
                    )}

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto mb-4">
                        {state.items.length === 0 ? (
                            <p className="text-center text-gray-500 mt-8">Ostukorv on tühi</p>
                        ) : (
                            <div className="space-y-4">
                                {state.items.map(item => (
                                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                                        {item.image && (
                                            <img 
                                                src={getImageUrl(item.image)} 
                                                alt={item.title} 
                                                className="w-20 h-20 object-contain"
                                            />
                                        )}
                                        <div className="flex-1">
                                            <h3 className="font-medium">{item.title}</h3>
                                            {item.productCode && (
                                                <p className="text-sm text-gray-500">Kood: {item.productCode}</p>
                                            )}
                                            <p className="font-bold">
                                                {typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}€
                                            </p>
                                        </div>
                                        <button 
                                            onClick={() => handleRemoveItem(item.id)}
                                            className="p-2 hover:bg-gray-100 rounded-full"
                                        >
                                            Eemalda
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Contact Form */}
                    {state.items.length > 0 && (
                        <form 
                            name="order-form"
                            method="POST" 
                            data-netlify="true"
                            onSubmit={handleNetlifySubmit}
                            className="space-y-4"
                            action="/thank-you"
                        >
                            {/* Required for Netlify Forms */}
                            <input type="hidden" name="form-name" value="order-form" />
                            
                            {/* Hidden fields for cart data */}
                            <input 
                                type="hidden" 
                                name="cart-items" 
                                id="cart-items-input"
                                value={JSON.stringify(state.items)} 
                            />
                            <input 
                                type="hidden" 
                                name="cart-items-formatted" 
                                id="cart-items-formatted-input"
                                value={formatCartForEmail()} 
                            />
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nimi
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Telefon
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Sõnum (pakiautomaadi valik vms)
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    rows="3"
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <button 
                                type="submit"
                                className={`w-full py-3 rounded-lg text-white ${
                                    isSubmitting 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-[#478f6c] hover:bg-[#3a7459]'
                                }`}
                                disabled={isSubmitting || formSubmitted}
                            >
                                {isSubmitting ? 'Saadame...' : 'Esita tellimus'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default CartDrawer; 