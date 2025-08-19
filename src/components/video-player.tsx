import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const [video, setVideo] = useState<any>({});
  const { id } = useParams();
  console.log(id);
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
    console.log(data);
    const tempVideos = data.results.filter((video:any)=>{
        if(video.site==="YouTube"){
            return video;
        }
    })
    console.log(tempVideos[0]);
    setVideo(tempVideos[0]);
  };

  useEffect(() => {
    //fetch video by id from tmdb
    console.log(id);
    fetchVideos();
  }, []);
  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${video.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};
export default VideoPlayer;
