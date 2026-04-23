const equipment = [
  {
    name: "Control Box GA",
    tag: "Sistema de Control",
    tagColor: "bg-blue-100 text-blue-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description:
      "Unidad principal de monitorización y grabación de videos de observación y verificación en campo.",
    specs: [
      "LCD legible bajo luz solar directa",
      "GPS con superposición de texto (lat, long, altitud, velocidad)",
      "Puerto USB para control de cámara (series HD y Z)",
      "Joystick para zoom, pan e inclinación",
      "Medición de longitud y profundidad en tiempo real",
      "Monitor LIM de aislamiento de línea",
    ],
  },
  {
    name: "Cámara Inspecam R Dual",
    tag: "Inspección Visual",
    tagColor: "bg-green-100 text-green-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    description:
      "Cámara de doble visión con vista inferior y giratoria 360° para inspección detallada de la estructura del pozo.",
    specs: [
      "Sensor CCD Super HDA — 607,920 píxeles / 700 TVL",
      "Lente 3.6 mm (vista inferior + vista lateral)",
      "Ángulo de visión 90° en aire / 68° en agua",
      "Carcasa de acero inoxidable 316 — resistente hasta 50 bar",
      "LED de 4W para pozos de hasta 1,000 mm de diámetro",
      "Iluminación mínima de 0.1 lux",
    ],
  },
  {
    name: "SEMCO S12000 + Kaeser 290 CFM",
    tag: "Mantenimiento Pesado",
    tagColor: "bg-orange-100 text-orange-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description:
      "Máquina de mantenimiento pesado con sistema pistón-compresor simultáneo para limpieza profunda de pozos.",
    specs: [
      "Grúa SEMCO S12000 — extracción y descenso de columnas",
      "Compresor Kaeser 290 CFM — alta capacidad de aire",
      "Tubería de trabajo 3\" × 3.05 m",
      "Cepillos y pistones de caucho adaptables a cada diámetro",
      "Sistema pistón-compresor simultáneo",
      "Capacidad para pozos de gran profundidad y diámetro",
    ],
  },
];

import { Animate } from "@/components/ui/Animate";

export default function Technology() {
  return (
    <section id="tecnologia" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Animate animation="fade-up">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-50 text-green-700 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Tecnología & Equipos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-blue-950 mb-4">
            Maquinaria de Punta
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Contamos con equipos de última generación que garantizan diagnósticos precisos y
            mantenimientos efectivos en cada intervención.
          </p>
        </div>
        </Animate>

        {/* Equipment cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <Animate key={item.name} animation="zoom" delay={index * 130}>
            <div
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-blue-900/10 transition-shadow duration-300 flex flex-col"
            >
              {/* Card header */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full mb-3 ${item.tagColor}`}>
                  {item.tag}
                </span>
                <h3 className="text-white font-bold text-lg leading-tight">{item.name}</h3>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-2.5 flex-1">
                  {item.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-700 text-sm">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </Animate>
          ))}
        </div>

        {/* Bottom note */}
        <Animate animation="fade-up" delay={100}>
        <div className="mt-14 bg-blue-900 rounded-2xl p-8 text-center text-white">
          <p className="text-blue-200 text-sm mb-1 font-medium uppercase tracking-wider">
            Cable de inspección
          </p>
          <h3 className="text-xl font-bold mb-2">Cable MIS 500 / MIS 1000</h3>
          <p className="text-blue-300 max-w-xl mx-auto text-sm">
            Cable sujetador de cámara de inspección con chaqueta de poliuretano reforzada con
            aramida — resistencia y flexibilidad para las mayores profundidades.
          </p>
        </div>
        </Animate>
      </div>
    </section>
  );
}
