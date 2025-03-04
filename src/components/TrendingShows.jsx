import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import ShowCard from "./ShowCard";
import { Clapperboard, Star } from "lucide-react";

export default function TrendingShows() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shows, setShows] = useState([]);
  const apiKey = import.meta.env.VITE_READ_API_KEY;

  function getYearFromDate(date) {
    return date.split("-")[0];
  }

  useEffect(() => {
    async function fetchShows() {
      try {
        const url =
          "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        };

        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Failed to fetch shows");
        const data = await response.json();

        setShows(data.results);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching shows:", error);
      }
    }

    fetchShows();
  }, [apiKey]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-5 text-4xl font-bold">Trending Shows</h1>
      {isLoaded ? (
        <>
          {shows.length > 0 && (
            <div
              className="overflow-hidden border-2 rounded-2xl relative w-full h-[80vh] bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${shows[0].backdrop_path})`,
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 max-w-2xl px-8 text-white">
                <h2 className="text-5xl font-bold">{shows[0].name}</h2>
                <h3 className="mt-3 ml-3 flex gap-2"> <Star/> {`${shows[0].vote_average} (${shows[0].vote_count}) • ${getYearFromDate(shows[0].first_air_date)}`}</h3>
                <p className="mt-2 text-lg text-gray-300 line-clamp-3">
                  {shows[0].overview}
                </p>
                <div className="mt-5 flex gap-4">
                  <button onClick={() => {
                    window.location.href = `/show/${shows[0].id}`;
                  }} className="px-6 py-2 bg-white text-black font-bold rounded-md cursor-pointer
                  hover:opacity-80 transition">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-8">
            {shows.slice(1).map((show) => (
              <div key={show.id}>
                <ShowCard show={show} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <Oval height={50} width={50} />
      )}
    </div>
  );
}
