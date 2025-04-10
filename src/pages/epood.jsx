import React, { useEffect, useState } from 'react';
import Theme from '../components/e-pood/Theme';
import { getCategories, getProducts } from '../services/contentful/api.js';
import CategoryBar from '../components/e-pood/CategoryBar';
import ProductGrid from '../components/e-pood/ProductGrid';
import { CartProvider } from '../context/CartContext';  // CartProvider import

const Epood = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [categoriesData, productsData] = await Promise.all([
                    getCategories(),
                    getProducts()
                ]);
                setCategories(categoriesData);
                setProducts(productsData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category.id === selectedCategory.id)
        : products;

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
    );

    if (error) return (
        <div className="flex items-center justify-center min-h-screen text-red-500">
            Error: {error}
        </div>
    );

    return (
        <CartProvider>
            <div className="min-h-screen bg-gray-50">
                <Theme />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <CategoryBar 
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategorySelect={setSelectedCategory}
                    />
                    <ProductGrid products={filteredProducts} />
                </div>
            </div>
        </CartProvider>
    );
}

export default Epood;
