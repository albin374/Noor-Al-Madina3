import React from 'react';
import { ArrowRight, Globe, Boxes, Search, MessageSquare, Truck, Settings, Briefcase } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Plastic Material Trading",
      description: "Comprehensive trading of virgin, recycled, and specialized plastic materials across global markets with unmatched reliability."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Import & Export",
      description: "Seamless cross-border trading operations managed by experts to ensure regulatory compliance and timely deliveries worldwide."
    },
    {
      icon: <Boxes className="w-8 h-8" />,
      title: "Bulk Supply",
      description: "Scaling up your production seamlessly with our consistent, high-volume material supply network and bulk pricing."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Sourcing Solutions",
      description: "Hard-to-find grades? Our extensive global network ensures we can source the exact plastic materials your business requires."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Material Consultation",
      description: "Expert guidance on selecting the right polymers to enhance your product performance, lower costs, and meet sustainability goals."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Logistics & Distribution",
      description: "End-to-end supply chain management guaranteeing your materials arrive exactly when and where you need them."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Customized Procurement",
      description: "Tailored procurement strategies designed to align perfectly with your manufacturing schedules and volume demands."
    }
  ];

  return (
    <main className="w-full bg-[#f8faf8] min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/services_banner.png" alt="Our Services Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1f2a1d]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1d]/60 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-4" style={{ letterSpacing: '-0.02em', fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Our Services
          </h1>
          <p className="text-[#85AB8B] text-lg sm:text-xl font-medium max-w-2xl">
            Highlighting our core business capabilities
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest text-[#85AB8B] uppercase mb-4">What We Do</h2>
          <h3 className="text-3xl sm:text-4xl font-medium text-[#1f2a1d] leading-tight mb-6">
            End-to-End Solutions for the Plastics Industry
          </h3>
          <p className="text-[#4b5b47] text-lg leading-relaxed">
            From initial consultation to final delivery, we offer a comprehensive suite of services designed to simplify your supply chain and empower your manufacturing operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className={`bg-white p-8 rounded-3xl shadow-sm border border-[#2d3a2a]/5 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col ${i === 6 ? 'md:col-span-2 lg:col-span-3 xl:col-span-2' : ''}`}>
              <div className="w-16 h-16 bg-[#f0f4f1] rounded-2xl flex items-center justify-center text-[#336443] mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-[#1f2a1d] mb-3">{service.title}</h4>
              <p className="text-[#4b5b47] leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <div className="mt-auto">
                <button className="flex items-center gap-2 text-[#336443] font-medium hover:text-[#1f2a1d] transition-colors group">
                  Learn more <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="bg-[#1f2a1d] p-8 rounded-3xl shadow-lg flex flex-col items-start justify-center md:col-span-1 lg:col-span-3 xl:col-span-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#336443] rounded-full blur-[100px] opacity-30 transform translate-x-1/3 -translate-y-1/3" />
            <div className="relative z-10 w-full">
              <h4 className="text-2xl font-medium text-white mb-4">Ready to optimize your supply chain?</h4>
              <p className="text-[#85AB8B] mb-8">
                Connect with our experts today to discuss your specific material and logistical requirements.
              </p>
              <button className="w-full sm:w-auto bg-white text-[#1f2a1d] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
