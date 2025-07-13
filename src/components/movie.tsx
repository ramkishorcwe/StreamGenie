const Movie = ({ movie }: any) => {
  const size = "w185";
  return (
    <div className="p-5 m-2 shadow-blue-300 border-b-neutral-800" style={{maxWidth: "unset"}}>
      <img
        src={`https://image.tmdb.org/t/p/${size}${movie.poster_path}`}
        // src={`https://image.tmdb.org/t/p${movie.poster_path}`}
        alt={movie.title}
        style={{maxWidth: "unset"}}
      />
      <h4 className="text-gray-900">{movie.title}</h4>
      <p className="text-gray-400">{movie.release_date}</p>
    </div>
  );
};
export default Movie;
