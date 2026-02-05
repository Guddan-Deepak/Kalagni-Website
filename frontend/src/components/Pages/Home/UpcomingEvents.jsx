import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Placeholder image for events (can be replaced)
const eventImage = "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1000&auto=format&fit=crop";

const UpcomingEvents = () => {
    return (
        <section className="h-screen w-screen flex justify-center items-center bg-slate-900 text-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-cyan-400 font-bold tracking-wider uppercase mb-2 block">
                        Get Inspired
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Upcoming <br />
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Arts Events
                        </span>
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg">
                        Dive into a world of creativity. From gallery openings to live painting workshops,
                        discover events that ignite your passion for the arts.
                    </p>

                    <Link to="/events">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
                        >
                            Explore Events
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <img
                            src={eventImage}
                            alt="Upcoming Events"
                            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold border border-white/20">
                                    Next Event
                                </div>
                                <span className="text-sm font-medium text-slate-200">March 15, 2026</span>
                            </div>
                            <h3 className="text-2xl font-bold">Abstract Expressions Gala</h3>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
