import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'


const SecondaryContainer = () => {
    const movies=useSelector(store=>store.movie)
    console.log(movies)
  return (
    <div className='bg-black '>
      <div className='-mt-1500 pl-12 relative z-20'>
      <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies || []}/>
       <MovieList title={"Top Rated"} movies={movies?.topRatedMovies || []}/>
       <MovieList title={"Popular"} movies={movies?.popularMovies|| []}/>
       <MovieList title={"Up Coming Movies"} movies={movies?.upComingMovies|| []}/>

      </div>
       
    </div>
  )
}

export default SecondaryContainer