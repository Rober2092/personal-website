// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Newsletter from './components/Newsletter';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Testimonials />
        <Portfolio />
        <Services />
        <FAQ />
        <Newsletter />
        <Contact />
        <BackToTop />
        <Footer />
      </div>
    </div>
  );
}

export default App;
