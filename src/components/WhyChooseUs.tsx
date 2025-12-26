import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faTree, faUsers, faWifi } from '@fortawesome/free-solid-svg-icons';

const FEATURES = [
  {
    icon: faMugHot,
    title: "Quality Beans",
    description: "Sourced from the best local farmers, roasted to perfection."
  },
  {
    icon: faTree,
    title: "Cozy Atmosphere",
    description: "A perfect blend of nature and comfort for your peace of mind."
  },
  {
    icon: faUsers,
    title: "Community",
    description: "A place where friends meet and new connections are made."
  },
  {
    icon: faWifi,
    title: "Fast Wifi",
    description: "Stay connected while enjoying your favorite brew."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-3">Why Choose Niskala</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-serif">Crafting Moments</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-zinc-800/50 p-8 rounded-2xl text-center hover:bg-zinc-800 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto bg-amber-600/20 rounded-full flex items-center justify-center mb-6 text-amber-500">
                <FontAwesomeIcon icon={feature.icon} className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
