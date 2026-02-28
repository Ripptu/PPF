import React from 'react';
import { Play, Youtube, Instagram, Mail, TrendingUp, Users, Star, ArrowRight, Video, Clock, MessageCircle, FileText, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-black font-sans overflow-x-hidden selection:bg-amber-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[900px] overflow-hidden bg-white">
        {/* Animated Background Image */}
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://s1.directupload.eu/images/260227/h52y9rxz.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Subtle Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/90 z-10 pointer-events-none" />
        
        <div className="relative z-20 w-full max-w-[1440px] mx-auto h-full px-6 md:px-12 lg:px-20">
          {/* Navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-between pt-10"
          >
            <div className="text-2xl md:text-3xl font-serif italic font-bold tracking-tight">Private Power Files</div>
            <div className="hidden lg:flex items-center space-x-10 text-[15px] font-semibold">
              <a href="#videos" className="hover:text-amber-600 transition-colors">Essays</a>
              <a href="#about" className="hover:text-amber-600 transition-colors">About</a>
              <a href="#sponsors" className="hover:text-amber-600 transition-colors">Partnerships</a>
              <a href="#community" className="hover:text-amber-600 transition-colors">The Vault</a>
            </div>
            <button className="bg-black text-white px-6 md:px-8 py-3 rounded-full text-[14px] md:text-[15px] font-semibold hover:bg-amber-600 transition-colors flex items-center gap-2 shadow-lg hover:shadow-amber-500/20">
              <Mail className="w-4 h-4" />
              <span>Inquiries</span>
            </button>
          </motion.nav>

          {/* Hero Content */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Hey, there */}
            <div className="absolute top-[22%] left-0 right-0 flex justify-center hidden md:flex px-8">
              <div className="flex justify-between w-full max-w-[1050px]">
                <motion.span 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="font-serif italic font-normal text-[120px] lg:text-[150px] leading-none tracking-tight text-black/90 drop-shadow-sm"
                >
                  Hey,
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="font-serif italic font-normal text-[120px] lg:text-[150px] leading-none tracking-tight text-black/90 drop-shadow-sm pr-4"
                >
                  there
                </motion.span>
              </div>
            </div>

            {/* Left Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-[35%] md:top-[45%] left-6 md:left-12 lg:left-20 flex items-center bg-white/80 backdrop-blur-xl px-5 py-2.5 rounded-full shadow-xl pointer-events-auto border border-white/50 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-3 h-3 mr-3">
                <div className="absolute w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></div>
                <div className="relative w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-[13px] md:text-[14px] font-semibold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Open for Brand Partnerships</span>
            </motion.div>

            {/* Right Text */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute top-[50%] md:top-[45%] right-6 md:right-12 lg:right-20 max-w-[320px] text-left md:text-right pointer-events-auto bg-white/40 md:bg-transparent p-5 md:p-0 rounded-3xl backdrop-blur-md md:backdrop-blur-none border border-white/20 md:border-none shadow-2xl md:shadow-none"
            >
              <p className="text-[14px] md:text-[15px] font-semibold leading-relaxed text-black/90">
                Producing meticulously researched<br className="hidden md:block"/>
                video essays, deep dives, and<br className="hidden md:block"/>
                mini-documentaries.
              </p>
              <div className="flex gap-3 mt-5 justify-start md:justify-end">
                <a href="#" className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center hover:bg-amber-600 hover:scale-110 transition-all shadow-lg"><Youtube className="w-5 h-5" /></a>
                <a href="#" className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center hover:bg-amber-600 hover:scale-110 transition-all shadow-lg"><Instagram className="w-5 h-5" /></a>
              </div>
            </motion.div>

            {/* Bottom Left Text */}
            <div className="absolute bottom-12 md:bottom-16 left-6 md:left-12 lg:left-20 pointer-events-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-display font-bold text-[80px] md:text-[120px] xl:text-[140px] leading-[0.85] tracking-[-0.03em] m-0 p-0 text-black drop-shadow-lg"
              >
                I AM<br/>
                <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">NICOLE</span>
              </motion.h1>
            </div>

            {/* Bottom Right Text */}
            <div className="absolute bottom-12 md:bottom-16 right-6 md:right-12 lg:right-20 text-right pointer-events-auto hidden sm:block">
              <motion.h2 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-display font-bold text-[50px] md:text-[70px] xl:text-[85px] leading-[0.9] tracking-[-0.03em] m-0 p-0 text-black/90 drop-shadow-lg"
              >
                VIDEO<br/>ESSAYIST &<br/>RESEARCHER
              </motion.h2>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (Media Kit Style) */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 border-t-4 border-amber-500 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-amber-500/5 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 text-center divide-x-0 md:divide-x divide-white/10"
          >
            {[
              { icon: Users, value: "1.2M+", label: "Subscribers" },
              { icon: TrendingUp, value: "15M", label: "Monthly Views" },
              { icon: Clock, value: "14:30", label: "Avg. Watch Time" },
              { icon: BookOpen, value: "45+", label: "Documentaries" }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center justify-center group">
                <stat.icon className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 group-hover:text-amber-400 transition-transform duration-300" />
                <h4 className="text-4xl md:text-5xl font-display font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">{stat.value}</h4>
                <p className="text-gray-400 mt-2 text-sm md:text-base font-medium uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section id="videos" className="relative w-full bg-gradient-to-b from-[#fafafa] to-[#f0f0f0] py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
          >
            <div>
              <h3 className="font-display font-bold text-[50px] md:text-[75px] leading-none tracking-[-0.03em] bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">LATEST ESSAYS</h3>
              <p className="text-gray-500 mt-4 text-lg max-w-xl font-medium">Deep dives into internet culture, economics, and the hidden systems that shape our world.</p>
            </div>
            <button className="flex items-center gap-2 font-bold text-[15px] border-b-2 border-black pb-1 hover:text-amber-600 hover:border-amber-600 transition-all group">
              View All Documentaries <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              { img: 'https://picsum.photos/seed/tech1/800/450', title: 'The Dark Psychology of Casino Apps', views: '2.4M views', time: '1 week ago', duration: '24:15' },
              { img: 'https://picsum.photos/seed/business/800/450', title: 'How One Company Monopolized the Internet', views: '1.8M views', time: '3 weeks ago', duration: '31:40' },
              { img: 'https://picsum.photos/seed/abstract/800/450', title: 'The Hidden Cost of "Free" Shipping', views: '3.1M views', time: '1 month ago', duration: '19:50' },
            ].map((video, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group cursor-pointer">
                <div className="relative rounded-[32px] overflow-hidden aspect-video mb-6 shadow-xl shadow-black/5 ring-1 ring-black/5">
                  <img src={video.img} alt={video.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                      <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                    {video.duration}
                  </div>
                </div>
                <h4 className="font-bold text-2xl leading-tight mb-3 group-hover:text-amber-600 transition-colors">{video.title}</h4>
                <div className="flex items-center text-sm text-gray-500 font-semibold">
                  <span>{video.views}</span>
                  <span className="mx-3 w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{video.time}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sponsorships & Services */}
      <section id="sponsors" className="relative bg-[#0a0a0a] text-white py-32 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-24"
          >
            <h3 className="font-display font-bold text-[50px] md:text-[80px] leading-none tracking-[-0.03em] mb-6">PARTNER WITH ME</h3>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium">
              Looking to reach a highly educated, analytical audience? I offer seamless, high-retention integrations that respect the viewer's intelligence.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
          >
            {[
              { icon: Video, title: "Deep-Dive Integrations", desc: "A highly scripted 60-90 second mid-roll integration that naturally connects your brand's value to the documentary's core topic." },
              { icon: Star, title: "Dedicated Mini-Docs", desc: "An entire 15-20 minute video essay sponsored by and subtly themed around your brand's industry or mission." },
              { icon: FileText, title: "Newsletter Placements", desc: "Reach my most dedicated viewers directly in their inbox with a sponsored segment in the weekly 'Research Notes' dispatch." }
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group relative bg-[#141414] p-10 rounded-[40px] border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <service.icon className="w-12 h-12 text-amber-500 mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-2xl font-bold mb-4 relative z-10">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed relative z-10 text-lg">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Brands Marquee */}
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="border-t border-white/10 pt-20 overflow-hidden relative"
          >
            <p className="text-center text-sm font-bold tracking-widest text-gray-500 uppercase mb-12">Trusted by brands that value education</p>
            
            {/* Gradient masks for smooth fade on edges */}
            <div className="absolute left-0 top-20 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
            <div className="absolute right-0 top-20 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
            
            <div className="flex w-[200%] animate-marquee opacity-50 hover:opacity-100 transition-opacity duration-500">
              <div className="flex w-1/2 justify-around items-center">
                <h5 className="font-display font-bold text-4xl tracking-wider">BLINKIST</h5>
                <h5 className="font-display font-bold text-4xl tracking-wider">SQUARESPACE</h5>
                <h5 className="font-display font-bold text-4xl tracking-wider">BRILLIANT</h5>
                <h5 className="font-display font-bold text-4xl tracking-wider">SKILLSHARE</h5>
                <h5 className="font-display font-bold text-4xl tracking-wider">MAGELLANTV</h5>
              </div>
              <div className="flex w-1/2 justify-around items-center">
                <h5 className="font-display font-bold text-4xl tracking-wider">BLINKIST</h5>
                <h5 className="font-display font-bold text-4xl tracking-wider">SQUARESPACE</h5>
                <h5 className="font-display font-bold text-4xl tracking-wider">BRILLIANT</h5>
                <h5 className="font-display font-bold text-4xl tracking-wider">SKILLSHARE</h5>
                <h5 className="font-display font-bold text-4xl tracking-wider">MAGELLANTV</h5>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community / Private Power Files */}
      <section id="community" className="py-32 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 text-black relative overflow-hidden">
        {/* Animated Background Mesh */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-50%] right-[-10%] w-[1000px] h-[1000px] bg-orange-400/50 rounded-full blur-[100px] pointer-events-none"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-50%] left-[-10%] w-[800px] h-[800px] bg-yellow-300/40 rounded-full blur-[100px] pointer-events-none"
        />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="lg:w-1/2"
          >
            <h3 className="font-display font-bold text-[60px] md:text-[90px] leading-[0.9] tracking-[-0.03em] mb-8 drop-shadow-md">
              ACCESS THE<br/>RESEARCH<br/>VAULT
            </h3>
            <p className="text-2xl font-medium mb-10 max-w-lg text-black/80 leading-relaxed">
              Get exclusive access to my raw research notes, uncut expert interviews, and help decide which rabbit hole we dive into next.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-900 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-black/20">
                Join on Patreon
              </button>
              <button className="bg-transparent border-2 border-black text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all">
                Read the Newsletter
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }} 
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2 relative w-full max-w-lg mx-auto lg:mx-0"
          >
            <div className="aspect-square bg-black/5 backdrop-blur-3xl rounded-full p-4 relative shadow-2xl border border-white/20">
               <img src="https://picsum.photos/seed/library/800/800" alt="Research Vault" className="w-full h-full object-cover rounded-full opacity-90 shadow-inner" referrerPolicy="no-referrer" />
               
               {/* Floating badges with continuous animation */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-10 right-0 md:-right-10 bg-white/90 backdrop-blur-md text-black px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-3 rotate-12 border border-white/50"
               >
                 <FileText className="w-5 h-5 text-amber-600" fill="currentColor" /> Source Materials
               </motion.div>
               
               <motion.div 
                 animate={{ y: [0, 15, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-20 left-0 md:-left-10 bg-white/90 backdrop-blur-md text-black px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-3 -rotate-6 border border-white/50"
               >
                 <MessageCircle className="w-5 h-5 text-amber-600" fill="currentColor" /> Debate Discord
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-3xl font-serif italic font-bold tracking-tight">Private Power Files</div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="#" className="text-gray-500 hover:text-amber-600 font-semibold transition-colors">Media Kit (PDF)</a>
            <a href="#" className="text-gray-500 hover:text-amber-600 font-semibold transition-colors">Imprint</a>
            <a href="#" className="text-gray-500 hover:text-amber-600 font-semibold transition-colors">Privacy Policy</a>
          </div>
          <div className="text-gray-400 text-sm font-medium">
            © 2026 Nicole. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
