import React from 'react';
import Footer from '../../Common/Footer';

export const PaintingPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-gray-900 flex flex-col">
            <main className="flex-grow flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                        Painting Gallery
                    </h1>
                    <p className="text-gray-500">Coming Soon...</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};
