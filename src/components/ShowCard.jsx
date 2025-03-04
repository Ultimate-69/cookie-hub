import { Star } from 'lucide-react'
import React from 'react'

export default function ShowCard( {show} ) {

    function redirectToShow() {
        window.location.href = `/show/${show.id}`
    }

  return (
    <div onClick={() => {redirectToShow()}} className='bg-[#3d3c3b] border-2 rounded-lg p-1 cursor-pointer hover:opacity-80 transition'>
        <img src={`https://image.tmdb.org/t/p/original/${show.poster_path}`} />
        <h1 className='text-lg font-bold text-center p-5'>{show.name}</h1>
        <div className='p-2 pt-0 flex justify-center gap-3'>
            {show.original_language.toUpperCase() + ' '}
             | 
             <div className='flex gap-2'>
                <Star/>
                {show.vote_average}
             </div> 
             |
             {' ' + show.first_air_date.split('-')[0]}
        </div>
    </div>
  )
}
