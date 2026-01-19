'use client';

import React from 'react';
import { Linkedin, Instagram, Twitter, Facebook, MapPin, Clock } from 'lucide-react';

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

export default Footer;
