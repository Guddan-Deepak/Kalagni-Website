import React from 'react';
import { Link } from 'react-router-dom';
import paintingImg from '../assets/art1.jpg'; // Placeholder using existing asset

const PaintingSection = () => {
    return (
        <section className="w-screen h-screen flex items-center justify-center bg-slate-50 px-12 md:px-24">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-16">

                {/* Left Content */}
                <div className="flex-1 text-left">
                    <h4 className="text-gray-500 text-sm font-bold tracking-widest mb-6 uppercase">
                        Explore Arts
                    </h4>

                    {/* Icon Placeholder - simple generic palette icon */}
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                    </div>

                    <h2 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6">
                        Painting
                    </h2>

                    <p className="text-2xl text-gray-600 font-light mb-10 max-w-lg">
                        Expression through colors and strokes
                    </p>

                    <Link to="/painting">
                        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all transform hover:-translate-y-1">
                            Click here
                        </button>
                    </Link>
                </div>

                {/* Right Image */}
                <div className="flex-1 w-full max-w-lg md:max-w-xl">
                    <img
                        src={paintingImg}
                        alt="Colorful Painting"
                        className="w-full h-auto rounded-3xl shadow-2xl shadow-purple-200 hover:scale-[1.02] transition-transform duration-500"
                    />
                </div>

            </div>
        </section>
    );
};

export default PaintingSection;
