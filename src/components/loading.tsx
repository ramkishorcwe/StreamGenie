// const LoadingPage = () => {
//   return (
//     <div className="flex items-center justify-center h-screen w-screen bg-black text-white">
//       <div className="flex flex-col items-center space-y-4">
//         {/* Spinner */}
//         <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
        
//         {/* Loading text */}
//         <p className="text-lg font-medium tracking-wide">Loading...</p>
//       </div>
//     </div>
//   );
// };

// export default LoadingPage;

// import React from 'react';

// const FancyLoadingPage = () => {
//   return (
//     <div className="flex items-center justify-center h-screen w-screen bg-black text-white">
//       <div className="flex flex-col items-center space-y-6">
//         {/* Glowing ring spinner */}
//         <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin shadow-lg shadow-purple-500/30" />

//         {/* Glowing text with pulse */}
//         <h1 className="text-xl font-semibold text-purple-400 animate-pulse tracking-widest">
//           Loading your experience...
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default FancyLoadingPage;

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="flex flex-col items-center space-y-6">
        {/* Soft pulse dot loader */}
        <div className="flex space-x-2">
          <span className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="w-4 h-4 bg-white rounded-full animate-bounce" />
        </div>

        {/* Loading Text */}
        <h2 className="text-white text-lg tracking-wide font-light animate-pulse">
          Preparing content...
        </h2>
      </div>
    </div>
  );
};

export default LoadingPage;


