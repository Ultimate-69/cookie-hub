import { SearchIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Oval } from 'react-loader-spinner';
import MovieCard from '../components/MovieCard';
import ShowCard from '../components/ShowCard';

export default function Search() {

  const [searchText, setSearchText] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [shows, setShows] = useState([]);
  const [movies, setMovies] = useState([]);
  const apiKey = import.meta.env.VITE_READ_API_KEY;
  const [searched, setSearched] = useState(false);

  function getYearFromDate(date) {
    return date.split("-")[0];
  }

  async function handleSearch() {
    setSearched(true);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`;
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

      setMovies(() => (data.results));
      console.log(movies);

      const urlShow = `https://api.themoviedb.org/3/search/tv?query=${searchText}&include_adult=false&language=en-US&page=1`;

      
      const responseShow = await fetch(urlShow, options);
      if (!responseShow.ok) throw new Error("Failed to fetch shows");
      const dataShow = await responseShow.json();

      setShows(() => (dataShow.results));

      setIsLoaded(true);

    } catch (error) {
      console.error("Error fetching movies/shows:", error);
    } finally {
      setSearched(false);
    }

  }

  function handleSearchTextChange(event) {
    setSearchText(event.target.value.replace(' ', '%20'));
  }

  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>Search</h1>
        <div className='flex items-center justify-center text-center w-[80%]'>
            <input onChange={handleSearchTextChange} type='text' className='border border-gray-300 rounded-xl p-2 mt-4 w-1/4 flex-1' placeholder='Search for a movie or show'/>
            <button onClick={() => {handleSearch()}} className='rounded-xl flex mt-auto ml-4 cursor-pointer h-full bg-white text-black
            hover:opacity-80 p-2 items-center gap-3'><SearchIcon/>Submit</button>
        </div>
        <h1 className='text-xl mt-5 mb-5'>Movies</h1>
        {isLoaded ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-8">
            {movies.map((movie) => (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <Oval visible={searched} height={50} width={50} />
      )}
        <h1 className='text-xl mt-5 mb-5'>Shows</h1>
        {isLoaded ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-8">
            {shows.map((show) => (
              <div key={show.id}>
                <ShowCard show={show} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <Oval visible={searched} height={50} width={50} />
      )}
    </div>
  )
}
