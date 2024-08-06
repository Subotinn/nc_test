import React from 'react';

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 pt-10 pb-10">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="mt-2 text-sm font-medium text-gray-900">No Data</h3>
        <p className="mt-1 text-sm text-gray-500">
          It seems that there is no data to display right now.
        </p>
        {/*<div className="mt-6">*/}
        {/*  <button*/}
        {/*    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">*/}
        {/*    Refresh*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default EmptyState;
