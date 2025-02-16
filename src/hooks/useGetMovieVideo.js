import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addTrailerVideo } from '../utilis/movieSlice'
import { movies_Options } from '../utilis/constants'

const useGetMovieVideo = (movieId) => {
    const trailerVideo=useSelector(store=>store.movie.trailerVideo)
    const dispatch=useDispatch()
    const getMovieVideos=async ()=>
    {
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',movies_Options)
        const json=await data.json();
        console.log(json);
        const filterVideos=json.results.filter(video=>video.type==="Trailer");
        const trailer=filterVideos.length?filterVideos[0]:json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer))
        

    }
    useEffect(()=>{
        getMovieVideos()
    },[])
  
}

export default useGetMovieVideo