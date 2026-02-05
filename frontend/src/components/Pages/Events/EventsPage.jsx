import React from 'react';
import { motion } from 'framer-motion';

const eventsData = [
    {
        id: 1,
        title: "Abstract Expressions Gala",
        date: "March 15, 2026",
        location: "Kalagni Art Center, Hall A",
        description: "An evening dedicated to abstract art enthusiasts. Meet the artists, witness live creations, and immerse yourself in the world of non-objective art.",
        image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Watercolor Workshop",
        date: "April 02, 2026",
        location: "Studio B, Downtown",
        description: "Join us for a hands-on watercolor workshop. Suitable for beginners and intermediates. All materials provided.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Digital Art Symposium",
        date: "May 10, 2026",
        location: "Virtual Event",
        description: "Explore the future of art in the digital age. Featuring keynote speakers from top digital design studios.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500&auto=format&fit=crop"
    }
];

const EventsPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 px-6 md:px-20 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
            >
                <div className="text-center mb-16">
                    <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">Calendar</span>
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
                        Upcoming Arts Events
                    </h1>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        Stay updated with exhibitions, workshops, and community gatherings. Don't miss out on the opportunity to connect and create.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventsData.map((event) => (
                        <motion.div
                            key={event.id}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-slate-800 shadow-sm">
                                    {event.date}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
                                <p className="text-sm text-cyan-600 font-medium mb-4 flex items-center gap-1">
                                    📍 {event.location}
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    {event.description}
                                </p>

                                <button className="w-full py-2.5 rounded-lg border border-purple-200 text-purple-700 font-semibold hover:bg-purple-50 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default EventsPage;
