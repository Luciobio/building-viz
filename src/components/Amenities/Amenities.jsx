import React, {useEffect} from 'react'
import Slideshow from '../Slideshow/Slideshow'
import rooftop from './../../images/cams/rooftop-cam.jpg'
import bedroom from './../../images/cams/bedroom-cam.jpg'
import bathroom from './../../images/cams/bathroom-cam.jpg'
import kitchen from './../../images/cams/kitchen-cam.jpg'
import './Amenities.css'

const amenities = [
    {
        id: 0,
        name: 'Kitchen',
        src: (
            <img
                id='slide-image'
                className='slide-img'
                src= {kitchen}
                alt= ''
            />
        )
    },
    {
        id: 1,
        name: 'Bedroom',
        src: (
            <img
                id='slide-image'
                className='slide-img'
                src= {bedroom}
                alt= ''
            />
        )
    },
    {
        id: 2,
        name: 'Bathroom',
        src: (
            <img
                id='slide-image'
                className='slide-img'
                src= {bathroom}
                alt= ''
            />
        )
    },
    {
        id: 3,
        name: 'Rooftop',
        src: (
            <img
                id='slide-image'
                className='slide-img'
                src= {rooftop}
                alt= ''
            />
        )
    }
]

const Amenities = () => {
    
    useEffect( () => {
        /* let pics = [kitchen,bedroom,bathroom,kitchen];
        pics.forEach((image) => {
            new Image().src = image
        }); */
      },[]);

    return (
        <div>
            <Slideshow items = {amenities}/>
        </div>
    );
}

export default Amenities