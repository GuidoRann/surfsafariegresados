import { motion } from "framer-motion"

interface FilterProps {
  categoriaSeleccionada: string
  setCategoriaSeleccionada: (categoria: string) => void
}

export function Filter({ categoriaSeleccionada, setCategoriaSeleccionada }: FilterProps) {
  const categorias = ["todos", "buzos", "camperas", "remeras"]

  return (
    <div className="sticky top-0 z-10 bg-white shadow-md rounded-lg p-4">
      <div className="flex flex-wrap justify-center gap-2">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setCategoriaSeleccionada( categoria )}
            className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            { categoriaSeleccionada === categoria && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-blue-400 text-black rounded-md 
                  shadow-[3px_3px_0px_rgba(0,0,0,0.8)] translate-x-[-1px] translate-y-[-1px] 
                  hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] 
                  active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_rgba(0,0,0,0.8)]l"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span
              className={`relative z-10 capitalize ${
                categoriaSeleccionada === categoria ? "text-white" : "text-gray-700"
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
