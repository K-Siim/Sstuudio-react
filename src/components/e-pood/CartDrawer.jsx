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

    const handleRemoveItem = (productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    };

    // Helper function to safely get image URL
    const getImageUrl = (image) => {
        if (!image) return '';
        if (typeof image === 'string') return image;
        return image.url || '';
    };

    // TO-DO
    // Format cart items for email readability
    // const formatCartForEmail = () => {
    //     let emailText = "TELLITUD TOOTED:\n\n";
        
    //     state.items.forEach((item, index) => {
    //         emailText += `Toode ${index + 1}: ${item.title}\n`;
    //         emailText += `Hind: ${typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}€\n`;
    //         emailText += `Tootekood: ${item.productCode || 'N/A'}\n`;
    //         if (getImageUrl(item.image)) {
    //             emailText += `Pilt: ${getImageUrl(item.image)}\n`;
    //         }
    //         emailText += "----------------------------------------\n\n";
    //     });
        
    //     return emailText;
    // };
    
    const formatCartForEmail = () => {
        let emailText = "TELLITUD TOOTED: \n\n\n\n";
    
        state.items.forEach((item, index) => {
            emailText += `Toode ${index + 1}: ${item.title} \n`;
            emailText += `Hind: ${typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}€ \n`;
            emailText += `Tootekood: ${item.productCode || 'N/A'} \n`;
            emailText += `---------------------------------------- \n\n`;
        });
    
        return emailText;
    };
    

    // Calculate total order cost
    const calculateTotal = () => {
        return state.items.reduce((sum, item) => 
            sum + (typeof item.price === 'number' ? item.price : 0), 0
        ).toFixed(2);
    };

    // Create a summary of cart items
    const getCartSummary = () => {
        return "Kokkuvõte: \n" + state.items.map(item => 
            `${item.title} (${item.productCode || 'N/A'}) - ${typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}€`
        ).join(' \n');
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Prepare form data
            const form = e.target;
            const formEntries = new FormData(form);
            
            // Add form-name field for Netlify
            formEntries.append("form-name", "order-form");
            
            // TO-DO
            // Add cart data
            // formEntries.append("cart-items-formatted", formatCartForEmail());
            // formEntries.append("cart-summary", getCartSummary());
            // formEntries.append("total-cost", `Kogusumma: ${calculateTotal()}€`);

            // Submit to Netlify
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formEntries).toString(),
            });

            if (response.ok) {
                // Show success message
                setSubmitSuccess(true);
                setSubmitError(null);
                
                // Clear cart
                dispatch({ type: 'CLEAR_CART' });
                
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                
                // No redirect - just stay on the page with the success message
            } else {
                throw new Error(`Form submission failed: ${response.statusText}`);
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitError("Vabandame, tellimuse esitamisel tekkis viga. Palun proovige uuesti.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
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
                            <p className="font-bold text-lg mb-2">Tellimus on edukalt esitatud!</p>
                            <p>Täname teid tellimuse eest. Võtame teiega peagi ühendust.</p>
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
                            netlify="true"
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            {/* Required for Netlify Forms */}
                            <input type="hidden" name="form-name" value="order-form" />
                            
                            {/* Hidden fields for cart data */}
                            <input 
                                type="hidden" 
                                name="cart-items-formatted" 
                                value={formatCartForEmail()} 
                            />
                            <input 
                                type="hidden" 
                                name="cart-summary" 
                                value={getCartSummary()} 
                            />
                            <input 
                                type="hidden" 
                                name="total-cost" 
                                value={`Kogusumma: ${calculateTotal()}€`} 
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
                                disabled={isSubmitting}
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