import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Technology from "@/components/sections/Technology";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.solpoz.com/#business",
      name: "SOLPOZ S.A.S.",
      alternateName: "SOLPOZ",
      description:
        "Empresa colombiana especializada en construcción, mantenimiento, pruebas de bombeo y rehabilitación de pozos profundos. Equipos eléctricos, sistemas de riego y tratamiento de agua.",
      url: "https://www.solpoz.com",
      telephone: "+573184093735",
      email: "comercial.solpoz@gmail.com",
      foundingDate: "2017-06-23",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle 11 No. 100-121 Oficina 601",
        addressLocality: "Cali",
        addressRegion: "Valle del Cauca",
        addressCountry: "CO",
        postalCode: "760046",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 3.3950,
        longitude: -76.5432,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      sameAs: [],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Pozos Profundos",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construcción de Pozos Profundos" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mantenimiento de Pozos" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pruebas de Bombeo" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rehabilitación de Pozos" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inspección con Cámara 360°" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Equipos Eléctricos para Pozos" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sistemas de Riego" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tratamiento de Agua" } },
        ],
      },
      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },
      knowsAbout: [
        "Pozos Profundos",
        "Hidrogeología",
        "Bombas Sumergibles",
        "Sistemas de Riego",
        "Tratamiento de Agua",
        "Equipos Eléctricos para Pozos",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.solpoz.com/#website",
      url: "https://www.solpoz.com",
      name: "SOLPOZ S.A.S.",
      description: "Soluciones en Pozos Profundos — Cali, Colombia",
      inLanguage: "es-CO",
      publisher: { "@id": "https://www.solpoz.com/#business" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <Technology />
      <Process />
      <Contact />
    </>
  );
}
