import React from 'react';
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {
      category: "Major Supply Contract",
      title: "Global Automotive Manufacturer Partnership",
      image: "/automotive_plastic.png",
      description: "Secured a multi-year contract to supply 50,000 metric tons of high-strength engineering plastics for the interior dashboard components of a leading European EV manufacturer.",
      results: ["15% material cost reduction", "Zero-defect delivery rate", "100% on-time logistics"]
    },
    {
      category: "Industry Solution",
      title: "Medical-Grade Supply Chain Overhaul",
      image: "/medical_plastic.png",
      description: "Developed a closed-loop sourcing solution for a major medical device company, ensuring uninterrupted supply of sterile, biocompatible polymers during global shortages.",
      results: ["Supply chain secured for 5 years", "ISO 13485 compliant sourcing", "Reduced lead time by 30%"]
    },
    {
      category: "Client Case Study",
      title: "Sustainable Packaging Transition",
      image: "/recycling.png",
      description: "Guided a multinational consumer goods brand in transitioning 80% of their packaging to our premium recycled granules, drastically lowering their carbon footprint without sacrificing durability.",
      results: ["Carbon emissions reduced by 40%", "Maintained packaging clarity", "Seamless production integration"]
    },
    {
      category: "Major Supply Contract",
      title: "Mega-Infrastructure Piping Project",
      image: "/warehouse.png",
      description: "Supplied specialized weather-resistant PVC and HDPE compounds for a massive underground infrastructure project in the Middle East, requiring continuous high-volume deliveries.",
      results: ["120,000+ tons supplied", "Withstood extreme climate testing", "Completed 2 months ahead of schedule"]
    }
  ];

  return (
    <main className="w-full bg-[#f8faf8] min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/projects_banner.png" alt="Projects and Success Stories" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1f2a1d]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1d]/60 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-4" style={{ letterSpacing: '-0.02em', fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Success Stories
          </h1>
          <p className="text-[#85AB8B] text-lg sm:text-xl font-medium max-w-2xl">
            Real-world impact across global industries
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest text-[#85AB8B] uppercase mb-4">Our Track Record</h2>
          <h3 className="text-3xl sm:text-4xl font-medium text-[#1f2a1d] leading-tight mb-6">
            Delivering at scale, without compromise.
          </h3>
          <p className="text-[#4b5b47] text-lg leading-relaxed">
            From multi-national supply contracts to innovative industry solutions, explore how Noor Al Madina consistently drives value, reliability, and growth for our partners.
          </p>
        </div>

        <div className="flex flex-col gap-12 sm:gap-16">
          {projects.map((project, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group rounded-3xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-[#336443]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                <img src={project.image} alt={project.title} className="w-full h-[350px] sm:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-[#1f2a1d] shadow-sm">
                  <Building2 className="w-4 h-4 text-[#85AB8B]" /> {project.category}
                </div>
              </div>
              
              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <h4 className="text-2xl sm:text-3xl font-semibold text-[#1f2a1d] mb-6">{project.title}</h4>
                <p className="text-[#4b5b47] text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#2d3a2a]/5 shadow-sm mb-8">
                  <h5 className="font-semibold text-[#1f2a1d] mb-4">Key Outcomes</h5>
                  <ul className="flex flex-col gap-3">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#4b5b47]">
                        <CheckCircle2 className="w-5 h-5 text-[#85AB8B] flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <button className="flex items-center gap-2 text-[#336443] font-semibold hover:text-[#1f2a1d] transition-colors group">
                    Read Full Case Study <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-950">
          <img src="/eco_background.png" alt="Background Texture" className="w-full h-full object-cover opacity-30 grayscale" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-3xl sm:text-4xl font-medium text-white mb-6">Ready to write your success story?</h3>
          <p className="text-[#85AB8B] text-lg mb-10 max-w-2xl mx-auto">
            Partner with a supplier that understands your industry challenges and possesses the global network to overcome them.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#85AB8B] hover:bg-white text-[#1f2a1d] font-semibold px-8 py-4 rounded-full transition-colors duration-300 shadow-lg">
            Discuss Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
