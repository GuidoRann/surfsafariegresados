import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Filter } from '../components/Filter';
import BackToTop from '../components/BackToTop';
import { FilterProductCard } from '../components/FilterProductCard';


const products = [
  {
    id: 1,
    text: "Buzo Egresados 2025",
    category: "buzos",
    image: "/Ropa/Buzo-1.webp",
  },
  {
    id: 2,
    text: "Campera Promoción 2025",
    category: "camperas",
    image: "/Ropa/Campera-1.webp",
  },
  {
    id: 3,
    text: "Remera Egresados Diseño Clásico",
    category: "remeras",
    image: "/Ropa/Remera-1.webp",
  },
  {
    id: 4,
    text: "Buzo Personalizado Escuela",
    category: "buzos",
    image: "/Ropa/Buzo-2.webp",
  },
  {
    id: 5,
    text: "Campera Universitaria",
    category: "camperas",
    image: "/Ropa/Campera-2.webp",
  },
  {
    id: 6,
    text: "Remera Promoción Diseño Moderno",
    category: "remeras",
    image: "/Ropa/Remera-2.webp",
  },
  {
    id: 7,
    text: "Buzo Deportivo Egresados",
    category: "buzos",
    image: "/Ropa/Buzo-3.webp",
  },
  {
    id: 8,
    text: "Remera Conmemorativa",
    category: "remeras",
    image: "/Ropa/Remera-3.webp",
  },
]

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
    if (categoriaSeleccionada === "todos") {
      setProductosFiltrados( products )
    } else {
      const filtrados = products.filter(( product ) => product.category === categoriaSeleccionada )
      setProductosFiltrados(filtrados)
    }
  }, [ categoriaSeleccionada ])

  return (
    <main>
      <div className="container mx-auto px-4 py-8 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-poppins text-blue-400">Nuestros Productos!</h1>

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
