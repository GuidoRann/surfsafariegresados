import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-4 md:py-6 "
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div
              className={`transition-all duration-300 ${isScrolled ? "w-12 h-12 flex items-center justify-center" : "w-20 h-20 flex items-center justify-center"}`}
            >
              <img src="/logo.png" alt="Logo" />
            </div>
          </Link>

          <button
            className={`md:hidden transition-colors duration-300 ${isScrolled ? "text-gray-800" : "text-primary-blue"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <nav
            className={`hidden md:flex space-x-4 lg:space-x-8 font-bold transition-colors duration-300 ${
              isScrolled ? "text-secondary-blue" : "text-secondary-blue"
            }`}
          >
            <a href="/about" className="hover:underline font-medium">
              Nosotros
            </a>
            <a href="/products" className="hover:underline font-medium">
              Productos
            </a>
            <a href="/promotions" className="hover:underline font-medium">
              Promociones
            </a>
            <a href="/contact" className="hover:underline font-medium">
              Contáctanos
            </a>
          </nav>
        </div>

        <div
          className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="text-2xl">👕</div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-6">
                <a
                  href="#"
                  className="block text-xl font-medium text-gray-800 hover:text-teal-600 transition-colors duration-200 py-2 border-b border-transparent hover:border-teal-600"
                >
                  SHOP
                </a>
                <a
                  href="#"
                  className="block text-xl font-medium text-gray-800 hover:text-teal-600 transition-colors duration-200 py-2 border-b border-transparent hover:border-teal-600"
                >
                  CUSTOMIZE
                </a>
                <a
                  href="#"
                  className="block text-xl font-medium text-gray-800 hover:text-teal-600 transition-colors duration-200 py-2 border-b border-transparent hover:border-teal-600"
                >
                  ABOUT
                </a>
                <a
                  href="#"
                  className="block text-xl font-medium text-gray-800 hover:text-teal-600 transition-colors duration-200 py-2 border-b border-transparent hover:border-teal-600"
                >
                  CONTACT
                </a>
              </div>
            </nav>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </header>
  )
}
