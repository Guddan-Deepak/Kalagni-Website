// components/MemberCard.jsx
import React, { useState } from 'react';

const MemberCard = ({ member }) => {
  const [showArtworks, setShowArtworks] = useState(false);

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 hover:border-purple-200 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex items-center gap-4 mb-4">
        {/* Member photo */}
        <img
          src={member.image}
          alt={member.name}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-purple-500/30"
        />

        {/* Member info */}
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-900">
            {member.name}
          </h4>
          <p className="text-sm text-gray-500">{member.role}</p>
        </div>

        {/* Toggle artworks button */}
        <button
          onClick={() => setShowArtworks(!showArtworks)}
          className="text-purple-400 hover:text-purple-300 transition-colors p-2 hover:bg-purple-500/10 rounded-lg"
        >
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${showArtworks ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>

      {/* Artworks gallery - expandable */}
      {showArtworks && (
        <div className="grid grid-cols-2 gap-3 mt-4 animate-fade-in">
          {member.artworks.map((artwork, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={artwork}
                alt={`Artwork ${index + 1} by ${member.name}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-sm font-medium">
                  Artwork {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MemberCard;