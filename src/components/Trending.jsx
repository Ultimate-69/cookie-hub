import React, { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import MovieCard from './MovieCard';

export default function Trending() {

    const [isLoaded, setisLoaded] = useState(false);
    const [movies, setMovies] = useState([]);
    const apiKey = import.meta.env.VITE_READ_API_KEY;

    function fetchMovies() {
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiKey}`
            }
        };

        const movieData = fetch(url, options);
        movieData.then((response) => {
            response.json().then((data) => {
                setMovies(data.results);
                setisLoaded(true);
            })
        })
    }

    useEffect(() => {
        fetchMovies();
    }, [])

  return (
    <div className='flex justify-center items-center flex-col'>
        <h1 className='mb-5 text-4xl font-bold'>Trending Movies</h1>
        {isLoaded ?
         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <MovieCard movie={movie} />
                </div>
            ))}
         </div> 
         : 
         <Oval height={50} width={50} />
        }
    </div>
  )
}
