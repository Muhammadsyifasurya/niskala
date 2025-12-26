import Image from 'next/image';
const BEST_SELLERS = [
  {
    name: "Pandan",
    price: "15k",
    description: "Perfect balance of sweet caramel and savory notes.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2000&auto=format&fit=crop",
  },
  {
    name: "Kopi Susu Original",
    price: "15k",
    description: "Our signature blend with creamy milk and palm sugar.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000&auto=format&fit=crop",
  },
  {
    name: "Gula Aren",
    price: "15k",
    description: "Bold espresso with natural palm sugar, creating a rich and well-balanced flavor.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop",
  },
];


export default function BestSeller() {
  return (
    <section id="best-seller" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3">Customer Favorites</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 font-serif">Best Sellers</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BEST_SELLERS.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 transition-all hover:shadow-2xl">
              <div className="h-64 overflow-hidden relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                 <Image 
                   src={item.image} 
                   alt={item.name}
                   fill
                   className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                 />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{item.name}</h4>
                  <span className="text-amber-600 font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
                  {item.description}
                </p>
                <a 
                  href={`https://wa.me/62895401285164?text=Halo%20kak%2C%20saya%20mau%20pesan%20${encodeURIComponent(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-colors text-center"
                >
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
