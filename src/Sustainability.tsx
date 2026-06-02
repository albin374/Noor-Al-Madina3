import React from 'react';
import { Leaf, Recycle, TrendingDown, Sprout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sustainability() {
  const initiatives = [
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Recycling Initiatives",
      description: "We partner with leading global recycling facilities to process post-consumer and post-industrial plastics, transforming them into high-quality reusable resins."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Sourcing",
      description: "Our supply chain strictly audits and partners with manufacturers committed to reducing carbon footprints and prioritizing renewable energy in production."
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Waste Reduction",
      description: "By optimizing logistics and promoting closed-loop manufacturing, we actively help our clients minimize material waste and operational inefficiencies."
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Eco-friendly Materials",
      description: "We are continually expanding our portfolio of bioplastics and fully biodegradable materials to support the transition to a greener economy."
    }
  ];

  return (
    <main className="w-full bg-[#f8faf8] min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/sustainability_banner.png" alt="Sustainability Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#336443]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1d]/90 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-4" style={{ letterSpacing: '-0.02em', fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Sustainability
          </h1>
          <p className="text-[#85AB8B] text-lg sm:text-xl font-medium max-w-2xl">
            Driving the future of a circular plastic economy
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-sm font-semibold tracking-widest text-[#85AB8B] uppercase mb-4">Our Commitment</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#1f2a1d] leading-tight mb-8">
              Trading with tomorrow in mind.
            </h3>
            <p className="text-[#4b5b47] text-lg leading-relaxed mb-6">
              At Noor Al Madina, we believe that modern trading companies have a profound responsibility to protect our environment. We are dedicated to pioneering sustainable practices across the entire plastic supply chain.
            </p>
            <p className="text-[#4b5b47] text-lg leading-relaxed">
              Our goal is to seamlessly connect industrial demands with eco-conscious solutions—proving that profitability and planetary health can thrive side-by-side.
            </p>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-[#85AB8B] rounded-3xl transform translate-x-4 translate-y-4 opacity-20" />
            <img src="/recycling.png" alt="Recycling Facility" className="relative z-10 w-full h-[400px] object-cover rounded-3xl shadow-xl" />
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 md:px-10 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/eco_impact.png" alt="Sustainable Industrial Impact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1f2a1d]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1d]/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold tracking-widest text-[#85AB8B] uppercase mb-4">Core Focus Areas</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight">
              Actionable sustainability goals
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {initiatives.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-md transform group-hover:-translate-y-2 group-hover:bg-[#85AB8B] group-hover:text-[#1f2a1d] transition-all duration-500">
                    {item.icon}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#85AB8B] transition-colors">{item.title}</h4>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 text-center border-t border-white/10 pt-16">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#85AB8B] hover:bg-white text-[#1f2a1d] font-semibold px-10 py-4 rounded-full transition-colors duration-300 shadow-lg">
              Partner with us for a greener future <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
