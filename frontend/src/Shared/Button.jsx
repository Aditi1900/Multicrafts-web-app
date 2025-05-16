import React from 'react';

const AnimatedButton = ({ label, onClick }) => {
  return (
    <button 
      className="relative px-5 py-2 text-xl text-lightestyellow font-semibold font-indie bg-red-500 border-none rounded-lg shadow-xl overflow-hidden group transition-transform transform active:scale-95 hover:bg-orange-400"
      onClick={onClick}
    >
      <span className="absolute inset-0 w-full h-full transition-transform transform -translate-x-full bg- group-hover:translate-x-0"></span>
      <span className="relative z-10">{label}</span>
    </button>
  );
};

export default AnimatedButton;

