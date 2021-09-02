import React from "react";
import { Link } from 'react-router-dom'
import VideoSlide from '../VideoSlide/VideoSlide'
import vid01 from './../../videos/WV_animation/WV_Animation_01.mp4'
import vid02 from './../../videos/WV_animation/WV_Animation_02.mp4'
import vid03 from './../../videos/WV_animation/WV_Animation_03.mp4'
import vid04 from './../../videos/WV_animation/WV_Animation_04.mp4'
import img01 from './../../images/posters/WV_img-01.jpg'
import img02 from './../../images/posters/WV_img-02.jpg'
import img03 from './../../images/posters/WV_img-03.jpg'
import img04 from './../../images/posters/WV_img-04.jpg'
import './Building.css'

const videos = [
    {
        id:0,
        name:'',
        vid: (
            <div className='slide-vid'>
                <video 
                    className='slide-vid'
                    autoPlay
                    preload
                    poster= {img01}
                >
                    <source
                        src= {vid01}
                        type='video/mp4'
                    />
                </video>
            </div>
        )
    },
    {
        id:1,
        name: '',
        vid: (
            <video 
                className='slide-vid'
                autoPlay
                preload
                poster= {img02}
            >
            <source
                src= {vid02}
                type='video/mp4'
            />
            </video>
        )
    },
    {
        id:2,
        name: '',
        vid: (
            <div className='slide-vid'>
                <video 
                    className='slide-vid'
                    autoPlay
                    preload
                    poster= {img03}
                >
                    <source
                        src= {vid03}
                        type='video/mp4'
                    />
                </video>
            </div>
        )
    },
    {
        id:3,
        name: '',
        vid: (
            <video 
                className='slide-vid'
                autoPlay
                preload
                poster= {img04}
            >
                <source
                    src= {vid04}
                    type='video/mp4'
                />
            </video>
        )
    }
]

const Building = () => {
    return (
        <div>
            <VideoSlide items = {videos}/>
            <div className='vidCont'>
                <button className='fp-btn btn'>
                    <Link to='/floorplans' className='btn'>
                        Floorplans
                    </Link>
                </button>
            </div>
        </div>
    )
};

export default Building