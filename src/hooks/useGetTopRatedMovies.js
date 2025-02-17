import React from 'react'
import { useDispatch } from 'react-redux';
import { movies_Options } from '../utilis/constants';
import { addTopRatedMovies } from '../utilis/movieSlice';
import { useEffect } from 'react';

const useGetTopRatedMovies = () => {
    const dispatch=useDispatch();
    const getTopRatedMovies = async ()=>
     {
 
       const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', movies_Options)
       const response=await data.json();
       console.log(response);
       dispatch(addTopRatedMovies(response.results))
       
     }
   useEffect(()=>{
     getTopRatedMovies();},[])
  
}

export default useGetTopRatedMovies