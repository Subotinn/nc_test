import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-64 bg-gray-100">
      <div className="flex items-center space-x-2">
        <div
          className="w-4 h-4 rounded-full animate-spin border-2 border-t-2 border-t-transparent border-blue-500"></div>
        <span className="text-gray-700">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
