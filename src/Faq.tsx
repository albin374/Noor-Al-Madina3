import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of plastic materials do you supply?",
      answer: "We supply a comprehensive range of materials including virgin plastic granules, recycled plastic granules, engineering plastics, polymer resins, plastic compounds, masterbatches, and various specialized additives."
    },
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer: "Our Minimum Order Quantity varies depending on the specific grade and type of material. However, for most standard polymers, our MOQ typically starts at one full container load (FCL) to ensure cost-effective logistics."
    },
    {
      question: "Do you handle international shipping and customs?",
      answer: "Yes, our dedicated logistics team manages end-to-end global shipping. We handle freight forwarding, customs clearance, and all necessary export/import documentation to ensure seamless delivery to your facility."
    },
    {
      question: "Are your materials certified for specific industries like medical or food packaging?",
      answer: "Absolutely. We supply certified medical-grade and food-grade plastics that comply with FDA, ISO, and REACH standards. We provide full material data sheets (MDS) and compliance certificates upon request."
    },
    {
      question: "How do you ensure the quality of recycled granules?",
      answer: "Quality is our top priority. We partner exclusively with advanced recycling facilities that utilize stringent sorting, washing, and extrusion processes. Every batch of recycled granules undergoes rigorous laboratory testing for tensile strength, melt flow index, and purity."
    },
    {
      question: "Can you help us source a rare or specific polymer grade?",
      answer: "Yes, our global network of manufacturers allows us to source hard-to-find or highly specialized polymer grades. Our material consultants will work closely with you to identify and procure the exact specifications you need."
    }
  ];

  return (
    <main className="w-full bg-[#f8faf8] min-h-screen pb-24">
      {/* Header Section */}
      <section className="relative w-full pt-32 pb-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/services_banner.png" alt="FAQ Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1f2a1d]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1d]/90 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-6" style={{ letterSpacing: '-0.02em', fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-[#85AB8B] text-lg sm:text-xl font-medium">
            Everything you need to know about partnering with Noor Al Madina.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-[#2d3a2a]/5 p-6 sm:p-10">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border-b border-[#2d3a2a]/10 last:border-0 overflow-hidden transition-colors duration-300 ${openIndex === index ? 'bg-[#f8faf8] rounded-2xl p-6 -mx-6' : 'py-6'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className={`text-lg font-semibold pr-8 transition-colors duration-300 ${openIndex === index ? 'text-[#336443]' : 'text-[#1f2a1d] group-hover:text-[#85AB8B]'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#336443] text-white rotate-180' : 'bg-gray-100 text-[#1f2a1d] group-hover:bg-[#85AB8B] group-hover:text-white'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#4b5b47] leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-3xl mx-auto px-4 mt-20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#85AB8B]/20 rounded-full text-[#336443] mb-6">
          <MessageCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-semibold text-[#1f2a1d] mb-4">Still have questions?</h3>
        <p className="text-[#4b5b47] mb-8">
          Can't find the answer you're looking for? Our dedicated team is ready to help you with any specific inquiries.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1f2a1d] hover:bg-[#336443] text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-300 shadow-md">
          Contact Support
        </Link>
      </section>
    </main>
  );
}
