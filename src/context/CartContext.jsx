import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Algse ostukorvi seisund
const initialState = {
    items: [],          // Toode ostukorvi
    itemCount: 0,       // Ostukorvis olevate esemete arv
    formData: {         // Klientide detailide vorm
        name: '',
        email: '',
        phone: '',
        message: ''
    }
};

// Loome CartContext
const CartContext = createContext();

// CartReducer hallitsemiseks
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return state; // Kui toode on juba ostukorvis, siis ära lisa uuesti
            }
            const updatedItems = [...state.items, action.payload];
            sessionStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Salvestame sessionStorage

            return {
                ...state,
                items: updatedItems,
                itemCount: updatedItems.length,
            };
        }
        case 'REMOVE_FROM_CART': {
            const updatedItems = state.items.filter(item => item.id !== action.payload);
            
            console.log("Toode eemaldatud:", action.payload);
            console.log("Uuendatud ostukorv:", updatedItems);

            // Kui ostukorv on tühi, eemaldame sessionStorage'i
            if (updatedItems.length === 0) {
                sessionStorage.removeItem('cartItems');
            } else {
                sessionStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Salvestame sessionStorage
            }

            return {
                ...state,
                items: updatedItems,
                itemCount: updatedItems.length,
            };
        }
        case 'UPDATE_FORM_DATA': {
            return {
                ...state,
                formData: { ...state.formData, ...action.payload }
            };
        }
        default:
            return state;
    }
};

// CartProvider, mis pakub konteksti kõigile lastele
export const CartProvider = ({ children }) => {
    const getInitialState = () => {
        try {
            const savedItems = sessionStorage.getItem('cartItems');
            if (savedItems) {
                const parsedItems = JSON.parse(savedItems);
                if (parsedItems.length > 0) {
                    console.log("Ostukorv laetud lehele naastes:", parsedItems);
                    return {
                        ...initialState,
                        items: parsedItems,
                        itemCount: parsedItems.length
                    };
                }
            }
        } catch (error) {
            console.error("Error loading cart:", error);
        }
        // Kui sessionStorage on tühi, alusta algse väärtusega
        return initialState;
    };

    const [state, dispatch] = useReducer(cartReducer, getInitialState());

    // Kontrollime, kas ostukorvi salvestamine toimub ainult siis, kui tooted muutuvad
    useEffect(() => {
        // Kui ostukorv on tühi, ei salvestata midagi
        if (state.items.length > 0) {
            console.log("Salvestan ostukorvi sessionStorage'i:", state.items);
            sessionStorage.setItem('cartItems', JSON.stringify(state.items));
        }
    }, [state.items]); // Lisa sõltuvus `state.items`, et salvestada ainult siis, kui tooted muutuvad

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// `useCart` hook, et ligipääseda ostukorvi konteksti
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
