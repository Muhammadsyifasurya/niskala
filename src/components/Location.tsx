export default function Location() {
    return (
      <section id="location" className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 font-serif mb-6">
                  Find Us
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                  We are located in the heart of the city, tucked away in a quiet corner where you can escape the noise.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Our Location</h4>
                      <p className="text-zinc-600 dark:text-zinc-400">Nglorong RT05, Panjangrejo, Pundong, Bantul, Yogyakarta 55771</p>
                    </div>
                  </div>
  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Opening Hours</h4>
                      <p className="text-zinc-600 dark:text-zinc-400">Everyday: 08:00 - 22:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Map */}
            <div className="h-[400px] w-full bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
             <iframe
  src="https://www.google.com/maps?q=Ngolorong+RT05,+Panjangrejo,+Pundong,+Bantul,+Yogyakarta+55771&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="grayscale hover:grayscale-0 transition-all duration-500"
></iframe>

            </div>
          </div>
        </div>
      </section>
    );
  }
