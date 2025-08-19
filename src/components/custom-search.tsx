import { useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Modal } from "antd";
import Movie from "./movie";

export interface ICustomSearchProps {
  isSearch: boolean;
  toggleModalOpenClose: any;
}

export interface IResponseShample {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

const CustomSearch = ({
  isSearch,
  toggleModalOpenClose,
}: ICustomSearchProps) => {
  const inputRef = useRef<any>(null);
  const [state, setstate] = useState<any>([]);
  const handleSearch = async () => {
    let text = "";
    if (inputRef && inputRef.current && inputRef.current.value)
      text = inputRef.current.value;
    const headers = {
      Authorization: `Bearer ${import.meta.env.VITE_PERPLEXITY_API_KEY}`,
      "Content-Type": "application/json",
    };

    const payload = {
      model: "sonar-pro",
      search_context_size: "none",
      messages: [
        {
          role: "user",
          //   content: `Give me the names of the top 5 ${text} movies. Respond **only** with a JavaScript array of strings, like ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"]. Do not include ratings, descriptions, or any additional text.`,
          content: `Give me the names of any 5  ${text} movies. Respond ONLY with a JavaScript array of strings, like ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"]. Do not include any other text, ratings, or descriptions.`,
        },
      ],
    };

    const response = await fetch(import.meta.env.VITE_PERPLEXITY_BASE_URI, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    inputRef.current.value = "";
    // Print the AI's response
    console.log(data.choices[0].message.content); // replace with console.log(data.choices[0].message.content) for just the content
    toggleModalOpenClose(true);

    const movieNames = JSON.parse(data.choices[0].message.content);
    const allResultArr = movieNames.map(async (movieName: any) => {
      const searchMovieByMovieName = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`;
      //   const moviesResponse = await fetch(searchMovieByMovieName);
      //   const data: any = await moviesResponse.json();
      const moviesResponse = await fetch(searchMovieByMovieName, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_ACCESS_TOKEN}`,
        },
      });
      const data: any = await moviesResponse.json();
      console.log(data);
      return data.results;
    });
    // let finalArr:any = await allResultArr.map((result:any)=>{
    //         finalArr = [...finalArr,...result]
    // })
    // console.log(allResultArr.flatten())
    let finalArr: any = (await Promise.all(allResultArr)).flat();
    setstate([...finalArr]);
  };

    const handleKeyDown = (e:any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-2 m-5">
      <Modal
        open={isSearch}
        onCancel={() => toggleModalOpenClose(false)}
        className=" flex flex-wrap m-auto ant-modal-wrap !w-auto"
      >
        <div className="w-[1004px] flex flex-wrap gap-7">
          {state.map((video: any) => (
            <Movie movie={video} className={"w-[300px]"} />
          ))}
        </div>
      </Modal>
      <input
        placeholder="Write movie type here for best result"
        className="w-[96%] p-2 border-gray-400 border-2 rounded-tl-md rounded-bl-md"
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <button
        className="p-4 bg-transparent text-black font-lg border-gray-400 border-2 rounded-tr-md rounded-br-md cursor-pointer  hover:bg-[rgba(67,92,97,0.1)]"
        onClick={handleSearch}
      >
        {<IoSearchOutline />}
      </button>
    </div>
  );
};
export default CustomSearch;
