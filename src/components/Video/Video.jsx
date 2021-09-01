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
        src: vid01
    },
    {
        id:1,
        name: '02',
        src: vid02
    },
    {
        id:2,
        name: '03',
        src: vid03
    },
    {
        id:3,
        name: '04',
        src: vid04
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