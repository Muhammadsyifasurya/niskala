import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function Footer() {
    return (
      <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className='flex items-start gap-4'>
            <Image src="/logo.png" alt="Logo" width={70} height={70} />
            <div>
              <h3 className="text-2xl font-bold text-white font-serif mb-4">NISKALA</h3>
              <p className="text-sm">
                Brewing stories, one cup at a time.
              </p>
            </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#hero" className="hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-amber-500 transition-colors">About</a></li>
                <li><a href="#menu" className="hover:text-amber-500 transition-colors">Menu</a></li>
                <li><a href="#location" className="hover:text-amber-500 transition-colors">Location</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.instagram.com/_niskalacoffee" className="flex items-center gap-2 hover:text-amber-500 transition-colors" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@_niskalacoffee" className="flex items-center gap-2 hover:text-amber-500 transition-colors" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
                    <span>Tiktok</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/62895401285164" className="flex items-center gap-2 hover:text-amber-500 transition-colors" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                    <span>Whatsapp</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Niskala Coffeeshop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
