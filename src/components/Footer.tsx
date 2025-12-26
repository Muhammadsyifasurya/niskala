"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faEnvelope, faMapPin, faClock } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
      <footer className="bg-black text-zinc-400 pt-20 pb-10 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Section: Brand & Newsletter */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
                <div className="max-w-md">
                    <div className='flex items-center gap-3 mb-6'>
                        <div className="relative w-12 h-12">
                             <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                        </div>
                        <span className="text-3xl font-bold text-white font-serif tracking-wider">NISKALA</span>
                    </div>
                    <p className="text-zinc-500 mb-8 leading-relaxed">
                        Crafting coffee with passion and precision. A space where every cup tells a story and every visit feels like coming home.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/_niskalacoffee" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-600 hover:text-white transition-all duration-300">
                            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                        </a>
                        <a href="https://www.tiktok.com/@_niskalacoffee" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-600 hover:text-white transition-all duration-300">
                             <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
                        </a>
                        <a href="https://wa.me/62895401285164" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-600 hover:text-white transition-all duration-300">
                             <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="w-full lg:w-auto bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
                    <h4 className="text-white font-bold text-lg mb-2">Stay Updated</h4>
                    <p className="text-sm text-zinc-500 mb-4">Join our community for improved brewing tips and offers.</p>
                    <form className="flex flex-col sm:flex-row gap-3">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="bg-black border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 w-full sm:w-64 transition-colors"
                        />
                        <button type="button" className="bg-amber-700 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-900 pt-16 mb-12">
            
            {/* Navigation */}
            <div>
              <h4 className="text-white font-bold mb-6 font-serif text-lg">Explore</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#hero" className="hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#menu" className="hover:text-amber-500 transition-colors">Our Menu</a></li>
                <li><a href="#why-choose-us" className="hover:text-amber-500 transition-colors">Why Niskala</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6 font-serif text-lg">Contact & Visit</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faMapPin} className="w-4 h-4 mt-1 text-amber-600" />
                    <span>Nglorong RT05, Panjangrejo, Pundong, Bantul, Yogyakarta 55771</span>
                </li>
                 <li className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faClock} className="w-4 h-4 mt-1 text-amber-600" />
                    <span>Everyday: 08:00 - 22:00</span>
                </li>
              </ul>
            </div>
            
             {/* Quick Actions */}
             <div>
                <h4 className="text-white font-bold mb-6 font-serif text-lg">Support</h4>
                 <ul className="space-y-4 text-sm">
                    <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a></li>
                 </ul>
             </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-900">
            <p className="text-xs text-zinc-600">&copy; {new Date().getFullYear()} Niskala Coffeeshop. All rights reserved.</p>
            
            <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-amber-500 transition-colors group"
            >
                <span>Back to Top</span>
                <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900 group-hover:border-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all">
                    <FontAwesomeIcon icon={faArrowUp} className="w-3 h-3" />
                </div>
            </button>
          </div>
        </div>
      </footer>
    );
  }
