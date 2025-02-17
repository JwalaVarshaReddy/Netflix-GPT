import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfo  } from '@fortawesome/free-solid-svg-icons';

const VideoTitle = ({ title, overview }) => {
    return (
      <div className='w-screen aspect-video pt-[20%] px-6 text-left w-full text-white absolute bg-gradient-to-r from-black'>
        <h1 className='font-bold text-3xl w-1/4'>{title}</h1>
        <p className='py-6 text-xs w-1/4'>{overview}</p>
        <div className='w-1/4 flex text-sm space-x-4'>
          <button className=' text-black bg-white p-4 text-lg  px-16 rounded-lg hover:bg-opacity-80'>  <FontAwesomeIcon icon={faPlay} />
         Play</button>
          <button className=' text-black bg-white p-4 rounded-lg bg-opacity-50 text-lg px-8'><FontAwesomeIcon icon={faInfo} />
          More Info</button>
        </div>
      </div>
    );
  };
export default VideoTitle