import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 px-6 md:px-20 lg:px-40">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
                    About Kalagni
                </h1>

                <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                    <p>
                        Welcome to <strong>Kalagni</strong>, a digital sanctuary where art meets innovation.
                        We believe that creativity is the spark that ignites the soul. Our platform is dedicated
                        to showcasing the mesmerizing works of visionary artists who dare to see the world differently.
                    </p>
                    <p>
                        Born from a passion for visual storytelling, Kalagni bridges the gap between traditional
                        artistry and modern digital expression. Whether it's the fluid strokes of a painting or
                        the immersive depth of digital art, we celebrate every form of expression.
                    </p>
                    <p>
                        Our mission is simple: to inspire, to connect, and to elevate the artistic community.
                        We provide a canvas for creators to share their journey and for art lovers to discover
                        pieces that resonate with their spirit.
                    </p>
                </div>

                <div className="mt-16 border-t border-slate-200 pt-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Vision</h2>
                    <p className="text-slate-600">
                        To build a global community where every stroke of genius is recognized and every
                        artist finds their voice. Join us as we paint a brighter, more colorful future together.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
