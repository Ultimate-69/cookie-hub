import React, { useEffect } from 'react'
import TrendingShows from '../components/TrendingShows'

export default function Shows() {

    useEffect(() => {
        document.title = 'CookieHub | Shows'
    }, [])

  return (
    <div>
        <TrendingShows/>
    </div>
  )
}
