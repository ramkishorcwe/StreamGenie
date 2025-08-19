import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const [video, setVideo] = useState<any>([]);
  const { id } = useParams();
  const fetchVideos = async() => {
    const base = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    // https://api.themoviedb.org/3/movie/1087192/videos?language=en-US

    const resp = await fetch(base, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_ACCESS_TOKEN}`,
        }
    });
    const data = await resp.json()
    console.log(data.results);
    const tempVideos = data.results.map((video:any)=>{
        if(video.type==="Teaser"){
            return video;
        }
    })
    setVideo([...tempVideos[0]]);
  };

  useEffect(() => {
    //fetch video by id from tmdb
    console.log(id);
    fetchVideos();
  }, []);
  return (
    <>
      <video controls width="70%" className="videoPlayer " src={video.src} />
    </>
  );
};
export default VideoPlayer;
