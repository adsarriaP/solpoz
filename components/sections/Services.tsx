const serviceGroups = [
  {
    id: "pozos",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "blue",
    title: "Pozos Profundos",
    description: "Servicios integrales de construcción, mantenimiento y rehabilitación de pozos.",
    services: [
      "Desmontaje y/o Montaje de bombas turbina – sumergibles",
      "Video Diagnóstico con cámara de alta resolución",
      "Mantenimiento con sistemas de pistón y compresor simultáneo",
      "Revisión y reparación de transmisión de pozos",
      "Pruebas de bombeo",
      "Construcción de pozos",
      "Extracción – pesca de elementos que obstruyen el pozo",
      "Sellamiento de pozos según la entidad Corporativa de la zona",
      "Diseño e instalación de camisas para pozos",
    ],
  },
  {
    id: "electrico",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "green",
    title: "Equipos Eléctricos",
    description: "Suministro, instalación y mantenimiento de equipos de bombeo e instrumentación.",
    services: [
      "Revisión y reparación de bombas tipo turbina",
      "Cambios de lubricación de bombas de agua a aceite",
      "Suministro de tableros eléctricos RETIE (variadores, arrancadores suave, estrella-triángulo)",
      "Servicio técnico-eléctrico: revisión, instalación y puesta en marcha",
      "Suministro de instrumentación (medidores de flujo, nivel, telemetría)",
      "Venta de bombas turbina de eje vertical y/o motor sumergible",
    ],
  },
  {
    id: "riego",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "teal",
    title: "Riego y Tratamiento",
    description: "Diseño e implementación de sistemas de riego agrícola y tratamiento de pozos.",
    services: [
      "Diseño e instalación de sistemas de riego y/o drenaje",
      "Tratamiento químico de pozos",
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    badge: "bg-blue-600",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-100",
    badge: "bg-green-600",
  },
  teal: {
    bg: "bg-teal-50",
    text: "text-teal-600",
    border: "border-teal-100",
    badge: "bg-teal-600",
  },
};

import { Animate } from "@/components/ui/Animate";

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Animate animation="fade-up">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-50 text-blue-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Portafolio de Servicios
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-blue-950 mb-4">
            17 Servicios Especializados
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Soluciones completas para el ciclo de vida de sus pozos y sistemas de bombeo.
          </p>
        </div>
        </Animate>

        {/* Service groups */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceGroups.map((group, index) => {
            const colors = colorMap[group.color];
            return (
              <Animate key={group.id} animation="fade-up" delay={index * 120}>
              <div
                className={`rounded-2xl border ${colors.border} ${colors.bg} p-8 flex flex-col`}
              >
                {/* Icon + title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 ${colors.badge} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-950">{group.title}</h3>
                    <span className={`text-xs font-semibold ${colors.text}`}>
                      {group.services.length} servicios
                    </span>
                  </div>
                </div>

                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {group.description}
                </p>

                {/* Services list */}
                <ul className="space-y-2.5 flex-1">
                  {group.services.map((service) => (
                    <li key={service} className="flex items-start gap-2.5">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.text}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-slate-700 text-sm leading-snug">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </Animate>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Animate animation="fade-up" delay={100}>
        <div className="mt-14 text-center">
          <p className="text-slate-500 mb-5">
            ¿No encuentra el servicio que necesita? Consúltenos.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md"
          >
            Consultar un servicio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        </Animate>
      </div>
    </section>
  );
}
