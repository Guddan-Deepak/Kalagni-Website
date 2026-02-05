
import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import Hero from '../Hero/Hero';
import Portfolio from '../Portfolio/Portfolio';
import PaintingSection from '../../PaintingSection';
import JoinJourney from '../join/JoinJourney';
import UpcomingEvents from './UpcomingEvents';

const HomePage = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // We have 5 slides (Hero, Portfolio, Painting, UpcomingEvents, JoinJourney). 
    // We want to translate from 0% (Start) to -400% (End, showing 5th slide).
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]);

    return (
        <main ref={targetRef} className="relative h-[600vh] bg-slate-50">
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

                    {/* Slide 4 — Upcoming Events */}
                    <div className="min-w-[100vw] h-screen">
                        <UpcomingEvents />
                    </div>

                    {/* Slide 5 — Join Journey */}
                    <div className="min-w-[100vw] h-screen">
                        <JoinJourney />
                    </div>

                </motion.div>

            </div>
        </main>
    );
};

export default HomePage;
