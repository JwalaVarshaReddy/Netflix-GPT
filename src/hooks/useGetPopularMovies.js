import React from 'react'
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { movies_Options } from '../utilis/constants';
import { addPopularMovies } from '../utilis/movieSlice';

const useGetPopularMovies = () => {
    const dispatch=useDispatch();
    const getPopularMovies = async ()=>
     {
 
       const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', movies_Options)
       const response=await data.json();
       console.log(response);
       dispatch(addPopularMovies(response.results))
       
     }
   useEffect(()=>{
     getPopularMovies();},[])

  
}

export default useGetPopularMovies