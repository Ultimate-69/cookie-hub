import { Search } from 'lucide-react'
import React from 'react'

function redirectToHome() {
    window.location.href = '/'
}

function redirectToSearch() {
    window.location.href = '/search'
}

export default function Header() {
  return (
    <div>
        <header className='flex justify-between items-center'>
            <div onClick={() => {redirectToHome()}} className='border-2 rounded-2xl p-2 flex items-center text-center gap-2 cursor-pointer
            hover:bg-white hover:text-black transition'>
                <img width={40} height={40} src='/src/assets/cookie-icon.svg'></img>
                <h1 className='text-4xl'>CookieHub</h1>
            </div>
            <div>
                <button onClick={() => {redirectToSearch()}} className='border-2 rounded-2xl p-2 flex items-center text-center gap-2 cursor-pointer
                hover:bg-white hover:text-black transition'>
                    <Search/>
                    <h1>Search</h1>
                </button>
            </div>
        </header>
        <hr className='mt-5 mb-5' />
    </div>
  )
}
