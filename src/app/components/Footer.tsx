"use client";

import { Mail, Phone, MapPin} from "lucide-react";
import { FaTiktok, FaInstagram, FaWhatsapp  } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer id='contact' className='bg-amber-50 text-brand-white pt-16 pb-8 overflow-hidden font-poppins'>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
            <div className='bg-amber-50/20 p-6 rounded-lg'>
              <h3 className='text-xl font-bold mb-4 text-brand-turquoise'>Egresados Surfsafari</h3>
              <p className='text-brand-white/80 mb-4'>
                Creamos buzos de egresados con diseños únicos y personalizados para que tu promoción sea inolvidable.
                ¡Los más cool del mercado! 😎
              </p>
              <div className='flex space-x-4'>
                <a
                  href='https://www.instagram.com/surfsafariegresados/'
                  target='_blank'
                  className='text-brand-turquoise hover:text-brand-pink transition-all transform hover:scale-125'>
                  <FaInstagram className='w-6 h-6' />
                  <span className='sr-only'>Instagram</span>
                </a>
                <a
                  href='#'
                  className='text-brand-turquoise hover:text-brand-pink transition-al transform hover:scale-125'>
                  <FaWhatsapp  className='w-6 h-6' />
                  <span className='sr-only'>WhatsApp</span>
                </a>
                <a
                  href='#'
                  className='text-brand-turquoise hover:text-brand-pink transition-all transform hover:scale-125'>
                  <FaTiktok className='w-6 h-6' />
                  <span className='sr-only'>TikTok</span>
                </a>
              </div>
            </div>

            <div className='bg-amber-100/20 p-6 rounded-lg'>
              <h3 className='text-xl font-bold mb-4 text-brand-turquoise'>Enlaces Rápidos</h3>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='/about'
                    className='text-brand-white/80 hover:text-brand-pink transition-colors flex items-center'>
                    <span className='mr-2'>👉</span> Quiénes Somos
                  </a>
                </li>
                <li>
                  <a
                    href='/products'
                    className='text-brand-white/80 hover:text-brand-pink transition-colors flex items-center'>
                    <span className='mr-2'>👕</span> Productos
                  </a>
                </li>
                <li>
                  <a
                    href='#how-to-buy'
                    className='text-brand-white/80 hover:text-brand-pink transition-colors flex items-center'>
                    <span className='mr-2'>🛒</span> Cómo Comprar
                  </a>
                </li>
              </ul>
            </div>

            <div className='bg-amber-100/20 p-6 rounded-lg'>
              <h3 className='text-xl font-bold mb-4 text-brand-turquoise'>Contacto</h3>
              <ul className='space-y-3'>
                <li className='flex items-start'>
                  <Phone className='w-5 h-5 text-brand-pink mr-2 mt-0.5' />
                  <span className='text-brand-white/80'>+54 11 1234-5678</span>
                </li>
                <li className='flex items-start'>
                  <Mail className='w-5 h-5 text-brand-pink mr-2 mt-0.5' />
                  <span className='text-brand-white/80'>info@egresadossurfsafari.com</span>
                </li>
                <li className='flex items-start'>
                  <MapPin className='w-5 h-5 text-brand-pink mr-2 mt-0.5' />
                  <span className='text-brand-white/80'>Av. Siempre Viva 742, Springfield</span>
                </li>
              </ul>
            </div>

            <div className='bg-amber-100/20 p-6 rounded-lg'>
              <h3 className='text-xl font-bold mb-4 text-brand-turquoise'>Horario de Atención</h3>
              <ul className='space-y-2 text-brand-white/80'>
                <li className='flex items-center'>
                  <span className='text-brand-orange mr-2'>🕙</span> Lunes a Viernes: 9:00 - 18:00
                </li>
                <li className='flex items-center'>
                  <span className='text-brand-orange mr-2'>🕙</span> Sábados: 10:00 - 14:00
                </li>
                <li className='flex items-center'>
                  <span className='text-brand-orange mr-2'>🕙</span> Domingos: Cerrado
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-brand-turquoise/30 pt-8 mt-8 text-center text-brand-white/60 text-sm'>
            <p>© {currentYear} Egresados Surfsafari. Todos los derechos reservados.</p>
            <div className='mt-2 space-x-4'>
              <p className="flex items-center justify-center gap-1">
                  &lt;&gt; con ❤️ por
                  <a target="_blank" href="https://guidocode.vercel.app/" className="text-purple-400 font-medium">GuidoCode</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
