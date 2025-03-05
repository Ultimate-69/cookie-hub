import { Star } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner';
import { useParams } from 'react-router'

export default function MoviePage() {

    const params = useParams();
    const movieId = params.movieId;
    const [movie, setMovie] = useState({});
    const [isLoaded, setisLoaded] = useState(false);
    const apiKey = import.meta.env.VITE_READ_API_KEY;

    async function fetchMovieDetails() {
        try {
            const url = `https://api.themoviedb.org/3/movie/${movieId}`;
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
              setMovie(data);
              setisLoaded(true);
        } catch (error) {
            console.error(error);
            
        }
    }

    useEffect(() => {
        fetchMovieDetails();
    }, [])

    return (
        isLoaded ?
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-6xl font-bold text-center mb-5'>{movie.title}</h1>
            <div className='flex gap-2 items-center justify-center'>
                <img className='border rounded-2xl object-contain h-128 w-auto' src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : '/src/assets/no-movie.png'} alt={movie.title} />
                <img className='rounded-2xl h-128 w-3/5 object-cover hidden md:block' src={movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : '/src/assets/no-movie.png'} alt={movie.title} />
            </div>
            <div className='bg-white rounded-2xl text-black p-5 m-8'>
                {movie.homepage ? 
                <button onClick={() => {
                    window.location.href = movie.homepage
                }} className="px-6 py-2 bg-black text-white font-bold rounded-md cursor-pointer
                  hover:opacity-80 transition mb-5">
                    Visit Homepage
                  </button> : 'Homepage Unavailable'}

                <p className='text-3xl font-bold mb-5'>Overview</p>
                <h2 className='text-2xl mb-5'>{movie.overview}</h2>
                <p className='text-3xl font-bold mb-5'>Movie Details</p>
                <h2 className='text-2xl mb-5 flex gap-1 items-center'>{movie.original_language.toUpperCase()} - {movie.release_date} - {Math.floor(movie.runtime / 60) + ' Hour' + (Math.floor(movie.runtime/60) !== 1 ? 's' : '') + ' ' + movie.runtime % 60 + ' Minutes'} - <Star/> {movie.vote_average}</h2>
            </div>
        </div>
        :
        <div className='flex justify-center h-screen'>
            <Oval/>
        </div>
    )
}
