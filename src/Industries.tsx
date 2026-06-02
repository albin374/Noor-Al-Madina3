import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      name: "Packaging Industry",
      image: "/warehouse.png",
      description: "Providing high-clarity, puncture-resistant polymers for food, retail, and industrial packaging solutions."
    },
    {
      name: "Automotive Industry",
      image: "/automotive_plastic.png",
      description: "Supplying lightweight, high-strength plastics engineered for modern vehicle interiors and durable components."
    },
    {
      name: "Construction Industry",
      image: "/products_banner.png",
      description: "Durable and weather-resistant materials for piping, insulation, and architectural applications."
    },
    {
      name: "Electrical & Electronics",
      image: "/polymer_resins.png",
      description: "Flame-retardant and highly insulative resins for safe, reliable electronic enclosures and wiring."
    },
    {
      name: "Medical Industry",
      image: "/medical_plastic.png",
      description: "Medical-grade, biocompatible plastics ensuring pristine hygiene and safety for healthcare equipment."
    },
    {
      name: "Agriculture",
      image: "/recycled_granules.png",
      description: "UV-stabilized films and durable compounds for greenhouse covers, irrigation, and crop protection."
    },
    {
      name: "Consumer Goods",
      image: "/virgin_granules.png",
      description: "Versatile, aesthetically pleasing plastics for everyday household items, toys, and appliances."
    },
    {
      name: "Furniture Manufacturing",
      image: "/recycling.png",
      description: "Strong, molded structural plastics providing ergonomic support and modern aesthetics for furniture."
    }
  ];

  return (
    <main className="w-full bg-[#f8faf8] min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/industries_banner.png" alt="Industries We Serve Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1f2a1d]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1d]/60 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-4" style={{ letterSpacing: '-0.02em', fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Industries We Serve
          </h1>
          <p className="text-[#85AB8B] text-lg sm:text-xl font-medium max-w-2xl">
            Powering global manufacturing across diverse sectors
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest text-[#85AB8B] uppercase mb-4">Our Impact</h2>
          <p className="text-[#4b5b47] text-lg leading-relaxed">
            Our premium plastic materials form the foundation of thousands of products worldwide. From critical medical devices to everyday packaging, we deliver the exact specifications required by every industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {industries.map((industry, i) => (
            <div key={i} className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500">
              <img src={industry.image} alt={industry.name} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1d] via-[#1f2a1d]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {industry.name}
                </h3>
                <div className="overflow-hidden">
                  <p className="text-white/80 leading-relaxed opacity-0 max-h-0 group-hover:max-h-32 group-hover:opacity-100 group-hover:mt-2 transition-all duration-500 ease-in-out">
                    {industry.description}
                  </p>
                </div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
