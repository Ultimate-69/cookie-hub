import React, { useEffect } from 'react'
import Trending from '../components/Trending'

export default function HomePage() {

    useEffect(() => {
        document.title = 'CookieHub | Home'
    }, [])

  return (
    <div>
        <Trending/>
    </div>
  )
}
