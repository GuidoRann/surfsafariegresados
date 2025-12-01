import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Filter } from '../components/Filter';
import BackToTop from '../components/BackToTop';
import { FilterProductCard } from '../components/FilterProductCard';
import { products } from '../components/productList';


export default function Products() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState( "todos" )
  const [productosFiltrados, setProductosFiltrados] = useState( products )
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

  useEffect(() => {
    if ( categoriaSeleccionada.includes( "todos" ) ) {
      setProductosFiltrados( products )
    } else {
      const filtrados = products.filter(( product ) => product.category.includes( categoriaSeleccionada ) )
      setProductosFiltrados( filtrados )
    }
  }, [ categoriaSeleccionada ])

  return (
    <main className="relative min-h-screen py-12 font-poppins overflow-hidden">

      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-surf-white"></div>
        <img
          src="/back pagina.png"
          alt="background"
          className="absolute top-10 left-10 w-[35%] object-cover opacity-15 z-0"
        />
      </div>

      <div className="container mx-auto z-10 px-4 pt-32">
        <h1 className="text-7xl md:text-8xl tracking-wide text-stroke-blue leading-none font-surf-font text-center text-surf-lightblue">Nuestros Productos!</h1>

      <Filter categoriaSeleccionada={ categoriaSeleccionada } setCategoriaSeleccionada={ setCategoriaSeleccionada } />

      <AnimatePresence> 
        <div className="mt-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              { productosFiltrados.map(( product ) => (
                <FilterProductCard key={ product.id } product={ product } />
              )) }
          </motion.div>
        </div>
        </AnimatePresence>
      </div>
      { showBackToTop && <BackToTop /> }
    </main>
  )
}
