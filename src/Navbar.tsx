import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/industries', label: 'Industries' },
    { href: '/services', label: 'Services' },
    { href: '/sustainability', label: 'Sustainability' },
    { href: '/projects', label: 'Projects' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <>
      <nav className={`absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-10 py-6`}>
        {/* LOGO */}
        <Link to="/" className="flex items-center group z-40">
          <span className="font-bold text-2xl tracking-tight text-[#D4AF37] drop-shadow-sm hover:text-[#e0c058] transition-colors duration-300" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.02em' }}>
            Noor Al Madina
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full pl-8 pr-2 py-2 shadow-lg border border-[#2d3a2a]/5">
          {navLinks.map((link, i) => (
            link.href.startsWith('/') ? 
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm px-3 py-2 transition-colors font-medium ${location.pathname === link.href ? 'text-[#1f2a1d] font-semibold' : 'text-[#4b5b47] hover:text-[#1f2a1d]'}`}
            >
              {link.label}
            </Link> :
            <a
              key={link.href}
              href={link.href}
              className={`text-sm px-3 py-2 transition-colors font-medium text-[#4b5b47] hover:text-[#1f2a1d]`}
            >
              {link.label}
            </a>
          ))}
          <Link to="/contact" className="ml-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors inline-block">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 text-[#2d3a2a]">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-[#1f2a1d] transition-all duration-300 hover:bg-white/90"
          >
            <Menu className={`w-5 h-5 absolute transition-all duration-300 ${menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
            <X className={`w-5 h-5 absolute transition-all duration-300 ${menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
          </button>
        </div>
      </nav>

      <div className={`lg:hidden fixed inset-0 z-20 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMenuOpen(false)}>
        <div className="absolute inset-0 bg-[#1f2a1d]/40 backdrop-blur-sm" />
      </div>

      <div className={`lg:hidden fixed top-0 right-0 bottom-0 z-20 w-[85%] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-8 pb-8">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              link.href.startsWith('/') ?
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-[#1f2a1d] py-4 border-b border-[#1f2a1d]/10 transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : '0ms' }}
              >
                {link.label}
              </Link> :
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-[#1f2a1d] py-4 border-b border-[#1f2a1d]/10 transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className={`mt-8 flex flex-col gap-4 transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="mt-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors text-center inline-block w-full">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
