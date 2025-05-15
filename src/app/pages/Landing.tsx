import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import BackToTop from '../components/BackToTop';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import InstagramFeed from '../components/InstagramFeed';
import FAQSection from '../components/FAQSection';
import HowToBuy from '../components/HowToBuy';


export default function Landing() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className='flex flex-col min-h-screen w-screen font-poppins'>
      <Navbar />
      
      <Hero />

      <HowToBuy />

      <FAQSection />

      <InstagramFeed />

      <Footer />
      {showBackToTop && <BackToTop />}
    </div>
  );
}
