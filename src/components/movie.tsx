const Movie = ({ movie, className="" }: any) => {
  const size = "w342"; // larger than w185 for better quality
  const clickHandle = async(id:String)=>{
    const uri = `https://api.themoviedb.org/3/movie/${id}/lists?language=en-US&page=1`
    try {
        const data = await fetch(uri)
        console.log(data)
    } catch (error) {
       console.log(error)
    }
  }
  return (
    <div 
    onClick={()=>clickHandle(movie.id)}
    className={`w-[400] p-4 m-2 shadow-md bg-white rounded-md dark:bg-neutral-900 hover:z-1150 hover:bg-gray-600 hover:cursor-pointer hover:text-black hover:scale-115 hover:shadow-lg hover:border-gray-700 cursor-pointer ${className}`}>
      {/* Poster Image */}
      <img
        src={`https://image.tmdb.org/t/p/${size}${movie.poster_path}`}
        alt={movie.title}
        className="h-35 w-full object-cover rounded-md mb-3"
      />
      <div className="w-[200px]">
        {/* Title */}
        <h4 className="text-gray-900 dark:text-white text-lg font-semibold mb-1">
          {movie.title}
        </h4>
        {/* Release Date */}
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {movie.release_date}
        </p>
      </div>
    </div>
  );
};

export default Movie;
