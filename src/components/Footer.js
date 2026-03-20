import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Instagram, Twitter, Facebook, ExternalLink, ArrowUpRight } from 'lucide-react';
import GlassCard from './GlassCard';

const Footer = () => {
  return (
    <footer className="relative pt-40 pb-20 bg-ios-bg border-t border-ios-label/5 overflow-hidden">
      {/* Dynamic Background */}
      <div className="hidden" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-12">
             <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 border-b border-ios-label/5 pb-20">
                <div className="space-y-6 max-w-xl">
                   <Link to="/" className="flex items-center gap-4 group">
                      <div className="bg-ios-blue p-3 rounded-2xl text-white shadow-lg shadow-ios-blue/20 group-hover:rotate-[15deg] transition-all duration-500">
                        <PawPrint size={28} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display font-bold text-2xl leading-none tracking-tight whitespace-nowrap">Dr. Suresh's Pet Care</span>
                        <span className="text-[9px] uppercase tracking-[0.3em] text-ios-secondaryLabel font-bold opacity-80 mt-1 whitespace-nowrap">Hospital & Surgical Center</span>
                      </div>
                   </Link>
                   <p className="text-luxury text-xl">
                      Providing the best veterinary and surgical care for your pets with over 20+ years of experience.
                   </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                   {[Instagram, Twitter, Facebook].map((Icon, i) => (
                     <button key={i} className="w-16 h-16 rounded-[1.5rem] bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-ios-blue hover:text-white transition-all duration-700">
                        <Icon size={20} />
                     </button>
                   ))}
                </div>
             </div>
          </div>

          <div className="lg:col-span-8">
             <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
               <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-ios-secondaryLabel mb-8">Navigation</h4>
                  <ul className="space-y-4">
                     {[
                       {name: 'Home', path: '/'}, 
                       {name: 'About Us', path: '/about'}, 
                       {name: 'Services', path: '/services'}, 
                       {name: 'Surgeries', path: '/surgeries'},
                       {name: 'Branches', path: '/branches'},
                       {name: 'Blog', path: '/blog'}
                     ].map((link) => (
                       <li key={link.name}>
                         <Link to={link.path} className="text-lg font-bold hover:text-ios-blue transition-colors flex items-center group">
                            {link.name}
                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                         </Link>
                       </li>
                     ))}
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-ios-secondaryLabel mb-8">Sanctuary Access</h4>
                  <ul className="space-y-4">
                     {['Emergency', 'Concierge', 'Appointments', 'Clinical Records'].map((link) => (
                       <li key={link}>
                         <button className="text-lg font-bold hover:text-ios-blue transition-colors flex items-center group">
                            {link}
                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                         </button>
                       </li>
                     ))}
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-ios-secondaryLabel mb-8">Direct Contact</h4>
                  <div className="space-y-6">
                     <div>
                        <p className="text-lg font-bold">9848954921</p>
                        <p className="text-[10px] uppercase font-bold text-ios-secondaryLabel tracking-widest mt-1">24/7 Hotline</p>
                     </div>
                     <div>
                         <p className="text-sm font-bold opacity-70">Beside Line Of Vivekanandha Park<br />Hyderabad, 500070</p>
                     </div>
                  </div>
               </div>
             </div>
          </div>

          <div className="lg:col-span-4">
             <GlassCard className="!bg-ios-blue !border-ios-blue/20 !p-10 !rounded-[2.5rem] shadow-glass-heavy text-white">
                <h4 className="text-2xl font-display font-bold leading-tight mb-6">Request Priority Access</h4>
                <p className="text-white/70 text-sm mb-8">Receive early notifications on seasonal health protocols and clinical updates.</p>
                <div className="relative group">
                   <input 
                     type="email" 
                     placeholder="email-signature@domain.com" 
                     className="w-full bg-white/10 border border-white/20 rounded-2xl py-5 px-6 placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                   />
                   <button className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-ios-blue rounded-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl">
                      <ExternalLink size={18} />
                   </button>
                </div>
             </GlassCard>
          </div>
        </div>

        <div className="mt-40 pt-10 border-t border-ios-label/5 flex flex-col md:flex-row justify-between gap-6">
           <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
              © 2026 Dr. Suresh Pet Care Hospital and Surgical Center — Signature of Excellence.
           </p>
           <div className="flex gap-10">
              <button className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">Privacy Shield</button>
              <button className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">Service Protocol</button>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;