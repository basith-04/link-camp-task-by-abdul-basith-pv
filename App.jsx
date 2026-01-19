import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu,
    X,
    Calendar,
    MapPin,
    Users,
    ChevronRight,
    Linkedin,
    Instagram,
    Twitter,
    Facebook,
    CheckCircle,
    Clock,
    Mic,
    Cpu,
    Award,
    Zap,
    FileText,
    UserCheck,
    Send
} from 'lucide-react';

/* --- THEME CONSTANTS --- */
const THEME = {
    colors: {
        blue: "#00629B",
        cyan: "#00B5E2",
        orange: "#FFA400",
        darkBlue: "#002855",
        lightGray: "#F8F9FA",
        white: "#FFFFFF"
    }
};

/* --- COMPONENTS --- */

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Speakers', href: '#speakers' },
        { name: 'Schedule', href: '#schedule' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold tracking-tight text-[#002855] font-sans">
                    IEEE <span className="text-[#00629B]">LINK</span> | <span className="text-sm font-normal text-gray-600">Kerala Section</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[#002855] hover:text-[#00B5E2] font-semibold transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[#00629B] text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-[#00507d] transition-colors"
                    >
                        Apply Now
                    </motion.button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-[#002855]"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[#002855] text-lg font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-[#00629B] text-white px-6 py-3 rounded-md font-bold w-full"
                            >
                                Apply Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#F8F9FA] overflow-hidden pt-20">
            {/* Background Geometric Elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 0.1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#00B5E2] rounded-full blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 0.1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="absolute top-40 -left-20 w-[300px] h-[300px] bg-[#00629B] rounded-full blur-3xl"
                />
                {/* Tech Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(#002855 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center">
                <div className="md:w-3/5 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center space-x-2 bg-blue-50 text-[#00629B] px-4 py-1 rounded-full text-sm font-semibold border border-blue-100"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#FFA400] animate-pulse"></span>
                        <span>Kochi Hub | January 24, 2026</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold text-[#002855] leading-tight"
                    >
                        LINK CAMP <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00629B] to-[#00B5E2]">2025</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 md:pr-12 leading-relaxed"
                    >
                        A new generation must rise. The torch is ready for those who dare to lead.
                        IEEE Kerala Section is calling for bold thinkers and fearless leaders.
                        Step into a leadership role that lets you create impact and leave a legacy.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <button
                            onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-[#FFA400] hover:bg-yellow-500 text-[#002855] font-bold rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Apply for Selection <ChevronRight size={20} />
                        </button>
                        <button
                            onClick={() => document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 border-2 border-[#00629B] text-[#00629B] hover:bg-blue-50 font-bold rounded-lg transition-colors"
                        >
                            View Schedule
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200 mt-8 font-mono text-sm text-[#002855]"
                    >
                        <div className="flex items-center gap-2">
                            <Users className="text-[#00B5E2]" />
                            <span>15,000+ Members</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="text-[#00B5E2]" />
                            <span>100+ Student Branches</span>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Visual */}
                <div className="md:w-2/5 mt-12 md:mt-0 relative">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                        className="relative z-10"
                    >
                        {/* Abstract Code/Tech visual constructed with CSS */}
                        <div className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center gap-2 mb-4 border-b pb-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="font-mono text-sm space-y-2">
                                <p className="text-gray-400">// The Joy of Volunteering</p>
                                <p className="text-[#00629B]">class <span className="text-[#FFA400]">Leader</span> extends <span className="text-[#00B5E2]">Volunteer</span> {'{'}</p>
                                <p className="pl-4 text-[#002855]">constructor() {'{'}</p>
                                <p className="pl-8 text-gray-600">this.passion = true;</p>
                                <p className="pl-8 text-gray-600">this.impact = "Infinite";</p>
                                <p className="pl-4 text-[#002855]">{'}'}</p>
                                <p className="text-[#00629B]">{'}'}</p>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -bottom-6 -left-6 bg-[#002855] text-white p-4 rounded-lg shadow-xl"
                        >
                            <p className="font-bold text-lg">50 Years</p>
                            <p className="text-xs text-[#00B5E2]">Of IEEE Kerala Section</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-[#FFA400] uppercase mb-2">The Legacy</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#002855]">Decades of Innovation. <br />Rooted in Community.</h3>
                        <div className="w-20 h-1 bg-[#00629B] mx-auto mt-6"></div>
                    </div>
                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>
                            Established in 1975 under the chairmanship of <strong>KPP Nambiar</strong>, the IEEE Kerala Section has grown from a handful of members to a global powerhouse.
                        </p>
                        <p>
                            The <strong>LINK (Local Integrated Network of Kerala)</strong> framework connects student branches across the region to foster a collaborative technical community. This camp celebrates the 'Joy of Volunteering,' tracing our roots from the early Keltron days to the vibrant Hub Meets of today.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Schedule = () => {
    const scheduleData = [
        {
            day: "Day 1",
            title: "Leadership & Foundations",
            date: "Jan 24, 2026",
            events: [
                { time: "09:00", title: "Registration & Kit Distribution", icon: <CheckCircle size={18} /> },
                { time: "10:30", title: "Inauguration & Icebreaking", icon: <Mic size={18} /> },
                { time: "13:30", title: "Leadership Workshop (SLT Lead)", icon: <Users size={18} /> },
                { time: "15:30", title: "Networking & Society Meets", icon: <Users size={18} /> },
                { time: "19:00", title: "Cultural Night & Gala", icon: <Zap size={18} /> },
            ]
        }
    ];

    return (
        <section id="schedule" className="py-24 bg-[#F8F9FA]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#002855] mb-4">Event Schedule</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">A full day packed with learning, networking, and celebration.</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {scheduleData.map((day, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                        >
                            <div className="bg-[#002855] p-6 text-white">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-2xl font-bold">{day.day}</h3>
                                        <p className="text-[#00B5E2] opacity-90">{day.title}</p>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-80 text-sm">
                                        <Calendar size={16} />
                                        {day.date}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="space-y-6">
                                    {day.events.map((event, i) => (
                                        <div key={i} className="flex gap-4 items-start group">
                                            <div className="w-16 flex-shrink-0 text-right pt-1 font-mono text-sm text-[#00629B] font-bold">
                                                {event.time}
                                            </div>
                                            <div className="flex-1 pb-6 border-l-2 border-gray-100 pl-6 relative last:border-0 last:pb-0">
                                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#FFA400] group-hover:bg-[#FFA400] transition-colors"></div>
                                                <h4 className="font-semibold text-gray-800 text-lg group-hover:text-[#00629B] transition-colors">{event.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Registration = () => {
    return (
        <section className="py-24 bg-white" id="register">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#002855] to-[#00152e] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
                    >
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B5E2] opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Selection Camp Application</h2>

                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                            LINK Camp 2025 is an exclusive, selection-based event designed for the most passionate volunteers and emerging leaders.
                            <span className="block mt-4 text-[#FFA400] font-semibold">
                                This event is completely free of charge for selected delegates.
                            </span>
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-10 relative z-10 text-left">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                                <div className="bg-[#00B5E2] w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-[#002855]">
                                    <FileText size={20} />
                                </div>
                                <h4 className="font-bold mb-2">1. Apply</h4>
                                <p className="text-sm text-gray-400">Fill out the detailed application form sharing your volunteering history.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                                <div className="bg-[#FFA400] w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-[#002855]">
                                    <UserCheck size={20} />
                                </div>
                                <h4 className="font-bold mb-2">2. Review</h4>
                                <p className="text-sm text-gray-400">Our executive committee will review profiles to select the top delegates.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                                <div className="bg-[#00629B] w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white">
                                    <Send size={20} />
                                </div>
                                <h4 className="font-bold mb-2">3. Confirm</h4>
                                <p className="text-sm text-gray-400">Selected delegates will receive an invite to confirm their seat.</p>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative z-10 bg-[#FFA400] text-[#002855] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-500 transition-colors flex items-center gap-2 mx-auto"
                        >
                            Start Application <ChevronRight size={22} />
                        </motion.button>

                        <p className="mt-6 text-sm text-gray-400 relative z-10">
                            Applications close on December 31, 2025.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-[#002855] text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-2xl font-bold mb-4 font-sans">IEEE <span className="text-[#00B5E2]">LINK</span></h4>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Connecting student branches across Kerala to foster a collaborative technical community. Celebrating 50 years of excellence.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00B5E2] transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00B5E2] transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00B5E2] transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00B5E2] transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h5 className="font-bold text-lg mb-4">Quick Links</h5>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-[#FFA400]">About Us</a></li>
                            <li><a href="#" className="hover:text-[#FFA400]">Schedule</a></li>
                            <li><a href="#" className="hover:text-[#FFA400]">Speakers</a></li>
                            <li><a href="#" className="hover:text-[#FFA400]">Code of Conduct</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold text-lg mb-4">Contact</h5>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center gap-2"><MapPin size={16} className="text-[#00B5E2]" /> Kochi, Kerala</li>
                            <li className="flex items-center gap-2"><Clock size={16} className="text-[#00B5E2]" /> Jan 24-25, 2026</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© 2025 IEEE Kerala Section. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

/* --- MAIN APP --- */

const App = () => {
    return (
        <div className="font-sans text-gray-800 antialiased selection:bg-[#00629B] selection:text-white">
            {/* Inject Fonts for Preview environment */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&family=Source+Code+Pro:wght@400;700&display=swap');
      `}</style>

            <Navbar />
            <main>
                <Hero />
                <About />
                <Schedule />
                <Registration />
            </main>
            <Footer />
        </div>
    );
};

export default App;