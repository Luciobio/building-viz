/* import React from 'react'
import Slideshow from '../Slideshow/Slideshow'
import './Video.css'

const building = [
    {
      id:0,
      name:'South View',
      src: 'https://3dus.us/wp-content/uploads/2021/05/Marina-Westshore-Townhomes-Aerial-view-1.jpg'
    },
    {
      id:1,
      name: 'West View',
      src: 'https://3dus.us/wp-content/uploads/2021/05/Marina-Westshore-Townhomes-Street-View-Front-1.jpg'
    },
    {
      id:2,
      name: 'East View',
      src: 'https://3dus.us/wp-content/uploads/2021/05/Marina-Westshore-Townhomes-Street-View-Corner.jpg'
    }
  ];

const Building = () => {
  
  return (
    <div>
      <Slideshow items = {building}/>
    </div>
  );
  }

export default Building */

import React from 'react'
import ReactPlayer from "react-player"
import './Video.css'

const Video = () => {

  return (
    <div className='vid'>
      <ReactPlayer
        className='vid'
        url="https://vimeo.com/395299333"
        controls= 'true'
        width= ''
        height= '100%'
      /> 

    </div>
  );
}

export default Video