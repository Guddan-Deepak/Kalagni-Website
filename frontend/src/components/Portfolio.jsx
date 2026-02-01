// components/Portfolio.jsx
import React, { useState } from 'react';
import BatchFolder from './BatchFolder';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import art1 from '../assets/art1.jpg';
import art2 from '../assets/art2.jpg';
import art3 from '../assets/art3.jpg';

const Portfolio = () => {
  // Portfolio data - easy to extend with more batches
  const batches = [
    {
      year: '2027',
      members: [
        { 
          name: 'Arjun Mehta', 
          image: person1, 
          artworks: [art1, art2],
          role: 'Digital Artist'
        },
        { 
          name: 'Priya Sharma', 
          image: person2, 
          artworks: [art3],
          role: 'Illustrator'
        }
      ]
    },
    {
      year: '2026',
      members: [
        { 
          name: 'Rahul Verma', 
          image: person3, 
          artworks: [art2, art3],
          role: 'Painter'
        },
        { 
          name: 'Ananya Singh', 
          image: person1, 
          artworks: [art1],
          role: 'Sculptor'
        }
      ]
    },
    {
      year: '2025',
      members: [
        { 
          name: 'Vikram Patel', 
          image: person2, 
          artworks: [art1, art3],
          role: 'Photographer'
        },
        { 
          name: 'Neha Kapoor', 
          image: person3, 
          artworks: [art2],
          role: 'Mixed Media Artist'
        }
      ]
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Our Artists
        </h2>
        <p className="text-gray-400 text-lg">
          Explore the creative journey of our talented members
        </p>
      </div>

      {/* Batch folders grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {batches.map((batch) => (
          <BatchFolder key={batch.year} batch={batch} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;