const TESTIMONIALS = [
  {
    text: "The best Kopi Susu within Yogyakarta! The vibe is just unmatched.",
    author: "Sarah J.",
    role: "Coffee Lover"
  },
  {
    text: "Niskala is my go-to place for remote work. Great wifi and even better coffee.",
    author: "Dimas A.",
    role: "Freelancer"
  },
  {
    text: "Hidden gem. I love the salted caramel latte. Highly recommended!",
    author: "Rina M.",
    role: "Foodie"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-amber-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 font-serif">What They Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
              <div className="flex text-amber-500 mb-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                   <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 italic mb-6">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100">{t.author}</h4>
                <p className="text-sm text-zinc-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
