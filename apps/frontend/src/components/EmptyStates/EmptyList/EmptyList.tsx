import React from 'react';

const EmptyList = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 pt-10 pb-10">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="mt-2 text-sm font-medium text-gray-900">No Data</h3>
        <p className="mt-1 text-sm text-gray-500">
          It seems that there is no data to display right now.
        </p>
      </div>
    </div>
  );
};

export default EmptyList;
