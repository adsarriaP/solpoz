"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 1.8s, remove from DOM after animation ends
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    const hideTimer = setTimeout(() => setVisible(false), 2500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at 60% 40%, #1e3a5f 0%, #0f2444 40%, #071a33 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-green-600/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-800/20 blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-8">
        {/* Logo */}
        <div
          className="animate-[fadeInDown_0.7s_ease-out_forwards]"
          style={{ animation: "fadeInDown 0.7s ease-out forwards" }}
        >
          <Image
            src="/img/logosolp.png"
            alt="SOLPOZ S.A.S."
            width={280}
            height={100}
            className="w-56 sm:w-72 h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Tagline */}
        <p
          className="text-blue-300 text-sm sm:text-base font-medium tracking-wide text-center opacity-0"
          style={{ animation: "fadeIn 0.6s ease-out 0.5s forwards" }}
        >
          Su solución con experiencia y responsabilidad
        </p>

        {/* Loading bar */}
        <div className="w-48 sm:w-64 h-1 bg-blue-800/60 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
            style={{ animation: "loadBar 1.6s ease-in-out forwards" }}
          />
        </div>

        {/* Sector badges */}
        <div
          className="flex flex-wrap justify-center gap-2 opacity-0"
          style={{ animation: "fadeIn 0.6s ease-out 0.8s forwards" }}
        >
          {["Agrícola", "Industrial", "Pecuario", "Comercial", "Residencial"].map((s) => (
            <span
              key={s}
              className="text-[11px] font-semibold text-blue-300 border border-blue-700/60 px-3 py-1 rounded-full bg-blue-900/40 backdrop-blur-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes loadBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
