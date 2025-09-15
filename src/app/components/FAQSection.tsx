import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion"

export default function FAQSection() {
  return (
    <div className=" py-20 px-6 md:px-20 bg-slate-700 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-poppins font-bold mb-4">Preguntas frecuentes</h2>
        <div className='w-20 h-1 bg-slate-400 mx-auto mb-6'></div>
      </div>

      <div className="mt-10">

        <Accordion type="single" collapsible className="border rounded-md">
          <AccordionItem value="item-1" className="border-b">
            <AccordionTrigger className="px-6 py-4 hover:bg-slate-600 text-lg">
              ¿Puedo comprarle a usted como particular?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-2 text-base bg-slate-600">
              Solo realizamos envíos a Clientes con domicilio social (dirección de facturación) en [país] y que pueden
              ingresar una dirección de envío dentro de [país].
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b">
            <AccordionTrigger className="px-6 py-4 hover:bg-slate-600 text-lg">
              ¿Puedo pedir buzos en colores personalizados?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-2 text-base bg-slate-600">
              Sí, ofrecemos opciones de personalización para nuestros buzos. Puede elegir entre nuestra gama de
              colores disponibles o solicitar un color específico con un costo adicional dependiendo del modelo.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="px-6 py-4 hover:bg-slate-600 text-lg">
              ¿Puedo cambiar mi pedido?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-2 text-base bg-slate-600">
              Los cambios en los pedidos son posibles dentro de las primeras 24 horas después de realizar la orden.
              Después de este período, la posibilidad de modificación dependerá del estado de procesamiento de su
              pedido.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
