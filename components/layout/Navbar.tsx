"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-950 shadow-xl shadow-blue-950/40" : "bg-blue-950/95 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center shadow-md group-hover:bg-green-500 transition-colors">
               <Image
              src="/img/logosolp.png"
              alt="SOLPOZ S.A.S."
              width={140}
              height={140}
              className="h-10 w-auto object-contain"
              priority
            />  
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-extrabold text-lg tracking-widest">SOLPOZ</span>
              <span className="text-green-400 text-[10px] font-medium tracking-wide">S.A.S.</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-blue-200 hover:text-green-400 font-medium transition-colors duration-200 text-sm relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-green-900/30 hover:-translate-y-0.5"
            >
              Solicitar Servicio
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-blue-800 transition-colors"
            aria-label="Menú de navegación"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-blue-800/60 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center text-blue-100 hover:text-green-400 hover:bg-blue-800/50 py-3 px-3 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                Solicitar Servicio
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
