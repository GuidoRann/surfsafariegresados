import { useEffect, useState } from 'react';
import BackToTop from '../components/BackToTop';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import InstagramFeed from '../components/InstagramFeed';
import FAQSection from '../components/FAQSection';
import HowToBuy from '../components/HowToBuy';
import SponsorsSection from '../components/SponsorSection';
import Navbar from '../components/Navbar';


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
    <div className='flex flex-col min-h-screen w-screen font-poppins bg-surf-white'>
      <Navbar />
      
      <Hero />

      <HowToBuy />

      <SponsorsSection />

      <FAQSection />

      <InstagramFeed />

      <Footer />
      {showBackToTop && <BackToTop />}
    </div>
  );
}
