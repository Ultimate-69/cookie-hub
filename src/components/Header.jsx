import React from 'react'

export default function Header() {
  return (
    <div>
        <header className='flex justify-center gap-1'>
            <div className='flex justify-center items-center text-center gap-2 cursor-pointer'>
                <img src='/src/assets/cookie-icon.svg'></img>
            </div>
        </header>
    </div>
  )
}
