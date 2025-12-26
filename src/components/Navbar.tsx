"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom smooth scroll function with offset
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
        setIsOpen(false); // Close mobile menu if open
        const headerOffset = 80;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-choose-us' }, // Assuming id added to WhyChooseUs
    { name: 'Best Seller', href: '#best-seller' }, // Assuming id added to BestSeller
    { name: 'Menu', href: '#menu' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled || isOpen 
            ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md py-2 border-b border-zinc-200/50 dark:border-zinc-800/50' 
            : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                <Image src="/logo.png" alt="Niskala Logo" fill className="object-contain" />
            </div>
            <span className={`text-2xl font-bold tracking-tighter font-serif transition-colors ${scrolled || isOpen ? 'text-amber-900 dark:text-amber-500' : 'text-white'}`}>
              NISKALA
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <a 
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${
                        scrolled 
                        ? 'text-zinc-700 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-amber-400' 
                        : 'text-white/90 hover:text-white'
                    }`}
                >
                  {link.name}
                  <span className={`absolute bottom-1 left-1/2 w-0 h-0.5 transform -translate-x-1/2 transition-all duration-300 group-hover:w-2/3 ${scrolled ? 'bg-amber-600' : 'bg-white'}`}></span>
                </a>
              ))}
              
              <a 
                href="https://wa.me/62895401285164"
                target="_blank"
                rel="noopener noreferrer"
                className={`ml-4 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-amber-500/25 flex items-center gap-2 transform hover:-translate-y-0.5 ${
                    scrolled
                    ? 'bg-amber-600 text-white hover:bg-amber-700'
                    : 'bg-white text-amber-900 hover:bg-zinc-100'
                }`}
              >
                <FontAwesomeIcon icon={faMugHot} />
                <span>Order Now</span>
              </a>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${
                  scrolled || isOpen
                  ? 'text-zinc-700 dark:text-zinc-200 hover:text-amber-600'
                  : 'text-white hover:text-white/80'
              }`}
            >
              <span className="sr-only">Open main menu</span>
               <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block px-4 py-3 rounded-xl text-base font-medium text-zinc-700 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
                >
                    {link.name}
                </a>
            ))}
             <a
                href="https://wa.me/62895401285164"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 w-full text-center px-4 py-3 rounded-xl text-base font-bold bg-amber-600 text-white hover:bg-amber-700 transition-colors"
                >
                Order Now
            </a>
          </div>
      </div>
    </nav>
  );
}
