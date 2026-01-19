'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Users, MapPin } from 'lucide-react';

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

export default Hero;
