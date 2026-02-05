import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const JoinJourney = () => {
    return (
        <section className="h-screen w-screen flex flex-col justify-center items-center bg-black text-center px-4 relative overflow-hidden">
            {/* Background Gradient/Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-2xl"
            >
                <h2 className="text-6xl md:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Join Our Journey
                    </span>
                </h2>

                <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed">
                    Be part of our vibrant artistic community. Express, create, and inspire.
                </p>

                <Link to="/login">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
                    >
                        Get Involved
                    </motion.button>
                </Link>
            </motion.div>
        </section>
    );
};

export default JoinJourney;
