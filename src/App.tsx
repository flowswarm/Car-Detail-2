import { motion } from "motion/react";
import { 
  Shield, 
  Sparkles, 
  Droplets, 
  ChevronRight, 
  Menu, 
  X, 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Play
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-brand-dark/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-cyan rounded-full flex items-center justify-center">
            <Shield className="text-brand-dark w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tighter uppercase">LuxeDetail <span className="text-brand-cyan">Pro</span></span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {["Services", "Packages", "Gallery", "Process"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-brand-cyan transition-colors uppercase tracking-widest">
              {item}
            </a>
          ))}
          <button className="bg-white text-brand-dark px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-cyan transition-colors flex items-center gap-2">
            Book Now <ChevronRight size={14} />
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {["Services", "Packages", "Gallery", "Process"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-display" onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <button className="bg-brand-cyan text-brand-dark py-4 rounded-xl font-bold uppercase tracking-widest">
            Book Appointment
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1603584173870-7f3ca99a4741?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury car detailing" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-brand-cyan font-display font-medium tracking-[0.3em] uppercase text-xs mb-6">
            The Gold Standard of Detailing
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
            BUILT FOR <span className="text-brand-cyan">PERFECTION.</span><br />
            READY FOR THE SHOWROOM.
          </h1>
          <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
            Elevate your vehicle's aesthetics with our precision-crafted detailing services. 
            From ceramic coatings to full interior restoration, we define automotive excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-brand-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-brand-cyan transition-all flex items-center gap-3 group">
              Find My Package <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="glass px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3">
              View Gallery
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="flex flex-col gap-4 items-end">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-white/20" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/40">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const IntroSection = () => {
  return (
    <section id="about" className="py-32 bg-white text-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark/40">
              About LuxeDetail
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-12">
              Designed to preserve the beauty. Engineered for ultimate protection without limits.
            </h2>
            <div className="w-full h-[1px] bg-brand-dark/10 mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-lg text-brand-dark/70 leading-relaxed">
                LuxeDetail Pro blends iconic automotive care heritage with modern chemical innovation. 
                Built with aerospace-grade materials, our advanced ceramic technology and purposeful design 
                ensure your vehicle remains in pristine condition.
              </p>
              <p className="text-lg text-brand-dark/70 leading-relaxed">
                Every stroke, every buff, and every application is made to handle extreme conditions 
                while keeping your vehicle's finish looking flawless—on the road or in the collection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      id: "01",
      title: "Paint Correction",
      desc: "Advanced multi-stage polishing to remove swirls and scratches for absolute clarity.",
      img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1931&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Ceramic Coating",
      desc: "Smart molecular bonding delivers instant protection and hydrophobic properties on any surface.",
      img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2071&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Interior Detail",
      desc: "Deep cleaning and conditioning using premium materials designed for comfort and longevity.",
      img: "https://images.unsplash.com/photo-1599256629825-4265e1d2d0b6?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-[80vh]">
      {services.map((service) => (
        <div key={service.id} className="relative group overflow-hidden border-r border-white/5 last:border-r-0 h-[500px] md:h-full">
          <img 
            src={service.img} 
            alt={service.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
          
          <div className="relative h-full p-12 flex flex-col justify-between z-10">
            <div className="flex justify-between items-start">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">{service.title}</span>
              <span className="text-6xl font-display font-bold text-white/10 group-hover:text-brand-cyan/20 transition-colors">{service.id}</span>
            </div>
            
            <div>
              <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-brand-cyan transition-colors">{service.title}</h3>
              <p className="text-white/60 leading-relaxed mb-8 max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                {service.desc}
              </p>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-cyan group-hover:border-brand-cyan transition-all">
                <ChevronRight className="text-white group-hover:text-brand-dark" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop" 
          alt="Luxury car" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="relative aspect-video rounded-2xl overflow-hidden group mb-12">
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" 
                alt="Detailing process" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform">
                  <Play className="fill-white text-white ml-1" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-display font-bold mb-6">Pure Ceramic Power</h2>
            <p className="text-white/40 mb-12 uppercase tracking-[0.2em] text-sm">Performance redefined for best experience</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Hardness", value: "9H+" },
                { label: "Gloss Level", value: "100%" },
                { label: "UV Protection", value: "99%" },
                { label: "Warranty", value: "5yr" }
              ].map((stat) => (
                <div key={stat.label} className="border-l border-white/10 pl-6">
                  <div className="text-3xl font-display font-bold mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InteractiveDetail = () => {
  const [activeHotspot, setActiveHotspot] = useState(0);

  const hotspots = [
    { id: 0, x: "25%", y: "45%", title: "Nano-Ceramic Shield", desc: "A permanent molecular bond that creates a glass-like barrier against environmental contaminants." },
    { id: 1, x: "65%", y: "30%", title: "Hydrophobic Surface", desc: "Water beads off instantly, carrying away dirt and grime to keep your car cleaner for longer." },
    { id: 2, x: "80%", y: "70%", title: "High-Gloss Finish", desc: "Enhances the depth and clarity of your paint for a mirror-like shine that lasts years." }
  ];

  return (
    <section id="process" className="py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-5xl font-display font-bold mb-6">Designed for performance.<br />Styled for perfection.</h2>
          <div className="flex justify-between items-end">
             <p className="text-white/40 max-w-md leading-relaxed">
              LuxeDetail Pro combines bold design with advanced engineering to deliver confident protection on every journey.
            </p>
            <button className="glass px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
              Find My Dream Detail <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden aspect-[21/9]">
          <img 
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop" 
            alt="Car detail" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          
          {hotspots.map((spot) => (
            <div 
              key={spot.id}
              className="absolute cursor-pointer group"
              style={{ left: spot.x, top: spot.y }}
              onClick={() => setActiveHotspot(spot.id)}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${activeHotspot === spot.id ? "bg-brand-cyan scale-125" : "bg-white/20 backdrop-blur-md hover:bg-white/40"}`}>
                <div className={`w-2 h-2 rounded-full ${activeHotspot === spot.id ? "bg-brand-dark" : "bg-white"}`} />
              </div>
              
              {activeHotspot === spot.id && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 glass p-6 rounded-2xl z-20"
                >
                  <div className="w-10 h-10 bg-brand-cyan/20 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="text-brand-cyan w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold mb-2">{spot.title}</h4>
                  <p className="text-xs text-white/60 leading-relaxed">{spot.desc}</p>
                </motion.div>
              )}
            </div>
          ))}

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            {hotspots.map((spot) => (
              <button 
                key={spot.id}
                onClick={() => setActiveHotspot(spot.id)}
                className={`w-12 h-1 rounded-full transition-all ${activeHotspot === spot.id ? "bg-brand-cyan" : "bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const OverviewSection = () => {
  return (
    <section className="py-32 bg-white text-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-display font-bold mb-8">Built to explore.<br />Ready for every terrain.</h2>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark/40 italic">LuxeDetail Overview</span>
          </div>
          
          <div>
            <p className="text-lg text-brand-dark/70 leading-relaxed mb-12">
              LuxeDetail Pro is engineered for drivers who demand freedom beyond the pavement. 
              With advanced surface technology, rugged protection, and iconic results, 
              we deliver confidence, control, and capability—whether navigating city streets or conquering untamed landscapes.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: Shield, title: "Advanced 9H Performance", desc: "Maximum scratch resistance and chemical protection." },
                { icon: Sparkles, title: "Rugged Exterior Design", desc: "Enhanced aesthetics that withstand the harshest environments." },
                { icon: Droplets, title: "Comfort Meets Capability", desc: "Interior restoration that brings back the new-car feel." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center shrink-0 group-hover:bg-brand-cyan transition-colors">
                    <item.icon className="text-white group-hover:text-brand-dark w-5 h-5" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-display font-bold text-xl mb-2">{item.title}</h4>
                    <div className="w-full h-[1px] bg-brand-dark/10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
          {[
            "https://images.unsplash.com/photo-1542362567-b055002b91f4?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop"
          ].map((img, i) => (
            <div key={i} className="aspect-[4/5] rounded-2xl overflow-hidden bg-brand-dark/5">
              <img src={img} alt="Car showcase" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden mb-32 group">
          <img 
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop" 
            alt="Ready to ride" 
            className="w-full h-[400px] object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent flex flex-col justify-center p-12 md:p-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 max-w-xl leading-[0.9]">Ready to Ride Adventure Car?</h2>
            <button className="w-fit glass px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all flex items-center gap-3">
              Find My Dream Detail <ArrowUpRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-white/5 pb-12">
          {[
            { icon: Youtube, label: "Youtube" },
            { icon: Twitter, label: "Twitter" },
            { icon: Instagram, label: "Instagram" },
            { icon: Facebook, label: "Facebook" }
          ].map((social) => (
            <a key={social.label} href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center group-hover:bg-brand-cyan group-hover:border-brand-cyan transition-all">
                <social.icon className="w-4 h-4 text-white group-hover:text-brand-dark" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold group-hover:text-brand-cyan transition-colors">{social.label}</span>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <h3 className="text-3xl font-display font-bold mb-6">Built for adventure.<br />Trusted for every journey.</h3>
            <div className="flex items-center gap-2 mt-12 opacity-60">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Shield className="text-brand-dark w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl tracking-tighter uppercase">LuxeDetail <span className="text-brand-cyan">Pro</span></span>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">Location</h4>
              <p className="text-sm text-white/60 leading-relaxed">
                2118 Thornridge Cir. Syracuse,<br />Connecticut 35624
              </p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Packages</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Experience</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">Contact</h4>
              <p className="text-sm text-white/60 mb-4">LuxeDetail@gmail.com</p>
              <p className="text-sm text-white/60">+1 1234 5423 345</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[10px] uppercase tracking-widest text-white/40">
          <p>©LuxeDetail Pro Studio. All Right Reserved</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <IntroSection />
      <ServicesGrid />
      <StatsSection />
      <InteractiveDetail />
      <OverviewSection />
      <Footer />
    </div>
  );
}
