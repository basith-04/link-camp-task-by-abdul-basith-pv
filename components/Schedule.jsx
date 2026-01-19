'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Mic, Users, Zap } from 'lucide-react';
import ScheduleItem from './ScheduleItem';

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
                                        <ScheduleItem key={i} event={event} index={i} />
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

export default Schedule;
