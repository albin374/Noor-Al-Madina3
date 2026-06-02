import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

export default function ContactUs() {
  return (
    <main className="w-full bg-[#f8faf8] min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/contact_banner.png" alt="Contact Us Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1f2a1d]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1d]/60 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-4" style={{ letterSpacing: '-0.02em', fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Contact Us
          </h1>
          <p className="text-[#85AB8B] text-lg sm:text-xl font-medium max-w-2xl">
            Get in touch with Noor Al Madina
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Information */}
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold tracking-widest text-[#85AB8B] uppercase mb-4">Get In Touch</h2>
            <h3 className="text-3xl sm:text-4xl font-medium text-[#1f2a1d] leading-tight mb-8">
              We're here to help you source the best materials globally.
            </h3>
            <p className="text-[#4b5b47] text-lg leading-relaxed mb-12">
              Based in the heart of Dubai, Noor Al Madina connects global markets with premium plastic trading solutions. Reach out to our dedicated team today.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-[#2d3a2a]/5 text-[#336443]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#1f2a1d] font-semibold mb-1">Phone Number</h4>
                  <p className="text-[#4b5b47]">+971 4 123 4567</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-[#2d3a2a]/5 text-[#25D366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#1f2a1d] font-semibold mb-1">WhatsApp</h4>
                  <p className="text-[#4b5b47]">+971 50 123 4567</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-[#2d3a2a]/5 text-[#336443]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#1f2a1d] font-semibold mb-1">Email Address</h4>
                  <p className="text-[#4b5b47]">info@nooralmadina.com</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-[#2d3a2a]/5 text-[#336443]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[#1f2a1d] font-semibold mb-1">Office Address</h4>
                  <p className="text-[#4b5b47]">Office 1204, Business Bay<br/>Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-lg border border-[#2d3a2a]/5">
            <h4 className="text-2xl font-semibold text-[#1f2a1d] mb-8">Send us a message</h4>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-[#1f2a1d]">First Name</label>
                  <input type="text" id="firstName" className="bg-[#f8faf8] border border-[#2d3a2a]/10 rounded-xl px-4 py-3 text-[#1f2a1d] focus:outline-none focus:border-[#85AB8B] focus:ring-1 focus:ring-[#85AB8B] transition-all" placeholder="John" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-[#1f2a1d]">Last Name</label>
                  <input type="text" id="lastName" className="bg-[#f8faf8] border border-[#2d3a2a]/10 rounded-xl px-4 py-3 text-[#1f2a1d] focus:outline-none focus:border-[#85AB8B] focus:ring-1 focus:ring-[#85AB8B] transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-[#1f2a1d]">Email Address</label>
                <input type="email" id="email" className="bg-[#f8faf8] border border-[#2d3a2a]/10 rounded-xl px-4 py-3 text-[#1f2a1d] focus:outline-none focus:border-[#85AB8B] focus:ring-1 focus:ring-[#85AB8B] transition-all" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-[#1f2a1d]">Subject</label>
                <input type="text" id="subject" className="bg-[#f8faf8] border border-[#2d3a2a]/10 rounded-xl px-4 py-3 text-[#1f2a1d] focus:outline-none focus:border-[#85AB8B] focus:ring-1 focus:ring-[#85AB8B] transition-all" placeholder="How can we help you?" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-[#1f2a1d]">Message</label>
                <textarea id="message" rows={4} className="bg-[#f8faf8] border border-[#2d3a2a]/10 rounded-xl px-4 py-3 text-[#1f2a1d] focus:outline-none focus:border-[#85AB8B] focus:ring-1 focus:ring-[#85AB8B] transition-all resize-none" placeholder="Enter your message here..."></textarea>
              </div>
              <button type="submit" className="mt-4 flex items-center justify-center gap-2 w-full bg-[#1f2a1d] hover:bg-[#336443] text-white font-semibold py-4 rounded-xl transition-colors duration-300">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-16 sm:pb-24">
        <div className="w-full h-[400px] sm:h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg border border-[#2d3a2a]/5">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.716499824647!2d55.26359550965005!3d25.1887309658742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0x80ea3858365543ef!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Noor Al Madina Office Location"
          />
        </div>
      </section>
    </main>
  );
}
