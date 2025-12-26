

export default function Hero() {
  return (
    <div id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for actual coffee shop image. Using a nice gradient/pattern for now or an Unsplash URL if I could, but sticking to next/image local or color */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black opacity-90 z-10"></div>
        {/* If we had an image, it would go here. For now, let's pretend. */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center"></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 font-serif">
          Experience the <span className="text-amber-500">Unseen</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
          Niskala Coffee Shop. Where every cup tells a story, and every sip reveals a hidden world of flavor. Join us for a moment of clarity.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#menu" className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-amber-900/20">
              View Menu
            </a>
            <a href="#location" className="px-8 py-3 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white rounded-full font-medium transition-all backdrop-blur-sm">
              Visit Us
            </a>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </div>
  );
}
