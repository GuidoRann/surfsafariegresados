import { Button } from "@/components/ui/button"
import Navbar from '../components/Navbar';

export default function PromotionsSection() {

  return (
    <section className="bg-gradient-to-b from-background to-muted/20 font-poppins">
      <div className="pb-32">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="text-center py-16 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6 text-balance">
            Promociones Increíbles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubre nuestras mejores ofertas con descuentos exclusivos por tiempo limitado
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            Ver Todas las Promociones
          </Button>
        </div>
      </div>
    </section>
  )
}
