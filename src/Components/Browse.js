import React, { useEffect } from 'react'
import Header from './Header'
import { movies_Options } from '../utilis/constants'
import { useGetNowPlayingMovies } from '../hooks/useGetNowPlayingMovies'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utilis/movieSlice'
import MainContainer from './MainContainer'
const Browse = () => {
    useGetNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
    </div>
  )
}

export default Browse;