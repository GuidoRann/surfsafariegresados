import {ShoppingCart, CreditCard, Truck, MessageSquare} from "lucide-react";

export default function HowToBuy() {
  const steps = [
    {
      icon: <ShoppingCart className='w-10 h-10 text-[#fefefe]' />,
      title: "Elige tu Modelo",
      description: "Navega por nuestra colección y selecciona el modelo que más te guste para tu promoción.",
      bgColor: "bg-red-300",
    },
    {
      icon: <MessageSquare className='w-10 h-10 text-[#fefefe]' />,
      title: "Personaliza tu Diseño",
      description: "Contáctanos para discutir los detalles: colores, nombres, números y diseños personalizados.",
      bgColor: "bg-green-300",
    },
    {
      icon: <CreditCard className='w-10 h-10 text-[#fefefe]' />,
      title: "Realiza el Pago",
      description:
        "Elige entre nuestras opciones de pago: transferencia bancaria, efectivo o tarjetas de crédito/débito.",
      bgColor: "bg-blue-300",
    },
    {
      icon: <Truck className='w-10 h-10 text-[#fefefe]' />,
      title: "Recibe tu Pedido",
      description: "Entregamos en tu escuela o domicilio. ¡Listo para usar en tus eventos de egresados!",
      bgColor: "bg-yellow-300",
    },
  ];

  return (
    <div className='w-full font-poppins'>
      <section
        id='how-to-buy'
        className='py-20 bg-yellow-50 transition-colors duration-300 relative overflow-hidden'>
        {/* Fun background elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-full h-20 bg-[url('/pattern.png')] opacity-10"></div>

        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-poppins md:text-4xl font-bold text-blue-500 mb-4'>
              ¿Cómo Comprar?
            </h2>
            <div className='w-20 h-1 bg-blue-400 mx-auto mb-6'></div>
            <p className='text-lg text-brand-blue max-w-2xl mx-auto'>
              ¡Hacer tu pedido es súper fácil! Sigue estos pasos y pronto tendrás el buzo más cool para tu graduación.
            </p>
          </div>

          <div className='max-w-5xl mx-auto'>
            {/* Desktop view with zigzag layout */}
            <div className='hidden md:block relative'>
              {/* Connecting zigzag line */}
              <svg
                className='absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-20'
                viewBox='0 0 100 800'
                preserveAspectRatio='none'>
                <path
                  d='M50,0 L25,200 L75,400 L25,600 L50,800'
                  stroke='#00DED1'
                  strokeWidth='5'
                  fill='none'
                  strokeDasharray='10,10'
                  className=''
                />
              </svg>

              <div className='space-y-32 relative'>
                {steps.map((step, index) => (
                  <div key={index} className='flex items-center'>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-16 text-right" : "order-2 pl-16"}`}>
                      <h3 className='text-2xl font-bold text-blue-500 mb-2'>
                        {step.title}
                      </h3>
                      <p className='text-brand-blue'>{step.description}</p>
                    </div>

                    <div className={`w-1/2 flex ${index % 2 === 0 ? "justify-start order-2" : "justify-end"}`}>
                      <div
                        className={`${step.bgColor} mx-5 w-20 h-20 rounded-full flex items-center justify-center shadow-lg z-10 transform hover:scale-110 transition-transform`}>
                        {step.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile view with cards */}
            <div className='md:hidden space-y-6'>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`${step.bgColor} p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform`}>
                  <div className='flex items-center mb-4'>
                    <div className='bg-white/30 p-3 rounded-full mr-4'>{step.icon}</div>
                    <h3 className={`text-xl font-bold text-white`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white">{step.description}</p>
                </div>
              ))}
            </div>

            <div className='mt-16 text-center'>
              <a
                href='/contact'
                className='inline-flex items-center px-8 py-4 bg-blue-400 hover:bg-blue-300 transition-all text-white font-bold text-lg rounded-full shadow-lg transform hover:rotate-2 hover:scale-105'>
                ¡Quiero mi buzo ya! 🚀
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
