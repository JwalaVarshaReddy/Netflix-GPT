import React from 'react'
import { IMG_CDN } from '../utilis/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
       <img alt="MovieCard "
       src={IMG_CDN+posterPath}/>
    </div>
  )
}

export default MovieCard