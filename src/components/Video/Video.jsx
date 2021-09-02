import React from "react";
import VideoSlide from '../VideoSlide/VideoSlide'
import vid01 from './../../videos/WV_animation/WV_Animation_01.mp4'
import vid02 from './../../videos/WV_animation/WV_Animation_02.mp4'
import vid03 from './../../videos/WV_animation/WV_Animation_03.mp4'
import vid04 from './../../videos/WV_animation/WV_Animation_04.mp4'

const videos = [
    {
        id:0,
        name:'01',
        vid: (
            <div className='slide-vid'>
                <video 
                    className='slide-vid'
                    autoPlay
                    preload
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
        name: '02',
        vid: (
            <video 
                className='slide-vid'
                autoPlay
                preload
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
        name: '03',
        vid: (
            <div className='slide-vid'>
                <video 
                    className='slide-vid'
                    autoPlay
                    preload
                    poster
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
        name: '04',
        vid: (
            <video 
                className='slide-vid'
                autoPlay
            >
                <source
                    src= {vid04}
                    type='video/mp4'
                />
            </video>
        )
    }
]

const Video = () => {
    return (
        <div>
            <VideoSlide items = {videos}/>
        </div>
    )
};

export default Video