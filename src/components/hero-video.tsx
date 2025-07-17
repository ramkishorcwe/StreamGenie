
import { useState } from 'react';
const HeroVideo = ({id, title, description}:any)=>{
    return(<>
    <iframe
        width="840"
        height="460"
        aria-disabled
        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=-SFcIUEvNOQ`}
        //   frameborder="0"
        allow="autoplay; encrypted-media"
        //   allowfullscreen
        // className="border: none aspect-video w-[95%] h-7/12"
      />
      <div className="w-6 absolute top-3/5 left-10">
        <p className="text-white font-bold">{title}</p>
        <p className="text-white w-300">{description}</p>
        <div className="flex gap-2 w-fit text-nowrap">
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                Play
            </button>
            <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
                More Info
            </button>
        </div>
      </div>
    </>)
}
// export default HeroVideo



const videos = [
  {
    id: '-SFcIUEvNOQ',
    title: 'Video 1',
    description: 'This is the first hero video.',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Video 2',
    description: 'Here is the second video!',
  },
  {
    id: 'tgbNymZ7vqY',
    title: 'Video 3',
    description: 'Third hero video, enjoy!',
  },
];

const HeroContainer = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="relative m-5">
      {/* Main Video Display */}
      <HeroVideo
        id={videos[selected].id}
        title={videos[selected].title}
        description={videos[selected].description}
      />

      {/* Dot Selectors */}
      <div className="absolute bottom-5 left-80 flex space-x-3">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              selected === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroContainer;
