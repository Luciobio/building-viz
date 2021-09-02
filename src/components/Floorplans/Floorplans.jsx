import React from 'react'
import Slideshow from '../Slideshow/Slideshow'
import terrace from './../../images/floorplans/01-terrace.jpg'
import thirdfloor from './../../images/floorplans/02-3rd_floor.jpg'
import secondfloor from './../../images/floorplans/03-2nd_floor.jpg'
import firstfloor from './../../images/floorplans/04-1st_floor.jpg'
import './Floorplans.css'

const floorplans = [
    {
      id:0,
      name:'Terrace',
      src: terrace
    },
    {
      id:1,
      name: 'Third Floor',
      src: thirdfloor
    },
    {
      id:2,
      name: 'Second Floor',
      src: secondfloor
    },
    {
      id:3,
      name: 'First Floor',
      src: firstfloor
    }
  ];

const Floorplans = () => {
  
  return (
    <div>
      <Slideshow items = {floorplans}/>
    </div>
  );
  }

export default Floorplans