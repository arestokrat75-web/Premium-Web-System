import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SystemFeatures from './components/SystemFeatures';
import Vorteile from './components/Vorteile';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-system-bg">
      <Navbar />

      <main>
        <Hero />

        <div className="reveal">
          <SystemFeatures />
        </div>

        <div className="reveal">
          <Vorteile />
        </div>

        <div className="reveal">
          <Gallery />
        </div>

        <div className="reveal">
          <Pricing />
        </div>

        <div className="reveal">
          <Booking />
        </div>
      </main>

      <Footer />
    </div>
  );
}
