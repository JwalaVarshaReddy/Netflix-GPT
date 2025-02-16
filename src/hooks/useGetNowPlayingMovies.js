import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utilis/movieSlice";
import { movies_Options } from "../utilis/constants";
export const  useGetNowPlayingMovies=(()=>{
    
    const dispatch=useDispatch();
   const getNowPlayingMovies = async ()=>
    {

      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', movies_Options)
      const response=await data.json();
      console.log(response);
      dispatch(addNowPlayingMovies(response.results))
      
    }
  useEffect(()=>{
    getNowPlayingMovies();},[])

})
