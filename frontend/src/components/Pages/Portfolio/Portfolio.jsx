// components/Portfolio.jsx
import React from 'react';
import BatchFolder from '../../BatchFolder';
import person1 from '../../../assets/person1.jpg';
import person2 from '../../../assets/person2.jpg';
import person3 from '../../../assets/person3.jpg';
import art1 from '../../../assets/art1.jpg';
import art2 from '../../../assets/art2.jpg';
import art3 from '../../../assets/art3.jpg';

const Portfolio = () => {
  // Portfolio data
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
    },
    {
      year: '2024',
      members: [
        { name: 'Demo User', image: person1, artworks: [art2], role: 'Designer' }
      ]
    }
  ];

  return (
    <section className="h-screen flex items-center bg-slate-50 border-l border-gray-200">
      {/* Section Header - Fixed width card or just part of the flow */}
      <div className="flex-shrink-0 w-[40vw] md:w-[30vw] px-12 flex flex-col justify-center text-left h-full border-r border-gray-200">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
          Our Artists
        </h2>
        <p className="text-gray-600 text-lg">
          Explore the creative journey of our talented members across different eras.
        </p>
      </div>

      {/* Horizontal Items */}
      <div className="flex items-center h-full px-12 gap-16">
        {batches.map((batch, index) => (
          <div key={index} className="flex-none w-[80vw] md:w-[60vw] lg:w-[40vw]">
            <BatchFolder batch={batch} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;