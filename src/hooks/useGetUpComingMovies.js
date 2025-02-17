import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { movies_Options } from '../utilis/constants';
import { addUpComingMovies } from '../utilis/movieSlice';

const useGetUpComingMovies = () => {
    const dispatch=useDispatch();
    const getUpComingMovies = async ()=>
     {
 
       const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', movies_Options)
       const response=await data.json();
       console.log(response);
       dispatch(addUpComingMovies(response.results))
       
     }
   useEffect(()=>{
     getUpComingMovies();},[])

    
 
}

export default useGetUpComingMovies