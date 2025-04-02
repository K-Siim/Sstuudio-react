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
                items: [...state.items, action.payload],
                itemCount: state.itemCount + 1,
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                itemCount: state.itemCount - 1,
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

    const getInitialState = () => {
        try {
            const savedItems = localStorage.getItem('cartItems');
            if (savedItems) {
                const items = JSON.parse(savedItems);
                return {
                    ...initialState,
                    items: items,
                    itemCount: items.length
                };
            }
        } catch (error) {
            console.error("Error loading cart:", error);
        }
        return initialState;
    };

    const [state, dispatch] = useReducer(cartReducer, getInitialState());

    
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(state.items));
    }, [state.items]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};