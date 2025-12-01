import { motion } from "framer-motion"

interface Product {
  id: number;
  image: string;
  text: string;
  category: string[];
}

interface ProductCardProps {
  product: Product
}

export function FilterProductCard({ product }: ProductCardProps) {

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-[450px] w-full overflow-hidden">
        <img src={ product.image || "/placeholder.svg"} alt={ product.text } className="w-full h-full object-cover object-center" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{ product.text }</h3>
        <div className="flex items-center mt-2 gap-2">
          { product.category.map( ( category ) => (
            <span key={ category } className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full capitalize">
              { category }
            </span>
          ) ) }
        </div>
      </div>
    </motion.div>
  )
}
