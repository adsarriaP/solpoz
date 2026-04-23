import Image from "next/image";

const footerLinks = [
  {
    title: "Servicios",
    links: [
      { label: "Pozos Profundos", href: "#servicios" },
      { label: "Mantenimiento", href: "#servicios" },
      { label: "Equipos Eléctricos", href: "#servicios" },
      { label: "Sistemas de Riego", href: "#servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "#inicio" },
      { label: "Tecnología", href: "#tecnologia" },
      { label: "Proceso", href: "#proceso" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
];

const contactInfo = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    text: "comercial.solpoz@gmail.com",
    href: "mailto:comercial.solpoz@gmail.com",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    text: "ventas.solpoz@gmail.com",
    href: "mailto:ventas.solpoz@gmail.com",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: "Calle 11 No. 100-121 Of. 601, Ciudad Jardín, Cali",
    href: "https://maps.google.com/?q=Calle+11+100-121+Cali+Colombia",
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      {/* CTA Strip */}
      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-lg text-center sm:text-left">
            ¿Necesita un servicio especializado?
          </p>
          <a
            href="mailto:comercial.solpoz@gmail.com"
            className="bg-white text-green-700 hover:bg-green-50 font-bold px-6 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap"
          >
            Solicitar Cotización
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/img/logosolp.png"
                alt="SOLPOZ S.A.S."
                width={260}
                height={260}
                className="h-24 w-auto object-contain"
              />
            </div>
            <p className="text-blue-300 text-sm leading-relaxed max-w-xs mb-6">
              Compañía colombiana especializada en construcción, mantenimiento y pruebas de pozos
              profundos. Fundada en 2017 con sede en Cali, Valle del Cauca.
            </p>
            <p className="text-green-400 font-semibold text-sm italic">
              "Su solución con experiencia y responsabilidad"
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-blue-300 hover:text-green-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-10 pt-10 border-t border-blue-800/60">
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8">
            {contactInfo.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="flex items-center gap-2 text-blue-300 hover:text-green-400 text-sm transition-colors duration-200"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="text-green-500 flex-shrink-0">{item.icon}</span>
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-400">
          <span>© {new Date().getFullYear()} SOLPOZ S.A.S. Todos los derechos reservados.</span>
          <span>Cali, Valle del Cauca · Colombia</span>
        </div>
      </div>
    </footer>
  );
}
