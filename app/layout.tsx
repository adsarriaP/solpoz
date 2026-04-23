import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import LoadingScreen from "@/components/ui/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://www.solpoz.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "SOLPOZ S.A.S. — Pozos Profundos en Cali, Colombia",
    template: "%s | SOLPOZ S.A.S.",
  },
  description:
    "SOLPOZ S.A.S. — Empresa colombiana especializada en construcción, mantenimiento, pruebas de bombeo y rehabilitación de pozos profundos. Equipos eléctricos, sistemas de riego y tratamiento de agua. Cali, Valle del Cauca. Fundada en 2017.",
  keywords: [
    "pozos profundos Colombia",
    "construcción pozos Cali",
    "mantenimiento pozos Valle del Cauca",
    "pruebas de bombeo",
    "rehabilitación pozos",
    "equipos eléctricos pozos",
    "sistemas de riego",
    "tratamiento agua Colombia",
    "perforación pozos",
    "inspección pozos cámara",
    "SOLPOZ",
    "pozos artesianos Colombia",
    "bombas sumergibles",
    "hidrogeología Colombia",
    "agua subterránea Cali",
  ],
  authors: [{ name: "SOLPOZ S.A.S.", url: BASE_URL }],
  creator: "SOLPOZ S.A.S.",
  publisher: "SOLPOZ S.A.S.",
  category: "Ingeniería y Construcción",

  alternates: {
    canonical: BASE_URL,
    languages: { "es-CO": BASE_URL },
  },

  openGraph: {
    type: "website",
    locale: "es_CO",
    url: BASE_URL,
    siteName: "SOLPOZ S.A.S.",
    title: "SOLPOZ S.A.S. — Pozos Profundos en Cali, Colombia",
    description:
      "Construcción, mantenimiento y pruebas de bombeo de pozos profundos. Tecnología de punta para el sector agrícola, industrial, pecuario y comercial. Cali, Colombia.",
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "SOLPOZ S.A.S. — Soluciones en Pozos Profundos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SOLPOZ S.A.S. — Pozos Profundos en Cali, Colombia",
    description:
      "Construcción, mantenimiento y pruebas de bombeo de pozos profundos en Colombia. Fundada en 2017.",
    images: ["/img/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    // google: "TU_CODIGO_GOOGLE_SEARCH_CONSOLE",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex flex-col min-h-screen">
        <LoadingScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
