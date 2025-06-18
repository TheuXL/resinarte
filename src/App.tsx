import { useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Products } from './components/Products/Products';
import { AboutSection } from './components/AboutSection';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Products />
        <AboutSection />
        <Contact />
      </main>
      <Footer />
      </div>
  );
}

export default App;
