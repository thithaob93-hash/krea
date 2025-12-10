import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { QualitySection } from './components/QualitySection';
import { SpeedSection } from './components/SpeedSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CallToAction } from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        {/* 'Footer' component contains the 'How it works' steps */}
        <Footer />
        <Features />
        <QualitySection />
        <SpeedSection />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
    </div>
  );
}

export default App;