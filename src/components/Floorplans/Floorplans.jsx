import React, {useState, useEffect} from 'react';
import terrace from './../../images/floorplans/01-terrace.jpg'
import thirdfloor from './../../images/floorplans/02-3rd_floor.jpg'
import secondfloor from './../../images/floorplans/03-2nd_floor.jpg'
import firstfloor from './../../images/floorplans/04-1st_floor.jpg'
import {ReactComponent as PrevArrow} from './../../icons/arrow-prev.svg'
import {ReactComponent as NextArrow} from './../../icons/arrow-next.svg'
import Forth from './Slides/Forth/Forth'
import './Floorplans.css'

const floorplans = [
  {
    id:0,
    name:'Terrace',
    img: (
        <img
          id='slide-image'
          className='slide-img'
          src= {terrace}
          alt= ''
        />
      ),
    comp: <Forth />
  },
  {
    id:1,
    name: 'Third Floor',
    img: (
      <img
        id='slide-image'
        className='slide-img'
        src= {thirdfloor}
        alt= ''
      />
    ),
    comp: null
  },
  {
    id:2,
    name: 'Second Floor',
    img: (
      <img
        id='slide-image'
        className='slide-img'
        src= {secondfloor}
        alt= ''
      />
    ),
    comp: null
  },
  {
    id:3,
    name: 'First Floor',
    img: (
      <div className='slide-img'>
        <img
          className='slide-img'
          id='slide-image'
          src= {firstfloor}
          alt= ''
        />
      </div>
    ),
    comp: null
  }
];

const Floorplans = () => {

  const [item, setItem] = useState(0);

  useEffect( () => {
    /* let pics = [terrace,thirdfloor,secondfloor,firstfloor];
    pics.forEach((image) => {
        new Image().src = image
    }); */
  },[]);

  const changeClassName = (id,name1,name2) =>{
    let cName = document.getElementById(id);
    cName.className = (cName.className === name2) ? name1 : name2;
  }

  const next = () => {
      const nextItem = item === floorplans.length - 1 ? 0 : item + 1;
      setItem(nextItem)
      changeClassName('slide-image','slide-img','slide-img2');
  }
  
  const prev = () => {
      const nextItem = item === 0 ? floorplans.length - 1 : item - 1;
      setItem(nextItem)
      changeClassName('slide-image','slide-img','slide-img2');
  }
  
  return (
    <div className='slider-cont'>
          <div className='slide'>
              {floorplans[item].img}
              {floorplans[item].comp}
              <div className='slide-title'>{floorplans[item].name}</div>
          </div>
          <div className='slider-btns-cont'>
              <button className='slider-btns prevBtn' onClick={prev}>
                  <div className='btn-bkg'>
                      <PrevArrow className='arrow'/>
                  </div>
              </button>
              <button className='slider-btns nextBtn' onClick={next}>
                  <div className='btn-bkg'>
                      <NextArrow className='arrow'/>
                  </div>
              </button>
          </div>
      </div>
  );
  }

export default Floorplans