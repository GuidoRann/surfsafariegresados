import { motion } from "framer-motion"

interface FilterProps {
  categoriaSeleccionada: string
  setCategoriaSeleccionada: (categoria: string) => void
}

export function Filter({ categoriaSeleccionada, setCategoriaSeleccionada }: FilterProps) {
  const categorias = ["todos", "buzos", "camperas", "remeras"]

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex flex-wrap justify-center gap-2 relative py-4">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setCategoriaSeleccionada(categoria)}
            className="relative flex items-center justify-center px-0 py-0 rounded-md text-sm font-medium"
          >
            {categoriaSeleccionada === categoria && (
              <motion.div
                layoutId="activePill"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute inset-0 bg-blue-400 rounded-md shadow-[3px_3px_0px_rgba(0,0,0,0.8)]"
              />
            )}
            <span
              className={`relative z-10 px-4 py-3 capitalize transition-colors ${
                categoriaSeleccionada === categoria
                  ? "text-white"
                  : "text-gray-700 hover:bg-gray-100 rounded-md"
              }`}
            >
              {categoria}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
