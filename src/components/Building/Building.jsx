import React, {useEffect} from "react";
import { Link } from 'react-router-dom'
import VideoSlide from '../VideoSlide/VideoSlide'
import vid01 from './../../videos/WV_animation/WV_Animation_01.mp4'
import vid02 from './../../videos/WV_animation/WV_Animation_02.mp4'
import vid03 from './../../videos/WV_animation/WV_Animation_03.mp4'
import vid04 from './../../videos/WV_animation/WV_Animation_04.mp4'
import rev01 from './../../videos/WV_animation/WV_Reverse_01.mp4'
import rev02 from './../../videos/WV_animation/WV_Reverse_02.mp4'
import rev03 from './../../videos/WV_animation/WV_Reverse_03.mp4'
import rev04 from './../../videos/WV_animation/WV_Reverse_04.mp4'
import img01 from './../../images/posters/WV_img-01.jpg'
import img02 from './../../images/posters/WV_img-02.jpg'
import img03 from './../../images/posters/WV_img-03.jpg'
import img04 from './../../images/posters/WV_img-04.jpg'
import './Building.css'

const Building = () => {

    const videos = [
        {
            id:0,
            name:'',
            vid: (
                <div className='slide00'>
                    <img
                        className='slide00'
                        src={img01}
                        alt=''
                    />
                </div>
            ),
            prev: 8,
            next: 1
        },
        {
            id:1,
            name: '',
            vid: (
                <video 
                    className='slide-vid'
                    autoPlay
                    preload = 'auto'
                    poster= {img01}
                >
                <source
                    src= {vid01}
                    type='video/mp4'
                />
                </video>
            ),
            prev: 8,
            next: 2
        },
        {
            id:2,
            name: '',
            vid: (
                <div className='slide-vid'>
                    <video 
                        className='slide-vid'
                        autoPlay
                        preload = 'auto'
                        poster= {img02}
                    >
                        <source
                            src= {vid02}
                            type='video/mp4'
                        />
                    </video>
                </div>
            ),
            prev: 7,
            next: 3
        },
        {
            id:3,
            name: '',
            vid: (
                <video 
                    className='slide-vid'
                    autoPlay
                    preload = 'auto'
                    poster= {img03}
                >
                    <source
                        src= {vid03}
                        type='video/mp4'
                    />
                </video>
            ),
            prev: 6,
            next: 4
        },
        {
            id:4,
            name: '',
            vid: (
                <div className='slide-vid'>
                    <video 
                        className='slide-vid'
                        autoPlay
                        preload = 'auto'
                        poster= {img04}
                    >
                        <source
                            src= {vid04}
                            type='video/mp4'
                        />
                    </video>
                </div>
            ),
            prev: 5,
            next: 1
        },
        {
            id:5,
            name: '',
            vid: (
                <video 
                    className='slide-vid'
                    autoPlay
                    preload = 'auto'
                    poster= {img01}
                >
                    <source
                        src= {rev04}
                        type='video/mp4'
                    />
                </video>
            ),
            prev: 6,
            next: 4
        },
        {
            id:6,
            name: '',
            vid: (
                <div className='slide-vid'>
                    <video 
                        className='slide-vid'
                        autoPlay
                        preload = 'auto'
                        poster= {img04}
                    >
                        <source
                            src= {rev03}
                            type='video/mp4'
                        />
                    </video>
                </div>
            ),
            prev: 7,
            next: 3
        },
        {
            id:7,
            name: '',
            vid: (
                <video 
                    className='slide-vid'
                    autoPlay
                    preload = 'auto'
                    poster= {img03}
                >
                    <source
                        src= {rev02}
                        type='video/mp4'
                    />
                </video>
            ),
            prev: 8,
            next: 2
        },
        {
            id:8,
            name: '',
            vid: (
                <div className='slide-vid'>
                    <video 
                        className='slide-vid'
                        autoPlay
                        preload = 'auto'
                        poster= {img02}
                    >
                        <source
                            src= {rev01}
                            type='video/mp4'
                        />
                    </video>
                </div>
            ),
            prev: 5,
            next: 1
        }
    ]

    useEffect( () => {
        /* let vids = [vid01,vid02,vid03,vid04,rev01,rev02,rev03,rev04];
        let imgs = [img01,img02,img03,img04];
        vids.forEach((video) => {
            new MediaSource().src = video
        });
        imgs.forEach((image) =>{
            new Image().src = image
        }); */
      },[]);

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