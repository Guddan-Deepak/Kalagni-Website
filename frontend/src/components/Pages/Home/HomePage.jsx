
import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import Hero from '../Hero/Hero';
import Portfolio from '../Portfolio/Portfolio';
import PaintingSection from '../../PaintingSection';

const HomePage = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // We have 3 slides (Hero, Portfolio, Painting). 
    // We want to translate from 0% (Start) to -200% (End, showing 3rd slide).
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

    return (
        <main ref={targetRef} className="relative h-[400vh] bg-slate-50">
            {/* Sticky container */}
            <div className="sticky top-0 h-screen overflow-hidden flex items-center">

                {/* Horizontal track */}
                <motion.div
                    className="flex"
                    style={{ x }}
                >
                    {/* Slide 1 — Hero */}
                    <div className="min-w-[100vw] h-screen">
                        <Hero />
                    </div>
                    {/* Slide 2 — Visual Arts */}
                    <div className="min-w-[100vw] h-screen">
                        <PaintingSection />
                    </div>

                    {/* Slide 3 — Portfolio */}
                    <div className="min-w-[100vw] h-screen">
                        <Portfolio />
                    </div>

                </motion.div>

            </div>
        </main>
    );
};

export default HomePage;
