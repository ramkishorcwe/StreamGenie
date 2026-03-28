import Movie from "./movie";
import type { IMovie } from "../store/movies";
import VideoSkeleton from "./shimar-ui/video-skeleton";
import { useNavigate } from "react-router-dom";

export interface IMovieListProps {
    list: IMovie[];
    title: string;
}

// export interface IMovieListProps{
//     list: IMovie[];
//     title: string;
// }

// const MoviesList = ({title, list}:IMovieListProps)=>{
//     const navigate = useNavigate()
//     const seeAllHandle = (list:IMovie[])=>{
//         navigate(`/movies/${title}`, {state:{list:list}})
//     }
//     const newTitle = title.split("_").map((word:string)=>word[0].toLocaleUpperCase()+word.substring(1))
//     return(<div className="m-4 flex flex-col" >
//         <div className="flex justify-between">
//         <h3 className="text-lg text-gray-500 ml-4">{newTitle.join(" ")}</h3>
// <Button className={"cursor-pointer "} onClick={()=>seeAllHandle(list)}>
//     See All
// </Button>
//         </div>
//         {list.length>0?<div className="flex flex-nowrap overflow-x-auto scrollbar-hide" style={{scrollbarWidth: "none"}}>{list.length>0 && list.map((movie:any)=><Movie key={movie.id} movie={movie}/>)}</div>:<div className="flex gap-5">
//             { Array.from({ length: 4 }).map((_, index) => (<VideoSkeleton key={index}/>))}</div>}
//     </div>)
// }
// export default MoviesList;


const MoviesList = ({ title, list }: IMovieListProps) => {
    const navigate = useNavigate();

    const seeAllHandle = (list: IMovie[]) => {
        navigate(`/movies/${title}`, { state: { list } });
    };

    const newTitle = title
        .split("_")
        .map((word: string) => word[0].toUpperCase() + word.substring(1));

    return (
        <div className="mb-8">

            {/* Title Row */}
            <div className="flex justify-between items-center mb-3 px-2">
                <h3 className="text-xl font-semibold text-white">
                    {newTitle.join(" ")}
                </h3>

                <button
                    className="text-sm text-gray-400 hover:text-white transition"
                    onClick={() => seeAllHandle(list)}
                >
                    See All →
                </button>
            </div>

            {/* Movie Row */}
            {list.length > 0 ? (
                <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-2">
                    {list.map((movie: any) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="flex gap-4 px-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <VideoSkeleton key={index} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MoviesList;