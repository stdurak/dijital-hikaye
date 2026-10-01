import React from 'react';
import { bookData } from './data';

export default function App() {
  return (
    <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory bg-[#070b12] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* 1. GİRİŞ (HERO): Tam Ekran Video Arka Planı */}
      <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Arka Plan Videosu */}
        <video
          src="/videos/video1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Karartma Katmanı (Metin Okunabilirliği İçin) */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Hero İçeriği */}
        <div className="relative z-20 max-w-4xl px-6 flex flex-col items-center">
          <span className="text-cyan-400 font-mono tracking-widest text-xs md:text-sm mb-4 uppercase bg-cyan-950/80 px-4 py-1.5 rounded-full border border-cyan-500/30 backdrop-blur-md">
            Interactive Marine Biology Story
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-slate-50 tracking-tight leading-tight drop-shadow-xl">
            Nudibranchs & Hydroids
          </h1>
          <p className="text-xl md:text-3xl text-cyan-300 font-light mt-3 tracking-wide drop-shadow">
            The Micro Thieves of the Reef
          </p>
          <p className="mt-6 text-slate-300 max-w-2xl text-base md:text-lg font-light leading-relaxed drop-shadow">
            Explore how these colorful sea slugs steal biological weapons from their prey to become apex defenders of the deep.
          </p>

          <div className="mt-12 animate-bounce text-slate-400 text-sm flex flex-col items-center gap-2">
            <span className="font-mono text-xs tracking-wider uppercase text-cyan-400">Scroll down to explore</span>
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* 2. BÖLÜMLER: Scroll-Snap Storyboard Kartları */}
      {bookData.map((chapter, index) => (
        <section
          key={chapter.id}
          className="h-screen w-full snap-start flex items-center justify-center p-4 md:p-12 relative overflow-hidden bg-[#070b12]"
        >
          {/* Storyboard Kart Paneli */}
          <div className="max-w-6xl w-full h-[85vh] bg-slate-900/80 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md flex flex-col lg:flex-row">
            
            {/* Medya Alanı */}
            <div className="lg:w-3/5 h-1/2 lg:h-full relative bg-black/60 overflow-hidden flex items-center justify-center">
              {chapter.mediaType === 'video' ? (
                <video
                  src={chapter.mediaUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={chapter.mediaUrl}
                  alt={chapter.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              )}
              {chapter.caption && (
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs text-slate-300 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0"></span>
                  <span className="truncate">{chapter.caption}</span>
                </div>
              )}
            </div>

            {/* Metin ve Bilgi Alanı */}
            <div className="lg:w-2/5 h-1/2 lg:h-full p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-slate-900/50">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 font-mono text-xs font-semibold tracking-widest uppercase bg-cyan-950/80 px-3 py-1 rounded-md border border-cyan-800/50">
                    {chapter.chapterNumber}
                  </span>
                  <span className="text-slate-500 font-mono text-xs">
                    0{index + 1} / 0{bookData.length}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-100 mb-6 leading-snug">
                  {chapter.title}
                </h2>
                
                <p className="text-slate-300 leading-relaxed font-light text-base md:text-lg">
                  {chapter.text}
                </p>
              </div>

              {/* Alt Bilgi Çubuğu */}
              <div className="pt-6 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Micro-Ecology Project</span>
                <span className="text-cyan-400">Scroll ↓</span>
              </div>
            </div>

          </div>
        </section>
      ))}

      {/* 3. SON SAYFA (FOOTER) */}
      <footer className="h-screen w-full snap-start flex flex-col items-center justify-center border-t border-slate-800 bg-[#04070d] text-center px-4">
        <h3 className="text-2xl font-serif font-bold text-slate-200 mb-4">
          Thank you for exploring!
        </h3>
        <p className="text-slate-400 max-w-md text-sm font-light mb-6">
          Based on my observations and readings
        </p>
        <p className="text-slate-600 text-xs font-mono">
          Nudibranch & Hydroid Micro-Ecology Project
        </p>
      </footer>

    </div>
  );
}