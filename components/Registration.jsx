'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, UserCheck, Send } from 'lucide-react';

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

export default Registration;
