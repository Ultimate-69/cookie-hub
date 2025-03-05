import { Star } from 'lucide-react'
import React from 'react'

export default function MovieCard( {movie} ) {

    function redirectToMovie() {
        window.location.href = `/movie/${movie.id}`
    }

  return (
    <div onClick={() => {redirectToMovie()}} className='bg-[#3d3c3b] border-2 rounded-lg p-1 cursor-pointer hover:opacity-80 transition'>
        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : '/src/assets/no-movie.png'} />
        <h1 className='text-lg font-bold text-center p-5'>{movie.title}</h1>
        <div className='p-2 pt-0 flex justify-center gap-3'>
            {movie.original_language.toUpperCase() + ' '}
             | 
             <div className='flex gap-2'>
                <Star/>
                {movie.vote_average}
             </div> 
             |
             {' ' + movie.release_date.split('-')[0]}
        </div>
    </div>
  )
}
