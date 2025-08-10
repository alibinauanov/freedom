import React from 'react';
import StructuredData from './components/StructuredData';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AdvantagesSection from './components/AdvantagesSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <StructuredData />
      <Header />
      <main className="main" id="main-content" tabIndex="-1">
        <HeroSection />
        <AdvantagesSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
