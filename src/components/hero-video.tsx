
import { useEffect, useState } from 'react';
const HeroVideo = ({ id, title, description }: any) => {
  return (<>
    <iframe
      width="840"
      height="460"
      aria-disabled
      src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1`}
      //   frameborder="0"
      allow="autoplay; encrypted-media"
      //   allowfullscreen
      className="mb-30 rounded-lg"
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
    title: 'Epic Adventure Begins',
    description: 'Join the journey as heroes rise and face challenges in an epic world full of surprises and action.',
  },
  {
    id: "aqz-KE-bpKQ", // 4K demo video
    title: "4K Nature Demo",
    description: "Beautiful nature footage in ultra HD quality.",
  },
  {
    id: "ScMzIvxBSi4", // Sample video
    title: "Sample Video Clip",
    description: "A clean sample video often used for demos.",
  },
];

const HeroContainer = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative m-5 w-1">
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${selected === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroContainer;
