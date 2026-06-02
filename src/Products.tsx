import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Products() {
  const products = [
    {
      title: "Virgin Plastic Granules",
      image: "/virgin_granules.png",
      description: "High-purity virgin plastic granules sourced directly from top-tier petrochemical plants, ensuring flawless manufacturing.",
      specifications: "MFI: 2.0 - 25.0 g/10min, Density: 0.91 - 0.96 g/cm³",
      applications: "Injection molding, blown film, food packaging."
    },
    {
      title: "Recycled Plastic Granules",
      image: "/recycled_granules.png",
      description: "Eco-friendly, high-quality recycled granules providing a sustainable alternative without compromising on strength.",
      specifications: "Consistent melt flow, high tensile strength, filtered.",
      applications: "Pipes, non-food packaging, automotive parts."
    },
    {
      title: "Engineering Plastics",
      image: "/polymer_resins.png",
      description: "Advanced engineering plastics designed for high mechanical strength, heat resistance, and specialized industrial uses.",
      specifications: "High thermal stability, excellent impact resistance.",
      applications: "Electronics, automotive, aerospace components."
    },
    {
      title: "Polymer Resins",
      image: "/polymer_resins.png",
      description: "Premium polymer resins (PET, PVC, PP, PE) formulated for diverse production lines and outstanding durability.",
      specifications: "Viscosity: 0.76 - 0.84 dl/g, Moisture: < 0.2%",
      applications: "Bottles, containers, synthetic fibers."
    },
    {
      title: "Plastic Compounds",
      image: "/recycled_granules.png",
      description: "Custom-formulated plastic compounds mixed with additives to achieve specific physical and chemical properties.",
      specifications: "Customizable hardness, UV resistance, flame retardant.",
      applications: "Wire insulation, specialized consumer goods."
    },
    {
      title: "Masterbatches",
      image: "/virgin_granules.png",
      description: "Highly concentrated color and additive masterbatches for vibrant coloring and enhanced material performance.",
      specifications: "High dispersion, heat stable up to 300°C.",
      applications: "Coloring plastics, UV protection, anti-static."
    },
    {
      title: "Additives",
      image: "/polymer_resins.png",
      description: "Essential chemical additives to optimize the processing and lifespan of your end products.",
      specifications: "Antioxidants, slip agents, anti-blocking.",
      applications: "Agricultural films, durable goods, medical devices."
    },
    {
      title: "Plastic Sheets & Rolls",
      image: "/warehouse.png",
      description: "Industrial-grade plastic sheets and rolls available in varying thicknesses, offering excellent clarity and toughness.",
      specifications: "Thickness: 0.1mm - 5mm, customizable width.",
      applications: "Thermoforming, signage, construction barriers."
    },
    {
      title: "Packaging Materials",
      image: "/recycling.png",
      description: "Comprehensive packaging solutions crafted from resilient plastics to ensure product safety and integrity.",
      specifications: "High puncture resistance, FDA approved options.",
      applications: "Retail packaging, logistics, food storage."
    }
  ];

  return (
    <main className="w-full bg-[#f8faf8] min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/products_banner.png" alt="Our Products Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1f2a1d]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1d]/60 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-4" style={{ letterSpacing: '-0.02em', fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Our Products
          </h1>
          <p className="text-[#85AB8B] text-lg sm:text-xl font-medium max-w-2xl">
            Premium-grade materials for every application
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest text-[#85AB8B] uppercase mb-4">Product Catalog</h2>
          <p className="text-[#4b5b47] text-lg leading-relaxed">
            From raw virgin polymers to eco-friendly recycled granules, our extensive product portfolio is engineered to meet strict quality standards and power your manufacturing success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#2d3a2a]/5 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-64 overflow-hidden relative">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-xl font-semibold text-[#1f2a1d] mb-3">{product.title}</h4>
                <p className="text-[#4b5b47] text-sm leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>
                <div className="space-y-3 mb-8">
                  <div>
                    <span className="text-xs font-semibold text-[#85AB8B] uppercase tracking-wider block mb-1">Specifications</span>
                    <span className="text-[#1f2a1d] text-sm">{product.specifications}</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#85AB8B] uppercase tracking-wider block mb-1">Applications</span>
                    <span className="text-[#1f2a1d] text-sm">{product.applications}</span>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-2 w-full bg-[#f0f4f1] hover:bg-[#336443] text-[#336443] hover:text-white font-medium py-3 rounded-xl transition-colors duration-300">
                  Send Inquiry <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
