'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Schedule from '../components/Schedule';
import Registration from '../components/Registration';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="font-sans text-gray-800 antialiased selection:bg-[#00629B] selection:text-white">
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
}
