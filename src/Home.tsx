import React, { useState, useEffect, useRef } from 'react';
import BoomerangVideoBg from './BoomerangVideoBg';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, TrendingUp, Globe, Truck, Headset, Link as LinkIcon, Briefcase } from 'lucide-react';

const CountUpNumber = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = progress * (2 - progress);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => observer.disconnect();
  }, [end, duration]);
  
  return <span ref={countRef}>{count.toLocaleString()}{suffix}</span>;
};

const BG_VIDEO = '/banner1.mp4';

export default function Home() {
  const featuredProducts = [
    {
      title: "Virgin Plastic Granules",
      image: "/virgin_granules.png",
      description: "High-purity virgin plastic granules sourced directly from top-tier petrochemical plants, ensuring flawless manufacturing."
    },
    {
      title: "Recycled Plastic Granules",
      image: "/recycled_granules.png",
      description: "Eco-friendly, high-quality recycled granules providing a sustainable alternative without compromising on strength."
    },
    {
      title: "Engineering Plastics",
      image: "/polymer_resins.png",
      description: "Advanced engineering plastics designed for high mechanical strength, heat resistance, and specialized industrial uses."
    }
  ];

  return (
    <main className="relative w-full">
      <section className="relative w-full min-h-[100dvh] sm:h-screen overflow-hidden">
        <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full" />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] sm:min-h-0 sm:h-full text-center px-4 sm:px-6">
          <h1
            className="font-normal leading-[0.95] text-white drop-shadow-md text-[2rem] sm:text-4xl md:text-5xl lg:text-[4.75rem] xl:text-[5.25rem] max-w-5xl"
            style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif', letterSpacing: '-0.035em' }}
          >
            Where Plastic Meets{' '}
            <span className="text-[#D4AF37]">
              Sustainability
            </span>
          </h1>
          <p className="mt-6 sm:mt-8 text-white/90 drop-shadow-md font-medium text-sm sm:text-base md:text-lg leading-relaxed max-w-md px-2">
            Premium-grade materials. Trusted networks. Deals that deliver.
          </p>
        </div>
      </section>

      <section className="relative w-full bg-[#f8faf8] py-24 sm:py-32 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24">
            <div className="flex-1">
              <h2 className="text-sm font-semibold tracking-widest text-[#85AB8B] uppercase mb-4">About Us</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#1f2a1d] leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                Trading plastics with purpose, <br className="hidden sm:block"/>precision & trust
              </h3>
            </div>
            <div className="flex-1 flex items-center">
              <p className="text-[#4b5b47] text-lg leading-relaxed">
                We are a dedicated plastic trading company connecting manufacturers, recyclers, and buyers across global markets. With deep industry expertise and a commitment to quality, we simplify the supply chain — delivering the right materials, at the right time, every time.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years in business', value: 15, suffix: '+', sub: 'Est. 2009' },
              { label: 'Products supplied', value: 200, suffix: '+', sub: 'Grades & types' },
              { label: 'Countries served', value: 40, suffix: '+', sub: 'Across 6 continents' },
              { label: 'Clients served', value: 1200, suffix: '+', sub: 'Globally trusted' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col border-l border-[#85AB8B]/30 pl-6 group hover:border-[#336443] hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:rounded-r-2xl p-4 -ml-4 transition-all duration-300 cursor-default">
                <span className="text-4xl sm:text-5xl font-medium text-[#336443] mb-2 group-hover:text-[#85AB8B] transition-colors duration-300">
                  <CountUpNumber end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[#1f2a1d] font-semibold mb-1 group-hover:text-[#336443] transition-colors duration-300">{stat.label}</span>
                <span className="text-sm text-[#4b5b47] group-hover:text-[#85AB8B] transition-colors duration-300">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="relative w-full bg-[#1f2a1d] py-24 sm:py-32 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-semibold tracking-widest text-[#85AB8B] uppercase mb-4">Our Products</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Premium-grade materials for every application
              </h3>
            </div>
            <Link to="/products" className="flex items-center gap-2 bg-[#85AB8B] hover:bg-white text-[#1f2a1d] font-semibold px-6 py-3 rounded-full transition-colors duration-300 flex-shrink-0">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <div key={i} className="bg-[#2d3a2a] rounded-3xl overflow-hidden border border-white/5 hover:border-[#85AB8B]/50 transition-colors duration-300 flex flex-col group">
                <div className="h-56 overflow-hidden relative">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-xl font-semibold text-white mb-3">{product.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Certifications & Compliance Section */}
      <section className="relative w-full py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80&auto=format&fit=crop&ixlib=rb-4.1.0" alt="Certifications Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0f150e]/95" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-[#85AB8B] uppercase mb-4">Certifications & Compliance</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              Built on global credibility
            </h3>
            <p className="text-white/70 text-lg">
              We adhere to the highest international standards to guarantee quality, sustainability, and safety across our entire supply chain.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row h-[700px] lg:h-[450px] gap-4 w-full">
            {[
              { title: "ISO Certifications", img: "https://images.unsplash.com/photo-1700727448575-6f1680cd7d75?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.1.0", icon: "🏅", desc: "Internationally recognized standards for business operations." },
              { title: "Quality Standards", img: "https://images.unsplash.com/photo-1567613747256-9f97205d23d2?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.1.0", icon: "✅", desc: "Rigorous lab testing and material inspections." },
              { title: "Eco Compliance", img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.1.0", icon: "🌿", desc: "Strict adherence to global environmental regulations." },
              { title: "Safety Protocol", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop&ixlib=rb-4.1.0", icon: "🦺", desc: "Uncompromising safety standards for all personnel." }
            ].map((cert, i) => (
              <div key={i} className="group relative flex-1 hover:flex-[2] lg:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-white/5">
                <img src={cert.img} alt={cert.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f150e] via-[#0f150e]/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="absolute bottom-0 left-0 p-6 lg:p-8 flex flex-col justify-end h-full">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-2xl mb-4 group-hover:-translate-y-2 transition-transform duration-500 border border-white/20">
                    {cert.icon}
                  </div>
                  <h4 className="text-white font-semibold text-xl lg:text-2xl mb-2 whitespace-nowrap">{cert.title}</h4>
                  <div className="overflow-hidden max-h-0 lg:max-w-0 group-hover:max-h-24 lg:group-hover:max-w-[300px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                    <p className="text-white/80 text-sm mt-2 line-clamp-2">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="relative w-full bg-[#f8faf8] py-24 sm:py-32 overflow-hidden border-t border-[#2d3a2a]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-[#85AB8B] uppercase mb-4">Testimonials</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#1f2a1d] leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Trusted by global leaders
          </h3>
        </div>

        <div className="relative w-full flex flex-col gap-6">
          {/* Fading Edges Overlay */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#f8faf8] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#f8faf8] to-transparent z-10 pointer-events-none" />

          {/* Marquee Row 1 (Right to Left) */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[1, 2].map((set) => (
              <div key={set} className="flex gap-6 px-3">
                {[
                  { text: "Noor Al Madina's consistency in delivering high-grade polymers has completely streamlined our automotive part manufacturing.", author: "James T.", company: "AutoPlast Inc." },
                  { text: "Finding a reliable supplier for recycled granules was tough until we partnered with them. Excellent quality every time.", author: "Sarah M.", company: "EcoPack Solutions" },
                  { text: "Their sourcing capabilities for engineering resins are unmatched. We get what we need, exactly when we need it.", author: "David L.", company: "TechStruct" },
                  { text: "Incredible logistics support. Bulk supply is handled flawlessly, ensuring our production lines never halt.", author: "Michael R.", company: "Global Manufacturing" },
                ].map((t, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-[#2d3a2a]/5 w-[350px] sm:w-[400px] flex-shrink-0 flex flex-col">
                    <div className="flex gap-1 mb-6 text-[#F59E0B]">
                      {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                    </div>
                    <p className="text-[#1f2a1d] text-lg leading-relaxed mb-8 flex-grow font-medium">"{t.text}"</p>
                    <div>
                      <h4 className="font-bold text-[#1f2a1d]">{t.author}</h4>
                      <p className="text-sm text-[#4b5b47]">{t.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative w-full py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1751606803218-67f4b896fc4e?w=1600&q=80&auto=format&fit=crop&ixlib=rb-4.1.0" alt="Why Choose Us Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1f2a1d]/85 mix-blend-multiply" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/3 text-left flex flex-col justify-center">
            <h2 className="text-sm font-semibold tracking-widest text-[#85AB8B] uppercase mb-4">Why Choose Us</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight mb-8" style={{ letterSpacing: '-0.02em' }}>
              The Noor Al Madina Advantage
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              We combine deep industry expertise with a robust global network to deliver unparalleled quality and reliability in plastic trading. Partner with us for a seamless supply chain experience.
            </p>
            <div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#85AB8B] hover:bg-white text-[#1f2a1d] font-semibold px-6 py-3 rounded-full transition-colors duration-300">
                Partner with us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              { title: "Quality Assured", icon: ShieldCheck, desc: "Rigorous testing and certified supply." },
              { title: "Competitive Pricing", icon: TrendingUp, desc: "Market-leading rates globally." },
              { title: "Global Sourcing", icon: Globe, desc: "Direct from top manufacturers." },
              { title: "Fast Delivery", icon: Truck, desc: "Optimized logistics and shipping." },
              { title: "Technical Support", icon: Headset, desc: "24/7 expert material consulting." },
              { title: "Reliable Supply Chain", icon: LinkIcon, desc: "Uninterrupted bulk supply operations." },
              { title: "Industry Expertise", icon: Briefcase, desc: "Over a decade of trading excellence." }
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 group border border-transparent hover:border-white/10">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#85AB8B] group-hover:bg-[#85AB8B] group-hover:text-[#1f2a1d] transition-colors duration-300 shadow-sm mt-1">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="text-white font-semibold text-lg mb-1">{feature.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
