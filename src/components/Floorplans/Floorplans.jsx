import React from 'react'
import Slideshow from '../Slideshow/Slideshow'
import terrace from './../../images/floorplans/01-terrace.jpg'
import terraceA from './../../images/floorplans/01-terrace_a.png'
import terraceB from './../../images/floorplans/01-terrace_b.png'
import thirdfloor from './../../images/floorplans/02-3rd_floor.jpg'
import secondfloor from './../../images/floorplans/03-2nd_floor.jpg'
import firstfloor from './../../images/floorplans/04-1st_floor.jpg'
import './Floorplans.css'

const floorplans = [
    {
      id:0,
      name:'Terrace',
      src: (
        <div className='fullsizediv'>
          <div className='fullsizediv'>
            <img 
              className='hoverImg hov1a'
              src= {terraceA}
              alt=''
            />
          </div>
          <div className='fullsizediv'>
            <img
              className='hoverImg hov1b'
              src= {terraceB}
              alt=''
            />
          </div>
          <img
            id='slide-image'
            className='slide-img'
            src= {terrace}
            alt= ''
          />
        </div>
      )
    },
    {
      id:1,
      name: 'Third Floor',
      src: (
        <img
          id='slide-image'
          className='slide-img'
          src= {thirdfloor}
          alt= ''
        />
      )
    },
    {
      id:2,
      name: 'Second Floor',
      src: (
        <img
          id='slide-image'
          className='slide-img'
          src= {secondfloor}
          alt= ''
        />
      )
    },
    {
      id:3,
      name: 'First Floor',
      src: (
        <div className='slide-img'>
          <img
            className='slide-img'
            id='slide-image'
            src= {firstfloor}
            alt= ''
          />
        </div>
      )
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