import React from 'react';
import Header from './components/Header';
import SharpenSection from './components/SharpenSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SharpenSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App; 