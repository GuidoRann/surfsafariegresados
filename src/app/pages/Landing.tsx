import { useEffect, useState } from 'react';
import BackToTop from '../components/BackToTop';
import Hero from '../components/Hero';
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
     <div className="flex flex-col flex-1 bg-surf-white font-poppins">
      <Hero />
      <HowToBuy />
      <FAQSection />
      <InstagramFeed />
      {showBackToTop && <BackToTop />}
    </div>
  );
}
