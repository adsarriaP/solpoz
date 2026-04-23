import { Animate } from "@/components/ui/Animate";
import Image from "next/image";

const contactCards = [
  {
    title: "Comercial",
    email: "comercial.solpoz@gmail.com",
    description: "Consultas comerciales, alianzas y propuestas de servicio.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Ventas",
    email: "ventas.solpoz@gmail.com",
    description: "Cotizaciones de equipos, bombas e instrumentación.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "General",
    email: "solpozsas@gmail.com",
    description: "Información general, soporte y consultas administrativas.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Animate animation="fade-up">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-50 text-green-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Contáctenos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-blue-950 mb-4">
            Estamos Listos para Ayudarle
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Contáctenos por el canal más conveniente. Nuestro equipo técnico y comercial
            le responderá a la brevedad.
          </p>
        </div>
        </Animate>

        {/* Map */}
        <Animate animation="fade-up" delay={100}>
        <div className="mb-12 rounded-2xl overflow-hidden border border-slate-200 shadow-md h-72 sm:h-96">
          <iframe
            src="https://maps.google.com/maps?q=Calle+11+No.+100-121+Ciudad+Jardin+Cali+Valle+del+Cauca+Colombia&output=embed&z=16"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación SOLPOZ S.A.S. — Cali, Colombia"
          />
        </div>
        </Animate>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — contact cards */}
          <Animate animation="fade-right" delay={0}>
          <div className="space-y-4">
            {contactCards.map((card) => (
              <a
                key={card.email}
                href={`mailto:${card.email}`}
                className="flex items-center gap-5 p-5 rounded-2xl border border-slate-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-blue-900 group-hover:bg-green-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-colors duration-200">
                  {card.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">
                    {card.title}
                  </p>
                  <p className="text-blue-900 font-bold text-base group-hover:text-green-700 transition-colors truncate">
                    {card.email}
                  </p>
                  <p className="text-slate-500 text-sm mt-0.5">{card.description}</p>
                </div>
                <svg
                  className="w-5 h-5 text-slate-300 group-hover:text-green-500 flex-shrink-0 ml-auto transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
          </Animate>

          {/* Right — info card */}
          <Animate animation="fade-left" delay={150}>
          <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl p-10 text-white">
            

            <div className="space-y-6">
              <div>
                <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  Ubicación
                </p>
                <p className="text-white font-medium">
                  Calle 11 No. 100-121 Oficina 601
                  <br />
                  Barrio Ciudad Jardín
                  <br />
                  <span className="text-blue-300">Cali, Valle del Cauca — Colombia</span>
                </p>
                <a
                  href="https://maps.app.goo.gl/dLiwUXJtN1Knd4R79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-green-400 hover:text-green-300 text-sm font-semibold transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ver en Google Maps
                </a>
              </div>

              <div>
                <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  Cámara de Comercio
                </p>
                <p className="text-blue-200 text-sm">
                  Inscrita en la Cámara de Comercio de Cali
                  <br />
                  el 23 de junio de 2017
                </p>
              </div>

              <div>
                <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  Sectores que Atendemos
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Agrícola", "Industrial", "Pecuario", "Comercial", "Residencial"].map((sector) => (
                    <span
                      key={sector}
                      className="bg-white/10 text-blue-200 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-blue-800/60">
              <p className="text-green-400 font-semibold italic text-sm text-center">
                "Su solución con experiencia y responsabilidad"
              </p>
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
