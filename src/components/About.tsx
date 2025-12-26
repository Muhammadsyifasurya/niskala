export default function About() {
    return (
      <section id="about" className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 font-serif">
                More Than Just A <span className="text-amber-600">Cup</span>
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Founded by friends, for friends. Niskala Coffeeshop was born from a simple idea: to create a space where time slows down. In the hustle of the city, we provide a sanctuary of calm, centered around the art of brewing.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                "Niskala" means abstract or immaterial in Sanskrit. We believe the true essence of coffee isn't just in the bean, but in the unseen moments shared over it. The conversations, the ideas, the silence.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-4xl font-bold text-amber-600">100%</h3>
                  <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mt-1">Arabica Beans</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-amber-600">5+</h3>
                  <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mt-1">Years Brewing</p>
                </div>
              </div>
            </div>
  
            {/* Image Grid */}
            <div className="relative h-[500px] w-full row-start-1 lg:row-start-auto">
               <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden transform translate-x-4 -translate-y-4">
                  {/* Placeholder for coffee shop interior */}
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
               </div>
               <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-zinc-300 dark:bg-zinc-700 rounded-2xl overflow-hidden border-8 border-white dark:border-zinc-950 shadow-2xl">
                  {/* Placeholder for barista/detail shot */}
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
               </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
