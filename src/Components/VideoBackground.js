import React, { useEffect } from 'react'
import { movies_Options } from '../utilis/constants'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utilis/movieSlice'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useGetMovieVideo from '../hooks/useGetMovieVideo'

const VideoBackground = ({movieId}) => {
    const trailerVideo=useSelector(store=>store.movie.trailerVideo)
   useGetMovieVideo(movieId)
  return (
    <div w-screen>
        <iframe  
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+'?&autoplay=1&mute=1'}
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground