
  const MENU_CATEGORIES = [
    {
      title: "Signature Coffee",
      items: [
        // { name: "Niskala Latte", price: "28k", desc: "Our signature blend with creamy milk and palm sugar." },
        // { name: "Espresso", price: "18k", desc: "Rich, bold, and pure energy." },
        // { name: "Cappuccino", price: "25k", desc: "Perfectly balanced espresso, steamed milk, and foam." },
        { name: "V60/Japanese", price: "15k/16k", desc: "Arabica Beans"},
        { name: "Americano", price: "13k", desc: "Arabica/Robusta Beans" },
        { name: "Tubruk", price: "8k", desc: "Robusta Beans"},
        { name: "Pandan", price: "15k", desc: "Espresso with falvour Pandan + Fresh Milk" },
      ]
    },
    {
      title: "Coffe Syusyu",
    items: [
  {
    name: "Kopi Susu Original",
    price: "15k",
    desc: "A balanced blend of coffee and milk with a smooth taste."
  },
  {
    name: "Gula Aren",
    price: "15k",
    desc: "Milk coffee sweetened with natural palm sugar."
  },
  {
    name: "Vani La",
    price: "15k",
    desc: "Milk coffee with a soft and creamy vanilla flavor."
  },
  {
    name: "Salted Caramel",
    price: "15k",
    desc: "Milk coffee with sweet caramel and a hint of salt."
  }
  // {
  //   name: "Lychee Tea",
  //   price: "22k",
  //   desc: "Refreshing black tea with sweet lychee flavor."
  // }
]

    },
    {
      title: "Non-Coffee",
      items: [
  {
    name: "Chocolate",
    price: "13k",
    desc: "Rich chocolate drink with a smooth and creamy taste."
  },
  {
    name: "Matcha",
    price: "13k",
    desc: "Japanese matcha blended with milk for a soft and earthy flavor."
  },
  {
    name: "Red Velvet",
    price: "13k",
    desc: "Creamy red velvet drink with a mild chocolate taste."
  }
  // {
  //   name: "Lychee Tea",
  //   price: "22k",
  //   desc: "Refreshing black tea with sweet lychee flavor."
  // }
]

    },
    {
      title: "Eats",
      items: [
        { name: "Donut",
    price: "24k",
    desc: "Soft and fluffy donut with a light sweetness."
  },
        // { name: "Butter Croissant", price: "24k", desc: "Flaky, buttery perfection." },
        // { name: "Pain au Chocolat", price: "28k", desc: "Croissant filled with dark chocolate." },
        // { name: "Banana Bread", price: "20k", desc: "Moist, house-made banana bread." },
      ]
    }
  ];
  
  export default function Menu() {
    return (
      <section id="menu" className="py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3">Our Menu</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 font-serif">Curated for Your Taste</h3>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MENU_CATEGORIES.map((category, idx) => (
              <div key={idx} className="bg-white dark:bg-black p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                   <span className="w-8 h-[2px] bg-amber-600 block"></span>
                   {category.title}
                </h4>
                <div className="space-y-8">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group">
                      <div className="flex justify-between items-baseline mb-2">
                        <h5 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-amber-600 transition-colors">{item.name}</h5>
                        <span className="text-lg font-bold text-amber-600">{item.price}</span>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 font-medium transition-colors">
              <span>View Full Menu PDF</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div> */}
        </div>
      </section>
    );
  }
