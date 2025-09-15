import { Building2, Zap, Globe, Rocket, Shield, Star, Heart, Crown } from "lucide-react"

const sponsors = [
  { name: "TechCorp Solutions", icon: Building2 },
  { name: "Lightning Digital", icon: Zap },
  { name: "Global Ventures", icon: Globe },
  { name: "Rocket Labs", icon: Rocket },
  { name: "SecureShield", icon: Shield },
  { name: "StarTech Industries", icon: Star },
  { name: "HeartBeat Media", icon: Heart },
  { name: "Crown Enterprises", icon: Crown },
  { name: "InnovateCorp", icon: Building2 },
  { name: "FlashPoint Systems", icon: Zap },
  { name: "WorldWide Tech", icon: Globe },
  { name: "SpaceX Alternative", icon: Rocket },
]

export default function SponsorsSection() {
  return (
    <section className="py-16 bg-muted/30 rounded-lg flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Nuestros Clientes</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Estos son algunos de nuestros clientes que nos ayudan a mejorar nuestros servicios.
        </p>
      </div>

      <div className="relative overflow-hidden w-[70%]">
        {/* Gradientes para efecto de desvanecimiento */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-muted/30 to-transparent z-10" />

        {/* Contenedor del scroll infinito */}
        <div className="flex animate-scroll-infinite">
          {/* Primera fila de patrocinadores */}
          <div className="flex items-center gap-12 px-6">
            {sponsors.map(( sponsor, index ) => {
              const IconComponent = sponsor.icon
              return (
                <div
                  key={`first-${ index }`}
                  className="flex flex-col items-center gap-3 bg-card rounded-lg px-8 py-6 shadow-sm border whitespace-nowrap min-w-fit"
                >
                  <IconComponent className="w-12 h-12 text-foreground" />
                  <span className="text-foreground font-semibold text-xl text-center">{ sponsor.name }</span>
                </div>
              )
            })}
          </div>

          {/* Segunda fila de patrocinadores (duplicada para scroll infinito) */}
          <div className="flex items-center gap-12 px-6">
            {sponsors.map(( sponsor, index ) => {
              const IconComponent = sponsor.icon
              return (
                <div
                  key={`second-${ index }`}
                  className="flex flex-col items-center gap-3 bg-card rounded-lg px-8 py-6 shadow-sm border whitespace-nowrap min-w-fit"
                >
                  <IconComponent className="w-12 h-12 text-foreground" />
                  <span className="text-foreground font-semibold text-xl text-center">{ sponsor.name }</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
