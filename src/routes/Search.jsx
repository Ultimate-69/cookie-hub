import { SearchIcon } from 'lucide-react'
import React, { useState } from 'react'

export default function Search() {

  const [searchText, setSearchText] = useState('')

  function handleSearch() {
    console.log(searchText);
  }

  function handleSearchTextChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>Search</h1>
        <div className='flex items-center justify-center text-center w-[80%]'>
            <input onChange={handleSearchTextChange} type='text' className='border border-gray-300 rounded-xl p-2 mt-4 w-1/4 flex-1' placeholder='Search for a movie or show'/>
            <button onClick={() => {handleSearch()}} className='rounded-xl flex mt-auto ml-4 cursor-pointer h-full bg-white text-black
            hover:opacity-80 p-2 items-center gap-3'><SearchIcon/>Submit</button>
        </div>
        <h1 className='text-xl mt-5'>Movies</h1>
        <h1 className='text-xl mt-5'>Shows</h1>
    </div>
  )
}
