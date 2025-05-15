import { FaFacebook, FaInstagram } from "react-icons/fa";

import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function AboutUs() {
  return (
    <div className="h-screen w-screen">
      <div>
        <Navbar />
      </div>
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-12">
      <div className="container mx-auto px-4 py-12">
        <section className="rounded-3xl bg-white p-6 shadow-xl md:p-10 lg:p-12">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* Imagen */}
            <div className="relative flex-1 overflow-hidden rounded-2xl">
              <div className="aspect-square w-full overflow-hidden rounded-2xl bg-purple-100 lg:aspect-auto lg:h-[600px]">
                <img
                  src="/About us.jpg"
                  alt="Nuestro equipo"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-12 -right-14 h-32 w-32 rounded-full bg-pink-400/50 md:h-40 md:w-40"></div>
              <div className="absolute -left-10 -top-12 h-24 w-24 rounded-full bg-purple-400/30 md:h-36 md:w-36"></div>
            </div>

            {/* Presentación */}
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="mb-2 inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-700">
                  ¿Quiénes somos?
                </h2>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                  No somos como los <span className="text-purple-600">adultos aburridos</span> que conoces
                </h1>
              </div>

              <p className="text-lg text-gray-600">
                Nacimos porque estábamos hartos de que nadie entendiera realmente lo que los jóvenes como tú necesitan.
                Somos un equipo de personas que aún recuerdan lo que es tener 17 y enfrentarse a un mundo que a veces
                parece diseñado por y para gente mayor.
              </p>

              <div className="border-l-4 border-purple-600 pl-4 italic">
                "Diseñamos para que cada prenda grite quién sos y te recuerde que este momento es solo el comienzo."
              </div>

              <div className="space-y-4 text-gray-600">
                <p className="flex items-start gap-2">
                  <span className="mt-1 text-purple-500">✦</span>
                  <span>
                    Creamos productos y experiencias que <strong>realmente importan</strong> en tu vida diaria
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-1 text-purple-500">✦</span>
                  <span>
                    Nuestro equipo está formado por personas que <strong>entienden tu mundo</strong>, tus preocupaciones
                    y tus sueños
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-1 text-purple-500">✦</span>
                  <span>
                    Trabajamos para que tengas las <strong>herramientas que necesitas</strong> para conquistar tu futuro
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <Link to="https://www.instagram.com/surfsafariegresados/" target="_blank" className="text-gray-500 transition-colors hover:text-[#EE2A7B]">
                  <FaInstagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link to="#" className="text-gray-500 transition-colors hover:text-[#4267B2]">
                  <FaFacebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    </div>
  )
}
