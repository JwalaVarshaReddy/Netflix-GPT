import React, { useEffect } from 'react'
import Header from './Header'
import { movies_Options } from '../utilis/constants'
import { useGetNowPlayingMovies } from '../hooks/useGetNowPlayingMovies'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utilis/movieSlice'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useGetPopularMovies from '../hooks/useGetPopularMovies'
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies'
import useGetUpComingMovies from '../hooks/useGetUpComingMovies'
const Browse = () => {
    useGetNowPlayingMovies();
    useGetPopularMovies();
    useGetTopRatedMovies();
    useGetUpComingMovies();
    
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;