import { Play, Search, Tv } from 'lucide-react'
import React from 'react'
import cookieIcon from '../assets/cookie-icon.svg'

function redirectToHome() {
    window.location.href = '/'
}

function redirectToSearch() {
    window.location.href = '/search'
}

function redirectToShows() {
    window.location.href = '/shows'
}

export default function Header() {
  return (
    <div>
    <header className='flex flex-col md:flex-row justify-between items-center gap-4 p-4'>
        <div 
            onClick={() => {redirectToHome()}} 
            className='border-2 rounded-2xl p-2 flex items-center text-center gap-2 cursor-pointer
            hover:bg-white hover:text-black transition'>
            <img width={40} height={40} src={cookieIcon}></img>
            <h1 className='text-4xl'>CookieHub</h1>
        </div>
        
        <div className='flex flex-wrap justify-center items-center gap-4'>
            <button 
                onClick={() => {redirectToSearch()}} 
                className='border-2 rounded-2xl p-2 flex items-center text-center gap-2 cursor-pointer
                hover:bg-white hover:text-black transition'>
                <Search/>
                <h1>Search</h1>
            </button>

            <button 
                onClick={() => {redirectToHome()}} 
                className='border-2 rounded-2xl p-2 flex items-center text-center gap-2 cursor-pointer
                hover:bg-white hover:text-black transition'>
                <Play/>
                <h1>Movies</h1>
            </button>

            <button 
                onClick={() => {redirectToShows()}} 
                className='border-2 rounded-2xl p-2 flex items-center text-center gap-2 cursor-pointer
                hover:bg-white hover:text-black transition'>
                <Tv/>
                <h1>TV Shows</h1>
            </button>
        </div>
    </header>

        <hr className='mt-5 mb-5' />
    </div>
  )
}
