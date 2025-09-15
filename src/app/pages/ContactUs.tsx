import { FaWhatsapp } from "react-icons/fa";
import { Card, CardContent } from "@/app/components/ui/card"
import RetroButton from '../components/RetroButton';
import Navbar from '../components/Navbar';

export default function ContactUs() {
  const openWhatsApp = () => {
    // Reemplaza este número con tu número de WhatsApp real
    const phoneNumber = "1234567890"
    const message = "Hola, me gustaría obtener más información."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
      <main className="container mx-auto px-4 relative font-poppins flex items-center h-screen">
        <div>
          <Navbar />
        </div>
        <div className="h-full flex flex-col items-center justify-center pt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-400">Contáctanos</h1>
          <p className="text-center text-lg mb-10">Estamos aquí para ayudarte. ¡Escríbenos!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Formulario de contacto por email */}

            <div> 
              <h1>Aqui va una imagen de representacion de llamada por whatsapp</h1>
            </div>

            {/* Contacto por WhatsApp */}
            <div>
              <Card className="h-full bg-gradient-to-br from-green-50 to-green-100 border-green-200 rounded-xl shadow-xl">
                <CardContent className="flex flex-col items-center justify-center h-full p-8">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <FaWhatsapp className="h-12 w-12 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-center mb-2 text-green-600">Contáctanos por WhatsApp</h2>
                    <p className="text-center text-muted-foreground mb-6">
                      Respuesta rápida y directa a través de WhatsApp. Estamos disponibles para atenderte.
                    </p>
                  </div>

                  <div className="space-y-4 w-full">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2 text-green-600">Horario de atención</h3>
                      <p className="text-sm text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                      <p className="text-sm text-muted-foreground">Sábados: 9:00 - 13:00</p>
                    </div>

                    <RetroButton
                      onClick={ openWhatsApp }
                      className="w-full bg-green-400 hover:bg-green-500 "
                    >
                      Chatear por WhatsApp
                    </RetroButton>

                    <p className="text-xs text-center text-muted-foreground">
                      Te responderemos lo más pronto posible durante nuestro horario de atención.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
  )
}
