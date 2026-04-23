import { Animate } from "@/components/ui/Animate";

const steps = [
  {
    number: "01",
    title: "Desmontaje de Bomba",
    description:
      "Se desconecta mecánicamente la transmisión, se desacopla el cabezal y se extraen todas las columnas hasta llegar a la bomba.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    ),
    color: "blue",
  },
  {
    number: "02",
    title: "Video de Diagnóstico",
    description:
      "Inspección visual con cámara de alta resolución para identificar incrustaciones, roturas y el estado estructural del pozo antes de iniciar el mantenimiento.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    color: "green",
  },
  {
    number: "03",
    title: "Mantenimiento Pistón-Compresor",
    description:
      "Con la grúa SEMCO S12000 se realiza el pistoneo tubo por tubo hasta el fondo del pozo, eliminando incrustaciones en filtros y recuperando la permeabilidad.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "blue",
  },
  {
    number: "04",
    title: "Tratamiento Químico",
    description:
      "Aplicación de productos químicos para desprender incrustaciones duras. Se agita desde el fondo con pistón y cepillo, se deja reposar y luego se desaloja el pozo.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "green",
  },
  {
    number: "05",
    title: "Video de Verificación",
    description:
      "Inspección final para verificar el verdadero estado estructural del pozo después del mantenimiento, con las incrustaciones removidas y visibilidad total.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "blue",
  },
  {
    number: "06",
    title: "Montaje y Puesta en Marcha",
    description:
      "Instalación de la bomba con su respectiva puesta en marcha y verificación del funcionamiento óptimo del sistema de bombeo.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
    color: "green",
  },
];

const colorClasses: Record<string, { icon: string; number: string; connector: string }> = {
  blue: {
    icon: "bg-blue-900 text-white",
    number: "text-blue-200",
    connector: "bg-blue-900",
  },
  green: {
    icon: "bg-green-600 text-white",
    number: "text-green-300",
    connector: "bg-green-600",
  },
};

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Animate animation="fade-up">
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 text-green-400 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Metodología de Trabajo
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Cómo Trabajamos
          </h2>
          <p className="text-blue-300 text-lg max-w-2xl mx-auto">
            Un proceso estandarizado de 6 pasos que garantiza resultados óptimos en cada
            intervención sobre sus pozos profundos.
          </p>
        </div>
        </Animate>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const c = colorClasses[step.color];
            return (
              <Animate key={step.number} animation="fade-up" delay={index * 100}>
              <div
                className="relative bg-blue-900/40 border border-blue-800/50 rounded-2xl p-7 hover:bg-blue-900/60 transition-colors duration-200 group"
              >
                {/* Step number */}
                <span className={`text-5xl font-black opacity-20 absolute top-4 right-6 ${c.number} select-none`}>
                  {step.number}
                </span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${c.icon} shadow-lg`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-lg mb-3 leading-tight">{step.title}</h3>
                <p className="text-blue-300 text-sm leading-relaxed">{step.description}</p>

                {/* Connector dot */}
                {index < steps.length - 1 && (
                  <div className={`hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 ${c.connector} opacity-50`} />
                )}
              </div>
              </Animate>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <Animate animation="zoom" delay={100}>
        <div className="mt-14 text-center">
          <p className="text-green-400 font-bold text-xl italic">
            "¡Su solución con experiencia y responsabilidad!"
          </p>
          <p className="text-blue-400 text-sm mt-2">SOLPOZ S.A.S. — Desde 2017</p>
        </div>
        </Animate>
      </div>
    </section>
  );
}
