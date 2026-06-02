import React from 'react';
import { Target, Eye, ShieldCheck, Handshake, Globe2, Leaf, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { label: 'Years in business', value: '15+', sub: 'Est. 2009' },
    { label: 'Products supplied', value: '200+', sub: 'Grades & types' },
    { label: 'Countries served', value: '40+', sub: 'Across 6 continents' },
    { label: 'Clients served', value: '1,200+', sub: 'Globally trusted' },
  ];

  const values = [
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Quality assurance', desc: 'Every product meets strict grade and purity standards.' },
    { icon: <Handshake className="w-6 h-6" />, title: 'Integrity', desc: 'Transparent dealings, honest pricing, and reliable partnerships.' },
    { icon: <Globe2 className="w-6 h-6" />, title: 'Global reach', desc: 'Local expertise backed by an international network.' },
    { icon: <Leaf className="w-6 h-6" />, title: 'Sustainability', desc: 'Committed to responsible sourcing and recycled materials.' },
  ];

  const reasons = [
    'One-stop platform for all plastic grades — virgin & recycled',
    'Fast, reliable logistics with end-to-end shipment tracking',
    'Dedicated account managers for every client',
    'Competitive, transparent pricing with flexible order volumes',
    'ISO-certified processes and quality documentation',
    '15+ years of deep industry expertise and market knowledge',
  ];

  return (
    <main className="w-full bg-[#f8faf8]">
      {/* Banner Section */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/warehouse.png" alt="About Us Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1f2a1d]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1d]/60 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-4" style={{ letterSpacing: '-0.02em', fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            About Us
          </h1>
          <p className="text-[#85AB8B] text-lg sm:text-xl font-medium max-w-2xl">
            Your Trusted Partner in Global Plastic Trading
          </p>
        </div>
      </section>

      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header Section with Image */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24 items-center">
            <div className="flex-1">
              <h2 className="text-sm font-semibold tracking-widest text-[#85AB8B] uppercase mb-4">About Us</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#1f2a1d] leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                Trading plastics with purpose, <br className="hidden sm:block"/>precision & trust
              </h3>
              <p className="text-[#4b5b47] text-lg leading-relaxed mb-8">
                We are a dedicated plastic trading company connecting manufacturers, recyclers, and buyers across global markets. With deep industry expertise and a commitment to quality, we simplify the supply chain — delivering the right materials, at the right time, every time.
              </p>
            </div>
            <div className="flex-1 w-full">
              <img src="/warehouse.png" alt="Plastic Warehouse" className="rounded-3xl shadow-xl w-full h-[300px] md:h-[400px] object-cover" />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col border-l border-[#85AB8B]/30 pl-6">
                <span className="text-4xl sm:text-5xl font-medium text-[#336443] mb-2">{stat.value}</span>
                <span className="text-[#1f2a1d] font-semibold mb-1">{stat.label}</span>
                <span className="text-sm text-[#4b5b47]">{stat.sub}</span>
              </div>
            ))}
          </div>

          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="bg-white p-10 sm:p-14 rounded-3xl shadow-sm border border-[#2d3a2a]/5 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#f0f4f1] rounded-2xl flex items-center justify-center text-[#336443] mb-8">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-semibold text-[#1f2a1d] mb-4">Our mission</h4>
              <h5 className="text-lg text-[#336443] font-medium mb-4">To simplify plastic trade globally</h5>
              <p className="text-[#4b5b47] leading-relaxed">
                We make buying and selling plastics straightforward — offering consistent quality, fair pricing, and logistics support that takes the hassle out of the supply chain.
              </p>
            </div>
            
            <div className="bg-[#1f2a1d] p-10 sm:p-14 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#336443] rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#2d3a2a] rounded-2xl flex items-center justify-center text-[#85AB8B] mb-8">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-semibold text-white mb-4">Our vision</h4>
                <h5 className="text-lg text-[#85AB8B] font-medium mb-4">A circular, sustainable plastic economy</h5>
                <p className="text-white/80 leading-relaxed">
                  We envision a future where plastic materials are responsibly sourced, traded, and reused — reducing waste and supporting a greener industrial ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Large Image Banner */}
          <div className="w-full mb-32 rounded-3xl overflow-hidden shadow-2xl relative h-[400px] md:h-[500px]">
             <img src="/recycling.png" alt="Sustainable Plastic Recycling" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1d]/80 to-transparent flex items-end p-10 sm:p-14">
               <h3 className="text-3xl sm:text-4xl font-medium text-white max-w-2xl">
                 Committed to a greener industrial ecosystem and a sustainable future.
               </h3>
             </div>
          </div>

          {/* Values & Why Choose Us Section */}
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 pb-24">
            {/* Core Values */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium text-[#1f2a1d] mb-10">Core Values</h3>
              <div className="grid sm:grid-cols-2 gap-8">
                {values.map((val, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="w-12 h-12 bg-[#f0f4f1] rounded-xl flex items-center justify-center text-[#336443] mb-5">
                      {val.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-[#1f2a1d] mb-2">{val.title}</h4>
                    <p className="text-sm text-[#4b5b47] leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-[#2d3a2a]/5">
              <h3 className="text-2xl sm:text-3xl font-medium text-[#1f2a1d] mb-8">Why Choose Us</h3>
              <ul className="space-y-4">
                {reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-[#85AB8B]">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-[#4b5b47] leading-relaxed">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
