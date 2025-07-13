import Movie from "./movie";
import type { IMovie } from "../store/movies";
import VideoSkeleton from "./shimar-ui/video-skeleton";

export interface IMovieListProps{
    list: IMovie[];
    title: string;
}

const MoviesList = ({title, list}:IMovieListProps)=>{
    return(<div className="m-4 flex flex-col" >
        {<h3 className="text-lg text-gray-500 ml-4">{title}</h3>}
        {list.length>0?<div className="flex flex-nowrap overflow-x-auto scrollbar-hide" style={{scrollbarWidth: "none"}}>{list.length>0 && list.map((movie:any)=><Movie key={movie.id} movie={movie}/>)}</div>:<div className="flex gap-5">
            { Array.from({ length: 4 }).map((_, index) => (<VideoSkeleton key={index}/>))}</div>}
    </div>)
}
export default MoviesList;