import Image from "next/image";
import { Animate } from "@/components/ui/Animate";

const heroImages = [
  { src: "/img/solp1.png", label: "Instalación de Bombas" },
  { src: "/img/solp2.png", label: "Inspección con Cámara" },
  { src: "/img/solp3.png", label: "Perforación de Pozos" },
  { src: "/img/solp4.png", label: "Mantenimiento Técnico" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden pt-16"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[-5%] w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-[-5%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left column: text ── */}
        <div>
          {/* Badge */}
          <Animate animation="fade-down" delay={0}>
            <div className="inline-flex items-center gap-2 bg-green-600/15 text-green-400 border border-green-500/30 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Fundada en 2017 · Cali, Valle del Cauca
            </div>
          </Animate>

          {/* Heading */}
          <Animate animation="fade-up" delay={100}>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              Soluciones en
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">
                Pozos Profundos
              </span>
            </h1>
          </Animate>

          {/* Subtitle */}
          <Animate animation="fade-up" delay={200}>
            <p className="text-lg text-blue-200 mb-10 leading-relaxed max-w-xl">
              Construcción, mantenimiento y pruebas de bombeo con tecnología de punta al servicio
              del sector agrícola, industrial, pecuario y comercial.
            </p>
          </Animate>

          {/* CTAs */}
          <Animate animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-green-900/40"
              >
                Ver Servicios
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-8 py-4 rounded-xl font-bold text-base backdrop-blur-sm transition-all duration-200 hover:-translate-y-1"
              >
                Contáctenos
              </a>
            </div>
          </Animate>

          {/* Stats */}
          <Animate animation="fade-up" delay={450}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-lg">
              {[
                { number: "17+", label: "Servicios" },
                { number: "2017", label: "Fundación" },
                { number: "360°", label: "Inspección" },
                { number: "5", label: "Sectores" },
              ].map((stat) => (
                <div key={stat.label} className="bg-blue-800/40 backdrop-blur-sm py-5 px-3 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-green-400 mb-0.5">{stat.number}</div>
                  <div className="text-blue-300 text-xs leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </Animate>
        </div>

        {/* ── Right column: image mosaic ── */}
        <Animate animation="fade-left" delay={200}>
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {heroImages.map((img, i) => (
              <div
                key={img.src}
                className={`group relative overflow-hidden rounded-2xl shadow-2xl shadow-blue-950/60 border border-white/10 ${
                  i === 0 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-green-600/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <span className="w-1 h-1 bg-green-300 rounded-full" />
                      {img.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Decorative badge below photos */}
          <div className="mt-4 flex items-center gap-2 justify-end">
            <span className="text-blue-400 text-xs">Trabajos reales de nuestro equipo</span>
            <div className="w-6 h-px bg-green-400/50" />
            <span className="text-green-400 text-xs font-semibold">SOLPOZ S.A.S.</span>
          </div>
        </Animate>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-blue-400 gap-1">
        <span className="text-xs tracking-widest uppercase">Explorar</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
