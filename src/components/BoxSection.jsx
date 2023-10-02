import React from 'react';

const BoxSection = () => {
  return (
    <div className='container-wrapper'>
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-around items-baseline  space-y-4 sm:space-x-4">
        {/* Box 1 */}
        <div className="bg-pink-200 p-6 rounded-lg text-center">
          <h1 className="text-3xl font-bold text-pink-600">$2345</h1>
          <p className="mt-2">Hi, how are you?</p>
        </div>

        {/* Box 2 */}
        <div className="bg-pink-200 p-6 rounded-lg text-center">
          <h1 className="text-3xl font-bold text-pink-600">$2345</h1>
          <p className="mt-2">Hi, how are you?</p>
        </div>

        {/* Box 3 */}
        <div className="bg-pink-200 p-6 rounded-lg text-center">
          <h1 className="text-3xl font-bold text-pink-600">$2345</h1>
          <p className="mt-2">Hi, how are you?</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BoxSection;