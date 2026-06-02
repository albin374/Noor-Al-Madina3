import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1f2a1d] text-white pt-16 pb-8 border-t border-[#336443]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              Noor Al Madina
            </h3>
            <p className="text-[#85AB8B] mb-8 max-w-sm leading-relaxed">
              Your trusted partner in global plastic trading. Delivering premium materials and sustainable solutions across the world.
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-[#336443] hover:bg-[#85AB8B] hover:text-[#1f2a1d] text-white px-6 py-3 rounded-full font-medium transition-colors">
              <Download className="w-4 h-4" /> Company Brochure
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-white transition-colors">Our Products</Link></li>
              <li><Link to="/industries" className="text-white/70 hover:text-white transition-colors">Industries We Serve</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-semibold mb-6 text-lg tracking-wide">Products</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-white/70 hover:text-white transition-colors">Virgin Plastics</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-white transition-colors">Recycled Plastics</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-white transition-colors">Engineering Resins</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-white transition-colors">Masterbatches</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-white transition-colors">Additives</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-semibold mb-6 text-lg tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 text-[#85AB8B]" />
                <span>Office 1204, Business Bay, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#85AB8B]" />
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#85AB8B]" />
                <span>info@nooralmadina.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Noor Al Madina. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#336443] hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#336443] hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#336443] hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#336443] hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
