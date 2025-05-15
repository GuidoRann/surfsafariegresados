import type React from "react"

import { FaWhatsapp } from "react-icons/fa";

import { useState } from "react"
import { Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import RetroButton from '../components/RetroButton';
import Navbar from '../components/Navbar';

export default function ContactUs() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setSelectedImage(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el email con la imagen adjunta
    console.log("Formulario enviado:", formData, "Imagen:", selectedImage)
    alert("Mensaje enviado correctamente")
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setSelectedImage(null)
  }

  const openWhatsApp = () => {
    // Reemplaza este número con tu número de WhatsApp real
    const phoneNumber = "1234567890"
    const message = "Hola, me gustaría obtener más información."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="bg-white">
      <div className="pb-20">
        <Navbar />
      </div>
      <div className="container mx-auto py-12 px-4 relative font-poppins">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-400">Contáctanos</h1>
        <p className="text-center text-lg mb-10">Estamos aquí para ayudarte. ¡Escríbenos!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Formulario de contacto por email */}
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold mb-6 text-blue-500">Envíanos un mensaje</h2>

            <form onSubmit={ handleSubmit } className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  Nombre
                </Label>
                <Input
                  id="name"
                  name="user_name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre"
                  required
                  className="rounded-full border-gray-300 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Correo electrónico
                </Label>
                <Input
                  id="email"
                  name="user_email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="tu@email.com"
                  required
                  className="rounded-full border-gray-300 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="¿En qué podemos ayudarte?"
                  className="min-h-[120px] rounded-xl border-gray-300 focus:border-blue-400 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <label htmlFor="image" className="text-blue-500 cursor-pointer hover:text-blue-600 hover:underline">
                    Adjuntar una imagen (opcional)
                  </label>
                  <Input id="image" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </div>

                {selectedImage && (
                  <div className="mt-4 relative">
                    <div className="relative h-40 w-full">
                      <img
                        src={selectedImage || "/placeholder.svg"}
                        alt="Vista previa"
                        className="object-contain rounded-md"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-6 w-6 rounded-full"
                      onClick={removeImage}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              <button type="submit" className="w-full">
                <RetroButton bgColor="blue" className="w-full flex justify-center items-center" >
                  <Send className="mr-2 h-4 w-4" /> Enviar mensaje
                </RetroButton>
              </button>
            </form>
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
    </div>
  )
}
