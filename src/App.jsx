import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Esileht from './pages/esileht';
import Ettevõttest from './pages/ettevõttest'
import Epood from './pages/epood';
import Nukud from './pages/nukud';
import Töötoad from './pages/töötoad'
import Kontakt from './pages/kontakt';
import ThankYou from './pages/ThankYou';
import { CartProvider } from './context/CartContext';
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Esileht />} />
          <Route path="/ettevõttest" element={<Ettevõttest />} />
          <Route path="/epood" element={<Epood />}/>
          <Route path="/nukud" element={<Nukud />}/>
          <Route path="/töötoad"  element={<Töötoad/>}  />
          <Route path="/kontakt"  element={<Kontakt/>}  />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
