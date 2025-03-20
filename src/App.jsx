import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Esileht from './pages/esileht';
import Ettevõttest from './pages/ettevõttest'
// import Epood from './pages/epood';
// import Nukud from './pages/Nukud';
import Töötoad from './pages/töötoad'
// import Kontakt from './pages/Kontakt';



function App() {
  return (
    <>
     <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Esileht />} />
        <Route path="/ettevõttest" element={<Ettevõttest />} />
        {/* <Route path="/epood" element={<Epood />}/>
        <Route path="/nukud" element={<Nukud />}/> */}
        <Route path="/töötoad"  element={<Töötoad/>}  />
        {/* <Route path="/kontakt"  element={<Kontakt/>}  /> */}
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App
