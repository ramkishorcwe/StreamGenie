const VideoSkeleton = () => {
  return (
    // Array.from({ length: 3 }).map((_, index) => {
  <div className="w-full max-w-sm animate-pulse" >
      {/* Thumbnail Placeholder */}
      <div className="bg-gray-300 dark:bg-gray-700 h-48 w-full rounded-md mb-3"></div>

      {/* Title Line */}
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>

      {/* Channel Line */}
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
// })
  );
};

export default VideoSkeleton;
