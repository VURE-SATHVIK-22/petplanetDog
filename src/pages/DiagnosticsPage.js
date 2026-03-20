import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Activity, ShieldAlert, Sparkles, ChevronRight, Dna } from 'lucide-react';
import GlassButton from '../components/GlassButton';

const DiagnosticsPage = () => {
  const diagnosticModules = [
    {
      title: "Hematology & Biochemistry",
      icon: <Activity size={32} />,
      desc: "Deep analysis of blood parameters to identify metabolic or infectious conditions.",
      specs: ["CBC + Differential", "Kidney Function (KFT)", "Liver Profile (LFT)", "Blood Sugar Monitoring"]
    },
    {
      title: "Microscopic Pathology",
      icon: <Microscope size={32} />,
      desc: "Cellular and histopathological examination for accurate tumor and parasite detection.",
      specs: ["Skin Scraping", "Urine Sediments", "Fecal Analysis", "Tissue Cytology"]
    },
    {
      title: "Genetic & Immune Screening",
      icon: <Dna size={32} />,
      desc: "Advanced protocols for detecting congenital defects and immune-mediated pathologies.",
      specs: ["Breed Specific Genes", "Antibody Titers", "Allergy Profiles", "Endocrine Panels"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-ios-bg"
    >
      {/* Lab Header */}
      <section className="pt-40 pb-20 relative overflow-hidden bg-white">
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-end">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ios-blue/5 backdrop-blur-md rounded-full border border-ios-blue/10">
                <ShieldAlert size={14} className="text-ios-blue" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-ios-blue">Advanced Diagnostics</span>
              </div>
              <h1 className="text-gradient">Best Diagnostic <br /> <span className="italic font-normal">Lab in Hyderabad.</span></h1>
            </div>
            <p className="text-luxury text-2xl pb-4">
              Our high-precision diagnostic lab at Dr. Suresh Pet Care Hospital and Surgical Center ensures expert surgical care and complete pet checkups in Hyderabad.
            </p>
          </div>
        </div>
        
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0071E3 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </section>

      {/* Diagnostics Grid */}
      <section className="py-40">
        <div className="section-container">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
              {diagnosticModules.map((module, i) => (
                <div key={i} className="p-16 glass-premium !bg-transparent !border-ios-label/5 hover:!bg-white hover:z-10 group transition-all duration-700">
                   <div className="text-ios-blue mb-10 group-hover:scale-110 transition-transform duration-700">
                      {module.icon}
                   </div>
                   <div className="space-y-8">
                      <h3 className="text-3xl font-display font-bold">{module.title}</h3>
                      <p className="text-luxury text-lg">{module.desc}</p>
                      
                      <div className="space-y-4 pt-4">
                         {module.specs.map((spec, j) => (
                           <div key={j} className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-ios-secondaryLabel border-b border-ios-label/5 pb-4 group-hover:text-ios-label transition-colors">
                              {spec}
                              <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" />
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Case Support */}
      <section className="py-40 border-t border-ios-label/5">
         <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="space-y-12">
                  <h2 className="text-5xl leading-tight text-gradient">The Diagnostic <br /> <span className="italic font-normal">Advantage.</span></h2>
                  <p className="text-luxury text-xl">
                    By synthesizing clinical data with surgical expertise, we eliminate diagnostic ambiguity, ensuring your pet is treated for the right condition, every time.
                  </p>
                  <div className="flex flex-wrap gap-6">
                     <GlassButton variant="primary">Access Lab Portal</GlassButton>
                     <GlassButton variant="secondary">Review Methodology</GlassButton>
                  </div>
               </div>
                <div className="relative">
                   <div className="glass-premium !p-6 !rounded-[3rem] shadow-glass-heavy overflow-hidden bg-white/40 border-white/30">
                      <img 
                        src="/images/WhatsApp Image 2026-01-23 at 11.59.20 PM.jpeg" 
                        alt="Dr. Suresh Diagnostic Lab" 
                        className="w-full aspect-video object-cover rounded-[2rem] mb-8"
                      />
                      <div className="space-y-6 px-6">
                        <div className="flex items-center gap-6">
                           <div className="w-16 h-16 bg-ios-blue text-white rounded-2xl flex items-center justify-center shadow-lg shadow-ios-blue/20">
                              <Sparkles size={24} />
                           </div>
                           <div>
                              <h4 className="text-xl font-bold">Lab Excellence</h4>
                              <p className="text-xs uppercase tracking-widest font-bold text-ios-secondaryLabel mt-1 opacity-60">Verified Results</p>
                           </div>
                        </div>
                        <p className="text-luxury italic font-medium">
                          "Precision in diagnosis is the foundation of surgical success at Dr. Suresh's."
                        </p>
                      </div>
                   </div>
                   {/* Backdrop light */}
                   <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-ios-blue/5 blur-[120px] rounded-full -z-10" />
                </div>
            </div>
         </div>
      </section>
    </motion.div>
  );
};

export default DiagnosticsPage;
