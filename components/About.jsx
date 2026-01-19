'use client';

import React from 'react';

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

export default About;
