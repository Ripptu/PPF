import React, { useState, useEffect } from 'react';
import { Play, Youtube, Instagram, Mail, TrendingUp, Users, Star, ArrowRight, Video, Clock, MessageCircle, FileText, BookOpen, ChevronDown, Quote, Send, Activity, CheckCircle2, X } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'motion/react';

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM20.16 9.6C16.44 7.38 9.54 7.2 5.58 8.4c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.68-1.38 12.24-1.14 16.62 1.5.539.3.719 1.02.419 1.56-.299.42-1.02.599-1.559.24z"/>
  </svg>
);

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

function AnimatedNumber({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value >= 1000000) return (latest / 1000000).toFixed(1) + "M" + suffix;
    if (value >= 1000) return (latest / 1000).toFixed(0) + "K" + suffix;
    return Math.round(latest) + suffix;
  });

  useEffect(() => {
    const controls = animate(count, value, { duration, ease: "easeOut" });
    return controls.stop;
  }, [count, value, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lang, setLang] = useState<'en' | 'de'>('en');
  const [isPodcastPlaying, setIsPodcastPlaying] = useState(false);

  useEffect(() => {
    // Auto-detect language based on browser locale
    const userLang = navigator.language || (navigator as any).userLanguage;
    if (userLang && (userLang.startsWith('de') || userLang === 'de-DE' || userLang === 'de-CH' || userLang === 'de-AT')) {
      setLang('de');
    } else {
      setLang('en');
    }
  }, []);

  const translations = {
    en: {
      nav: { essays: "Essays", about: "About", partnerships: "Partnerships", vault: "The Vault" },
      inquiries: "Inquiries",
      hero: { hey: "Hey,", there: "there", badge: "Open for Brand Partnerships", desc1: "Producing meticulously researched", desc2: "video essays, deep dives, and", desc3: "mini-documentaries.", role1: "VIDEO", role2: "ESSAYIST &", role3: "RESEARCHER" },
      stats: { live: "Live YouTube API Sync", subs: "Subscribers", views: "Monthly Views", time: "Avg. Watch Time", docs: "Documentaries" },
      videos: { title: "LATEST ESSAYS", desc: "Deep dives into internet culture, economics, and the hidden systems that shape our world.", viewAll: "View All Documentaries", v1Title: "The Dark Psychology of Casino Apps", v1Views: "2.4M views", v1Time: "1 week ago", v2Title: "How One Company Monopolized the Internet", v2Views: "1.8M views", v2Time: "3 weeks ago", v3Title: "The Hidden Cost of 'Free' Shipping", v3Views: "3.1M views", v3Time: "1 month ago" },
      podcast: { title: "THE AUDIO FILES", desc: "Listen to the essays and exclusive interviews on the go.", epTitle: "JFK: The Unsolved Mystery", epDesc: "A deep dive into the events of November 22, 1963." },
      timeline: { title: "THE JOURNEY", m1Year: "2021", m1Text: "Channel Launched", m2Year: "2023", m2Text: "1 Million Subscribers", m3Year: "2024", m3Text: "First Major Award" },
      demographics: { title: "AUDIENCE DEMOGRAPHICS", male: "75% Male", age: "18-34 Years", region: "60% DACH", edu: "High Education" },
      howIWork: { title: "METHODOLOGY", step1: "Idea", step2: "Deep Research", step3: "Script", step4: "Animation", step5: "Upload" },
      sponsors: { title: "PARTNER WITH ME", desc: "Looking to reach a highly educated, analytical audience? I offer seamless, high-retention integrations that respect the viewer's intelligence.", s1Title: "Deep-Dive Integrations", s1Desc: "A highly scripted 60-90 second mid-roll integration that naturally connects your brand's value to the documentary's core topic.", s2Title: "Dedicated Mini-Docs", s2Desc: "An entire 15-20 minute video essay sponsored by and subtly themed around your brand's industry or mission.", s3Title: "Newsletter Placements", s3Desc: "Reach my most dedicated viewers directly in their inbox with a sponsored segment in the weekly 'Research Notes' dispatch.", trusted: "Trusted by brands that value education" },
      testimonials: { title: "Declassified Feedback", desc: "What other creators and experts say about the research.", t1Quote: "Nicole's ability to distill complex economic theories into engaging, 20-minute narratives is unmatched on this platform.", t1Author: "Creator X", t1Role: "3M+ Subscribers", t2Quote: "The level of journalistic integrity in the 'Private Power Files' series sets a new standard for YouTube documentaries.", t2Author: "Dr. Y", t2Role: "Media Analyst" },
      faq: { title: "Sponsorship FAQ", desc: "Common questions from agencies and brands.", q1: "How does an integration work?", a1: "After the kick-off call, I develop a concept that organically fits the topic of the video. Once approved, it goes into production and I handle the rest.", q2: "How much creative freedom do you need?", a2: "A lot. My viewers trust me because I remain authentic. I integrate your key messages, but in my own wording and style so it doesn't feel like a foreign body.", q3: "Are there exclusivity guarantees?", a3: "Yes, there are no other sponsors for the respective video. Industry exclusivity for a certain period can be negotiated individually.", q4: "What are the lead times?", a4: "Since my research is very time-consuming, I ideally schedule sponsors 4-6 weeks before publication. For Deep-Dive Integrations, I need at least 6 weeks lead time." },
      vault: { title1: "ACCESS THE", title2: "RESEARCH", title3: "VAULT", desc: "Get exclusive access to my raw research notes, uncut expert interviews, and help decide which rabbit hole we dive into next.", patreon: "Join on Patreon", newsletter: "Read the Newsletter", badge1: "Source Materials", badge2: "Debate Discord" },
      suggestion: { title: "SUGGEST A TOPIC", desc: "Got an idea for the next deep dive? Send it anonymously via WhatsApp.", placeholder: "Your idea...", button: "Send via WhatsApp" },
      easterEgg: { redacted: "██████████", revealed: "USE CODE 'SECRET20' FOR 20% OFF PATREON" },
      contact: { title1: "Need deep", title2: "research?", desc: "I offer freelance research, script consulting, and fact-checking for other creators, agencies, and media companies. Let's uncover the truth together.", check1: "Extensive data analysis & fact-checking", check2: "Script structuring for maximum retention", check3: "Access to exclusive academic databases", name: "Name", company: "Company / Channel", details: "Project Details", budget: "Estimated Budget", send: "Send Inquiry" },
      footer: { mediaKit: "Media Kit (PDF)", imprint: "Imprint", privacy: "Privacy Policy", rights: "All rights reserved." }
    },
    de: {
      nav: { essays: "Essays", about: "Über mich", partnerships: "Partnerschaften", vault: "Das Archiv" },
      inquiries: "Anfragen",
      hero: { hey: "Hey,", there: "da", badge: "Offen für Markenpartnerschaften", desc1: "Produktion von akribisch recherchierten", desc2: "Video-Essays, Deep Dives und", desc3: "Mini-Dokumentationen.", role1: "VIDEO", role2: "ESSAYISTIN &", role3: "RESEARCHER" },
      stats: { live: "Live YouTube API Sync", subs: "Abonnenten", views: "Monatliche Aufrufe", time: "Durchschn. Wiedergabezeit", docs: "Dokumentationen" },
      videos: { title: "NEUESTE ESSAYS", desc: "Tiefe Einblicke in Internetkultur, Wirtschaft und die verborgenen Systeme, die unsere Welt prägen.", viewAll: "Alle Dokumentationen ansehen", v1Title: "Die dunkle Psychologie von Casino-Apps", v1Views: "2,4 Mio. Aufrufe", v1Time: "vor 1 Woche", v2Title: "Wie ein Unternehmen das Internet monopolisierte", v2Views: "1,8 Mio. Aufrufe", v2Time: "vor 3 Wochen", v3Title: "Die versteckten Kosten von 'kostenlosem' Versand", v3Views: "3,1 Mio. Aufrufe", v3Time: "vor 1 Monat" },
      podcast: { title: "DIE AUDIO AKTEN", desc: "Höre die Essays und exklusive Interviews von unterwegs.", epTitle: "JFK: Das ungelöste Geheimnis", epDesc: "Ein Deep Dive in die Ereignisse vom 22. November 1963." },
      timeline: { title: "DIE REISE", m1Year: "2021", m1Text: "Kanalstart", m2Year: "2023", m2Text: "1 Mio. Abonnenten", m3Year: "2024", m3Text: "Erster Award" },
      demographics: { title: "ZUSCHAUER DEMOGRAFIE", male: "75% Männlich", age: "18-34 Jahre", region: "60% aus DACH", edu: "Hohes Bildungsniveau" },
      howIWork: { title: "METHODIK", step1: "Idee", step2: "Deep Research", step3: "Skript", step4: "Animation", step5: "Upload" },
      sponsors: { title: "PARTNERSCHAFTEN", desc: "Möchten Sie ein hochgebildetes, analytisches Publikum erreichen? Ich biete nahtlose Integrationen mit hoher Zuschauerbindung, die die Intelligenz der Zuschauer respektieren.", s1Title: "Deep-Dive Integrationen", s1Desc: "Eine stark geskriptete 60-90 Sekunden Mid-Roll-Integration, die den Wert Ihrer Marke natürlich mit dem Kernthema der Dokumentation verbindet.", s2Title: "Dedizierte Mini-Dokus", s2Desc: "Ein komplettes 15-20 minütiges Video-Essay, das von Ihrer Marke gesponsert wird und subtil um Ihre Branche oder Mission thematisiert ist.", s3Title: "Newsletter Platzierungen", s3Desc: "Erreichen Sie meine treuesten Zuschauer direkt in ihrem Posteingang mit einem gesponserten Segment im wöchentlichen 'Research Notes' Newsletter.", trusted: "Vertraut von Marken, die Bildung schätzen" },
      testimonials: { title: "Freigegebenes Feedback", desc: "Was andere Creator und Experten über die Recherche sagen.", t1Quote: "Nicoles Fähigkeit, komplexe Wirtschaftstheorien in fesselnde, 20-minütige Erzählungen zu destillieren, ist auf dieser Plattform unerreicht.", t1Author: "Creator X", t1Role: "3M+ Abonnenten", t2Quote: "Das Maß an journalistischer Integrität in der 'Private Power Files'-Serie setzt einen neuen Standard für YouTube-Dokumentationen.", t2Author: "Dr. Y", t2Role: "Medienanalyst" },
      faq: { title: "Sponsoring FAQ", desc: "Häufige Fragen von Agenturen und Marken.", q1: "Wie läuft eine Integration ab?", a1: "Nach dem Kick-off Call erarbeite ich ein Konzept, das organisch in das Thema des Videos passt. Nach eurer Freigabe geht es in die Produktion und ich kümmere mich um den Rest.", q2: "Wie viel kreative Freiheit brauchst du?", a2: "Sehr viel. Meine Zuschauer vertrauen mir, weil ich authentisch bleibe. Ich integriere eure Key-Messages, aber in meinem eigenen Wording und Stil, damit es nicht wie ein Fremdkörper wirkt.", q3: "Gibt es Exklusivitäts-Garantien?", a3: "Ja, für das jeweilige Video gibt es keine anderen Sponsoren. Branchen-Exklusivität für einen bestimmten Zeitraum kann individuell verhandelt werden.", q4: "Wie lange sind die Vorlaufzeiten?", a4: "Da meine Recherchen sehr aufwendig sind, plane ich Sponsoren idealerweise 4-6 Wochen vor Veröffentlichung ein. Für Deep-Dive Integrations brauche ich mindestens 6 Wochen Vorlauf." },
      vault: { title1: "ZUGANG ZUM", title2: "RECHERCHE", title3: "ARCHIV", desc: "Erhalten Sie exklusiven Zugang zu meinen rohen Recherche-Notizen, ungeschnittenen Experteninterviews und entscheiden Sie mit, in welches Thema wir als Nächstes eintauchen.", patreon: "Auf Patreon beitreten", newsletter: "Newsletter lesen", badge1: "Quellenmaterial", badge2: "Debatten Discord" },
      suggestion: { title: "THEMA VORSCHLAGEN", desc: "Hast du eine Idee für den nächsten Deep Dive? Sende sie anonym per WhatsApp.", placeholder: "Deine Idee...", button: "Per WhatsApp senden" },
      easterEgg: { redacted: "██████████", revealed: "CODE 'SECRET20' FÜR 20% RABATT AUF PATREON" },
      contact: { title1: "Brauchst du tiefe", title2: "Recherche?", desc: "Ich biete freiberufliche Recherche, Skript-Beratung und Fact-Checking für andere Creator, Agenturen und Medienunternehmen an. Lass uns gemeinsam die Wahrheit aufdecken.", check1: "Umfassende Datenanalyse & Fact-Checking", check2: "Skript-Strukturierung für maximale Retention", check3: "Zugang zu exklusiven akademischen Datenbanken", name: "Name", company: "Firma / Kanal", details: "Projekt-Details", budget: "Geschätztes Budget", send: "Anfrage senden" },
      footer: { mediaKit: "Media Kit (PDF)", imprint: "Impressum", privacy: "Datenschutzerklärung", rights: "Alle Rechte vorbehalten." }
    }
  };

  const t = translations[lang];

  // YouTube API Mock (Simplicissimus Data)
  const [ytStats, setYtStats] = useState({ subs: 1450000, views: 280000000, videos: 185 });

  useEffect(() => {
    // In a real app, you would fetch from the YouTube Data API v3 here
    // using a channel ID (e.g., UC[...])
    // fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=CHANNEL_ID&key=API_KEY`)
    // For now, we simulate fetching live data for Simplicissimus
    const timer = setTimeout(() => {
      setYtStats({ subs: 1450000, views: 280000000, videos: 185 });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
            backgroundImage: `url('https://s1.directupload.eu/images/260228/s94bvd4q.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="relative z-20 w-full max-w-[1440px] mx-auto h-full px-6 md:px-12 lg:px-20">
          {/* Navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-between pt-10"
          >
            <div className="text-2xl md:text-3xl font-serif italic font-bold tracking-tight text-black drop-shadow-sm">Private Power Files</div>
            <div className="hidden lg:flex items-center space-x-10 text-[15px] font-semibold text-black drop-shadow-sm">
              <a href="#videos" className="hover:text-amber-600 transition-colors">{t.nav.essays}</a>
              <a href="#about" className="hover:text-amber-600 transition-colors">{t.nav.about}</a>
              <a href="#sponsors" className="hover:text-amber-600 transition-colors">{t.nav.partnerships}</a>
              <a href="#community" className="hover:text-amber-600 transition-colors">{t.nav.vault}</a>
            </div>
            <div className="flex items-center gap-6">
              {/* Language Toggle */}
              <div className="flex items-center gap-1 bg-black/20 backdrop-blur-md rounded-full p-1 border border-white/20">
                <button 
                  onClick={() => setLang('en')}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${lang === 'en' ? 'bg-white text-black shadow-md' : 'text-white hover:bg-white/20'}`}
                >
                  <span className="text-xs font-bold leading-none">EN</span>
                </button>
                <button 
                  onClick={() => setLang('de')}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${lang === 'de' ? 'bg-white text-black shadow-md' : 'text-white hover:bg-white/20'}`}
                >
                  <span className="text-xs font-bold leading-none">DE</span>
                </button>
              </div>
              
              <button className="bg-white text-black px-6 md:px-8 py-3 rounded-full text-[14px] md:text-[15px] font-bold hover:bg-amber-500 hover:text-white transition-colors flex items-center gap-2 shadow-lg">
                <Mail className="w-4 h-4" />
                <span>{t.inquiries}</span>
              </button>
            </div>
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
                  {t.hero.hey}
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="font-serif italic font-normal text-[120px] lg:text-[150px] leading-none tracking-tight text-black/90 drop-shadow-sm pr-4"
                >
                  {t.hero.there}
                </motion.span>
              </div>
            </div>

            {/* Left Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-[35%] md:top-[35%] lg:top-[45%] left-6 md:left-12 lg:left-20 flex items-center bg-white/80 backdrop-blur-xl px-5 py-2.5 rounded-full shadow-xl pointer-events-auto border border-white/50 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-3 h-3 mr-3">
                <div className="absolute w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></div>
                <div className="relative w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-[13px] md:text-[14px] font-semibold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">{t.hero.badge}</span>
            </motion.div>

            {/* Right Text */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute top-[50%] md:top-[50%] lg:top-[45%] right-6 md:right-12 lg:right-20 max-w-[320px] text-left md:text-right pointer-events-auto bg-white/40 md:bg-transparent p-5 md:p-0 rounded-3xl backdrop-blur-md md:backdrop-blur-none border border-white/20 md:border-none shadow-2xl md:shadow-none"
            >
              <p className="text-[14px] md:text-[15px] font-semibold leading-relaxed text-black/90 drop-shadow-sm">
                {t.hero.desc1}<br className="hidden md:block"/>
                {t.hero.desc2}<br className="hidden md:block"/>
                {t.hero.desc3}
              </p>
              <div className="flex gap-3 mt-5 justify-start md:justify-end">
                <a href="#" className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center hover:bg-amber-600 hover:scale-110 transition-all shadow-lg"><Youtube className="w-5 h-5" /></a>
                <a href="#" className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center hover:bg-amber-600 hover:scale-110 transition-all shadow-lg"><Instagram className="w-5 h-5" /></a>
                <a href="https://open.spotify.com/show/1NNBLS1lzJwfpfSCl50Bnv" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center hover:bg-amber-600 hover:scale-110 transition-all shadow-lg"><SpotifyIcon className="w-5 h-5" /></a>
              </div>
            </motion.div>

            {/* Bottom Left Text */}
            <div className="absolute bottom-12 md:bottom-16 left-6 md:left-12 lg:left-20 pointer-events-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-display font-bold text-[80px] md:text-[90px] lg:text-[120px] xl:text-[140px] leading-[0.85] tracking-[-0.03em] m-0 p-0 text-white drop-shadow-2xl"
              >
                I AM<br/>
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">NICOLE</span>
              </motion.h1>
            </div>

            {/* Bottom Right Text */}
            <div className="absolute bottom-12 md:bottom-16 right-6 md:right-12 lg:right-20 text-right pointer-events-auto hidden sm:block">
              <motion.h2 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-display font-bold text-[50px] md:text-[50px] lg:text-[70px] xl:text-[85px] leading-[0.9] tracking-[-0.03em] m-0 p-0 text-white drop-shadow-2xl"
              >
                {t.hero.role1}<br/>{t.hero.role2}<br/>{t.hero.role3}
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
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center group">
              <Users className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 group-hover:text-amber-400 transition-transform duration-300" />
              <h4 className="text-4xl md:text-5xl font-display font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                <AnimatedNumber value={ytStats.subs} suffix="+" />
              </h4>
              <p className="text-gray-400 mt-2 text-sm md:text-base font-medium uppercase tracking-widest">{t.stats.subs}</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center group">
              <TrendingUp className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 group-hover:text-amber-400 transition-transform duration-300" />
              <h4 className="text-4xl md:text-5xl font-display font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                <AnimatedNumber value={ytStats.views} suffix="+" />
              </h4>
              <p className="text-gray-400 mt-2 text-sm md:text-base font-medium uppercase tracking-widest">{t.stats.views}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center group">
              <Clock className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 group-hover:text-amber-400 transition-transform duration-300" />
              <h4 className="text-4xl md:text-5xl font-display font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                14:30
              </h4>
              <p className="text-gray-400 mt-2 text-sm md:text-base font-medium uppercase tracking-widest">{t.stats.time}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center group">
              <BookOpen className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 group-hover:text-amber-400 transition-transform duration-300" />
              <h4 className="text-4xl md:text-5xl font-display font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                <AnimatedNumber value={ytStats.videos} suffix="+" />
              </h4>
              <p className="text-gray-400 mt-2 text-sm md:text-base font-medium uppercase tracking-widest">{t.stats.docs}</p>
            </motion.div>
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
              <h3 className="font-display font-bold text-[50px] md:text-[60px] lg:text-[75px] leading-none tracking-[-0.03em] bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">{t.videos.title}</h3>
              <p className="text-gray-500 mt-4 text-lg max-w-xl font-medium">{t.videos.desc}</p>
            </div>
            <button className="flex items-center gap-2 font-bold text-[15px] border-b-2 border-black pb-1 hover:text-amber-600 hover:border-amber-600 transition-all group">
              {t.videos.viewAll} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              { img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260228_104433_b5fefd8a-0189-4514-bbf7-82c69021f7d6.jpeg&w=1280&q=85', title: t.videos.v1Title, views: t.videos.v1Views, time: t.videos.v1Time, duration: '24:15' },
              { img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260228_104036_d28b472c-6f7d-4daa-b149-1eb0b0515768.jpeg&w=1280&q=85', title: t.videos.v2Title, views: t.videos.v2Views, time: t.videos.v2Time, duration: '31:40' },
              { img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260228_104122_02ef2894-9775-4159-b963-b527eae6db7b.jpeg&w=1280&q=85', title: t.videos.v3Title, views: t.videos.v3Views, time: t.videos.v3Time, duration: '19:50' },
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

      {/* Podcast Integration */}
      <section className="relative w-full bg-[#f5f5f5] py-24 border-y border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="md:w-1/2"
            >
              <h3 className="font-display font-bold text-[40px] md:text-[40px] lg:text-[60px] leading-none tracking-[-0.03em] mb-6">{t.podcast.title}</h3>
              <p className="text-gray-600 text-xl font-medium mb-8">
                {t.podcast.desc}
              </p>
              <div className="flex gap-4">
                <a href="https://open.spotify.com/show/1NNBLS1lzJwfpfSCl50Bnv" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors">
                  <SpotifyIcon className="w-4 h-4" /> Spotify
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="md:w-1/2 w-full"
            >
              <div className="relative w-full max-w-[540px] md:ml-auto">
                {/* Decorative background glow */}
                <div className="absolute -inset-4 bg-black/5 blur-2xl rounded-[32px] -z-10"></div>
                
                {/* Label */}
                <div className="flex items-center gap-3 mb-4 ml-2">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-600"></span>
                  </span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Latest Episode</span>
                </div>

                {/* Player Container */}
                <div className="w-full rounded-[16px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-black/5 overflow-hidden transition-transform hover:-translate-y-1 duration-300 bg-[#121212]">
                  <iframe 
                    data-testid="embed-iframe" 
                    style={{ borderRadius: '16px' }} 
                    src="https://open.spotify.com/embed/episode/5EbzzQGnBi8COq8h3rIxel?utm_source=generator&theme=0" 
                    width="100%" 
                    height="152" 
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    className="block"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Milestone Timeline */}
      <section className="relative w-full bg-white py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-20"
          >
            <h3 className="font-display font-bold text-[50px] md:text-[60px] lg:text-[80px] leading-none tracking-[-0.03em] mb-6">{t.timeline.title}</h3>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            <div className="space-y-24">
              {[
                { year: t.timeline.m1Year, text: t.timeline.m1Text, align: "right" },
                { year: t.timeline.m2Year, text: t.timeline.m2Text, align: "left" },
                { year: t.timeline.m3Year, text: t.timeline.m3Text, align: "right" }
              ].map((milestone, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`flex items-center justify-between w-full ${milestone.align === 'left' ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-5/12"></div>
                  <div className="w-2/12 flex justify-center relative">
                    <div className="w-6 h-6 bg-amber-500 rounded-full border-4 border-white shadow-md z-10"></div>
                  </div>
                  <div className={`w-5/12 ${milestone.align === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h4 className="text-3xl font-display font-bold text-black mb-2">{milestone.year}</h4>
                    <p className="text-gray-600 font-medium text-lg">{milestone.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
            <h3 className="font-display font-bold text-[50px] md:text-[60px] lg:text-[80px] leading-none tracking-[-0.03em] mb-6">{t.sponsors.title}</h3>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium">
              {t.sponsors.desc}
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          >
            {[
              { icon: Video, title: t.sponsors.s1Title, desc: t.sponsors.s1Desc },
              { icon: Star, title: t.sponsors.s2Title, desc: t.sponsors.s2Desc },
              { icon: FileText, title: t.sponsors.s3Title, desc: t.sponsors.s3Desc }
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group relative bg-[#141414] p-10 rounded-[40px] border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <service.icon className="w-12 h-12 text-amber-500 mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-2xl font-bold mb-4 relative z-10">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed relative z-10 text-lg">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Demographics */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="mb-32 bg-[#141414] rounded-[40px] p-10 md:p-16 border border-white/5"
          >
            <h4 className="text-center text-sm font-bold tracking-widest text-gray-500 uppercase mb-12">{t.demographics.title}</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-amber-500 mb-2">75%</div>
                <div className="text-gray-400 font-medium">{t.demographics.male}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-amber-500 mb-2">18-34</div>
                <div className="text-gray-400 font-medium">{t.demographics.age}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-amber-500 mb-2">60%</div>
                <div className="text-gray-400 font-medium">{t.demographics.region}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-display font-bold text-amber-500 mb-2">🎓</div>
                <div className="text-gray-400 font-medium">{t.demographics.edu}</div>
              </div>
            </div>
          </motion.div>

          {/* Brands Marquee */}
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="border-t border-white/10 pt-20 overflow-hidden relative"
          >
            <p className="text-center text-sm font-bold tracking-widest text-gray-500 uppercase mb-12">{t.sponsors.trusted}</p>
            
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

          {/* Testimonials Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mt-40"
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">{t.testimonials.title}</h3>
              <p className="text-gray-400 text-lg">{t.testimonials.desc}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { quote: t.testimonials.t1Quote, author: t.testimonials.t1Author, role: t.testimonials.t1Role },
                { quote: t.testimonials.t2Quote, author: t.testimonials.t2Author, role: t.testimonials.t2Role }
              ].map((testimonial, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="bg-[#141414] p-10 rounded-3xl border border-white/5 relative">
                  <Quote className="w-10 h-10 text-amber-500/20 absolute top-8 left-8" />
                  <p className="text-xl leading-relaxed text-gray-300 italic relative z-10 mt-6 mb-8">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-amber-500 font-bold text-xl">{testimonial.author[0]}</div>
                    <div>
                      <h5 className="font-bold text-white">{testimonial.author}</h5>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mt-40 max-w-3xl mx-auto"
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">{t.faq.title}</h3>
              <p className="text-gray-400 text-lg">{t.faq.desc}</p>
            </div>
            <div className="space-y-4">
              {[
                { q: t.faq.q1, a: t.faq.a1 },
                { q: t.faq.q2, a: t.faq.a2 },
                { q: t.faq.q3, a: t.faq.a3 },
                { q: t.faq.q4, a: t.faq.a4 }
              ].map((faq, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="bg-[#141414] border border-white/5 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-lg">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-amber-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How I Work / Methodology */}
      <section className="relative w-full bg-white py-32 border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-20"
          >
            <h3 className="font-display font-bold text-[50px] md:text-[60px] lg:text-[80px] leading-none tracking-[-0.03em] mb-6">{t.howIWork.title}</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: t.howIWork.step1, icon: Activity },
              { step: "02", title: t.howIWork.step2, icon: BookOpen },
              { step: "03", title: t.howIWork.step3, icon: FileText },
              { step: "04", title: t.howIWork.step4, icon: Video },
              { step: "05", title: t.howIWork.step5, icon: Youtube }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#fafafa] p-8 rounded-[32px] border border-black/5 relative group hover:bg-amber-500 hover:text-white transition-colors duration-300"
              >
                <div className="text-4xl font-display font-bold text-gray-200 group-hover:text-white/30 mb-6 transition-colors">{item.step}</div>
                <item.icon className="w-10 h-10 text-amber-500 group-hover:text-white mb-4 transition-colors" />
                <h4 className="text-xl font-bold">{item.title}</h4>
                {idx < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-gray-300 group-hover:text-white/50">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
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
            <h3 className="font-display font-bold text-[60px] md:text-[70px] lg:text-[90px] leading-[0.9] tracking-[-0.03em] mb-8 drop-shadow-md">
              {t.vault.title1}<br/>{t.vault.title2}<br/>{t.vault.title3}
            </h3>
            <p className="text-2xl font-medium mb-10 max-w-lg text-black/80 leading-relaxed">
              {t.vault.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-900 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-black/20">
                {t.vault.patreon}
              </button>
              <button className="bg-transparent border-2 border-black text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all">
                {t.vault.newsletter}
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
               <img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260228_091049_22d64e26-dce7-4281-9bac-618b6b802755.jpeg&w=1280&q=85" alt="Research Vault" className="w-full h-full object-cover rounded-full opacity-90 shadow-inner" referrerPolicy="no-referrer" />
               
               {/* Floating badges with continuous animation */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-10 right-0 md:right-0 lg:-right-10 bg-white/90 backdrop-blur-md text-black px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-3 rotate-12 border border-white/50"
               >
                 <FileText className="w-5 h-5 text-amber-600" fill="currentColor" /> {t.vault.badge1}
               </motion.div>
               
               <motion.div 
                 animate={{ y: [0, 15, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-20 left-0 md:left-0 lg:-left-10 bg-white/90 backdrop-blur-md text-black px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-3 -rotate-6 border border-white/50"
               >
                 <MessageCircle className="w-5 h-5 text-amber-600" fill="currentColor" /> {t.vault.badge2}
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topic Suggestion Box */}
      <section className="relative w-full bg-[#141414] text-white py-24 border-t border-white/5">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          >
            <h3 className="font-display font-bold text-[40px] md:text-[60px] leading-none tracking-[-0.03em] mb-6">{t.suggestion.title}</h3>
            <p className="text-gray-400 text-xl font-medium mb-10">
              {t.suggestion.desc}
            </p>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const input = (e.target as any).elements.topic.value;
                if (input) {
                  const text = encodeURIComponent(`New Topic Idea: ${input}`);
                  window.open(`https://wa.me/?text=${text}`, '_blank');
                  (e.target as any).reset();
                }
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input 
                type="text" 
                name="topic"
                placeholder={t.suggestion.placeholder}
                required
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button type="submit" className="bg-amber-500 text-black px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition-colors flex items-center justify-center gap-2">
                <Send className="w-5 h-5" /> {t.suggestion.button}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Hire me for Research / Contact Form */}
      <section className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                {t.contact.title1}<br/>
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">{t.contact.title2}</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                {t.contact.desc}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-500" />
                  <span className="text-lg text-gray-300">{t.contact.check1}</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-500" />
                  <span className="text-lg text-gray-300">{t.contact.check2}</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-500" />
                  <span className="text-lg text-gray-300">{t.contact.check3}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <form className="bg-[#141414] p-10 md:p-12 rounded-[40px] border border-white/10 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">{t.contact.name}</label>
                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">{t.contact.company}</label>
                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="Acme Corp" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">{t.contact.details}</label>
                  <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none" placeholder="..."></textarea>
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">{t.contact.budget}</label>
                  <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-amber-500 text-black font-bold text-lg py-5 rounded-xl hover:bg-amber-400 transition-colors flex items-center justify-center gap-3">
                  <Send className="w-5 h-5" /> {t.contact.send}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-3xl font-serif italic font-bold tracking-tight">Private Power Files</div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="#" className="text-gray-500 hover:text-amber-600 font-semibold transition-colors">{t.footer.mediaKit}</a>
            <a href="#" className="text-gray-500 hover:text-amber-600 font-semibold transition-colors">{t.footer.imprint}</a>
            <a href="#" className="text-gray-500 hover:text-amber-600 font-semibold transition-colors">{t.footer.privacy}</a>
          </div>
          <div className="text-gray-400 text-sm font-medium flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              © 2026 Nicole. {t.footer.rights}
              <span 
                className="ml-4 cursor-pointer text-gray-200 hover:text-amber-500 transition-colors select-none"
                onClick={(e) => {
                  const el = e.currentTarget;
                  if (el.textContent === t.easterEgg.redacted) {
                    el.textContent = t.easterEgg.revealed;
                    el.classList.remove('text-gray-200');
                    el.classList.add('text-amber-500', 'font-bold');
                  }
                }}
                title="Classified"
              >
                {t.easterEgg.redacted}
              </span>
            </div>
            <a 
              href="http://vamela.info" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-amber-600 transition-colors text-xs mt-2 flex items-center gap-1"
            >
              Designed by <span className="font-bold text-amber-600">VAMELA</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Podcast Modal */}
      <AnimatePresence>
        {isPodcastPlaying && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              className="absolute inset-0 bg-black/40 backdrop-blur-xl"
              onClick={() => setIsPodcastPlaying(false)}
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsPodcastPlaying(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-800" />
              </button>
              <div className="p-6 sm:p-10">
                <h3 className="text-2xl font-bold mb-6 pr-12">{t.podcast.epTitle}</h3>
                <iframe 
                  style={{ borderRadius: '12px' }} 
                  src="https://open.spotify.com/embed/episode/5EbzzQGnBi8COq8h3rIxel?utm_source=generator&theme=0" 
                  width="100%" 
                  height="352" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
