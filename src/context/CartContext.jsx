import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create the context
const CartContext = createContext();

// Initial state for our cart
const initialState = {
    items: [],          // Array to store cart items
    itemCount: 0,       // Total number of items in cart
    formData: {         // Customer details form data
        name: '',
        email: '',
        phone: '',
        message: ''
    }
};

// Reducer to handle cart actions
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case 'UPDATE_FORM_DATA':
            return {
                ...state,
                formData: { ...state.formData, ...action.payload }
            };
        default:
            return state;
    }
};

// Provider component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Load cart from localStorage when app starts
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const parsedCart = JSON.parse(savedCart);
            dispatch({ 
                type: 'LOAD_CART', 
                payload: parsedCart 
            });
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.items));
    }, [state.items]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use cart context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}; 