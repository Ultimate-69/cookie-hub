import React, { useState } from 'react'
import { Oval } from 'react-loader-spinner'

export default function Trending() {

    const [isLoaded, setisLoaded] = useState(false);

  return (
    <div className='flex justify-center items-center flex-col'>
        <h1 className='mb-5 text-4xl font-bold'>Trending Movies</h1>
        {isLoaded ? <div></div> : <Oval height={50} width={50} />}
    </div>
  )
}
