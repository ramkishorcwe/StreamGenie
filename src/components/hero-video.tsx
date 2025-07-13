
const HeroVideo = ({id, title, description}:any)=>{
    return(<>
    <iframe
        width="640"
        height="360"
        aria-disabled
        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=-SFcIUEvNOQ`}
        //   frameborder="0"
        allow="autoplay; encrypted-media"
        //   allowfullscreen
        // className="border: none aspect-video w-[95%] h-7/12"
      />
      <div className="w-6 absolute top-2/5 left-10">
        <p className="text-white font-bold">{title}</p>
        <p className="text-white">{description}</p>
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
export default HeroVideo