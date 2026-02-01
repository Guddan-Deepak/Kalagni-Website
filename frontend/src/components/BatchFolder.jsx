// components/BatchFolder.jsx
import React, { useState } from 'react';
import MemberCard from './MemberCard';

const BatchFolder = ({ batch }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Folder card - closed state */}
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="group cursor-pointer bg-linear-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
        >
          {/* Folder icon */}
          <div className="mb-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
            <svg 
              className="w-16 h-16 mx-auto" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
            </svg>
          </div>
          
          {/* Batch year */}
          <h3 className="text-4xl font-bold text-center bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">
            Batch {batch.year}
          </h3>
          
          {/* Member count */}
          <p className="text-gray-400 text-center text-sm">
            {batch.members.length} {batch.members.length === 1 ? 'Artist' : 'Artists'}
          </p>
          
          {/* Hover indicator */}
          <div className="mt-6 text-center">
            <span className="text-purple-400/70 text-sm group-hover:text-purple-300 transition-colors">
              Click to explore →
            </span>
          </div>
        </div>
      )}

      {/* Folder card - open state */}
      {isOpen && (
        <div className="bg-linear-to-br from-slate-800/80 to-purple-900/50 backdrop-blur-md rounded-2xl p-6 border border-purple-400/30 shadow-2xl shadow-purple-500/20 animate-fade-in">
          {/* Header with close button */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Batch {batch.year}
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-purple-300 transition-colors p-2 hover:bg-purple-500/10 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Members grid */}
          <div className="space-y-6">
            {batch.members.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BatchFolder;