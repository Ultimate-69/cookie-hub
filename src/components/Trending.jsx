import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import MovieCard from "./MovieCard";
import { Clapperboard, Star } from "lucide-react";

export default function Trending() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const apiKey = import.meta.env.VITE_READ_API_KEY;

  function getYearFromDate(date) {
    return date.split("-")[0];
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        const url =
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        };

        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Failed to fetch movies");
        const data = await response.json();

        setMovies(data.results);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, [apiKey]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-5 text-4xl font-bold">Trending Movies</h1>
      {isLoaded ? (
        <>
          {movies.length > 0 && (
            <div
              className="overflow-hidden border-2 rounded-2xl relative w-full h-[80vh] bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[0].backdrop_path})`,
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 max-w-2xl px-8 text-white">
                <h2 className="text-5xl font-bold">{movies[0].title}</h2>
                <h3 className="mt-3 ml-3 flex gap-2"> <Star/> {`${movies[0].vote_average} (${movies[0].vote_count}) • ${getYearFromDate(movies[0].release_date)}`}</h3>
                <p className="mt-2 text-lg text-gray-300 line-clamp-3">
                  {movies[0].overview}
                </p>
                <div className="mt-5 flex gap-4">
                  <button onClick={() => {
                    window.location.href = `/movie/${movies[0].id}`;
                  }} className="px-6 py-2 bg-white text-black font-bold rounded-md cursor-pointer
                  hover:opacity-80 transition">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-8">
            {movies.slice(1).map((movie) => (
              <div key={movie.id}>
                <MovieCard movie={movie} />
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
