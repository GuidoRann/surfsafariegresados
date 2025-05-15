import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import RetroButton from './RetroButton';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0)
    }
  
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={ `fixed w-full z-50 transition-all duration-300
      ${ isAtTop ? 'bg-transparent h-26' : 'bg-white h-24 shadow-sm' }` }>
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-16 h-16 mt-6 flex items-center justify-center mr-2">
                <img src="/logo.png" alt="Logo" />
              </div>
              {/* <span className="text-3xl font-cal-sans font-bold bg-gradient-to-r mt-4 from-blue-900 to-red-700 text-transparent bg-clip-text">
                SurfSafari
              </span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 mt-4">
            <RetroButton bgColor="yellow" url="/about">Nosotros</RetroButton>
            <RetroButton bgColor="blue" url="/products">Productos</RetroButton>
            <RetroButton bgColor="green" url="/contact">Contáctanos</RetroButton>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="retro-button bg-gray-100 p-2 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`px-6 pt-10 space-y-1 sm:px-3 ${isAtTop ? '' : 'bg-white shadow-md pt-2'}`}>
              <RetroButton bgColor="yellow" isMobile url="/about">Nosotros</RetroButton>
              <RetroButton bgColor="blue" isMobile url="/products">Productos</RetroButton>
              <RetroButton bgColor="green" isMobile url="/contact">Contáctanos</RetroButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}