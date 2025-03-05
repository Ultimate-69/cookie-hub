import { Star } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner';
import { useParams } from 'react-router'

export default function ShowPage() {

    const params = useParams();
    const showId = params.showId;
    const [show, setShow] = useState({});
    const [isLoaded, setisLoaded] = useState(false);
    const apiKey = import.meta.env.VITE_READ_API_KEY;

    async function fetchShowDetails() {
        try {
            const url = `https://api.themoviedb.org/3/tv/${showId}`;
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
              setShow(data);
              setisLoaded(true);
        } catch (error) {
            console.error(error);
            
        }
    }

    useEffect(() => {
        fetchShowDetails();
    }, [])

    return (
        isLoaded ?
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-6xl font-bold text-center mb-5'>{show.title}</h1>
            <div className='flex gap-2 items-center justify-center'>
                <img className='border rounded-2xl object-contain h-128 w-auto' src={show.poster_path ? `https://image.tmdb.org/t/p/original/${show.poster_path}` : '/src/assets/no-movie.png'} alt={show.title} />
                <img className='rounded-2xl h-128 w-3/5 object-cover hidden md:block' src={show.backdrop_path ? `https://image.tmdb.org/t/p/original/${show.backdrop_path}` : '/src/assets/no-movie.png'} alt={show.title} />
            </div>
            <div className='bg-white rounded-2xl text-black p-5 m-8'>
                {show.homepage ? 
                <button onClick={() => {
                    window.location.href = show.homepage
                }} className="px-6 py-2 bg-black text-white font-bold rounded-md cursor-pointer
                  hover:opacity-80 transition mb-5">
                    Visit Homepage
                  </button> : 'Homepage Unavailable'}

                <p className='text-3xl font-bold mb-5'>Overview</p>
                <h2 className='text-2xl mb-5'>{show.overview}</h2>
                <p className='text-3xl font-bold mb-5'>Show Details</p>
                <h2 className='text-2xl mb-5 flex gap-1 items-center'> {show.languages[0].toUpperCase()} - {show.first_air_date} - {show.type} - <Star/> {show.vote_average}</h2>
            </div>
        </div>
        :
        <div className='flex justify-center h-screen'>
            <Oval/>
        </div>
    )
}
