import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies)
  return (
    <div className='px-4 bg-black'>
          <h1 className='text-2xl py-4 text-white text-left'>{title}</h1>
          <div className='flex overflow-x-scroll'>
          <div className='flex'>
            {
                movies.map((film)=>(
                    <MovieCard key={film.id} posterPath={film.poster_path}/>
                
                ))
            }
          </div>
        </div>
        
        
    </div>
  )
}

export default MovieList